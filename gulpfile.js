import gulp from 'gulp';
import GulpPug from 'gulp-pug';
import gulpSize from 'gulp-size';
import browserSync from 'browser-sync';
import gulpPlumber from 'gulp-plumber';
import gulpNotify from 'gulp-notify';
import { deleteAsync } from 'del';
import autoPrefixer from 'gulp-autoprefixer';
import cssO from 'gulp-csso';
import rename from 'gulp-rename';
import shorthand from 'gulp-shorthand';
import mediaQueries from 'gulp-group-css-media-queries';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import babel from 'gulp-babel';
import webpackStream from 'webpack-stream';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import webp from 'gulp-webp';
import webpHtml from 'gulp-webp-html';
import webpCss from 'gulp-webp-css';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';
import gulpIf from 'gulp-if';
import favicons from 'gulp-favicons';
import filter from 'gulp-filter';

const sass = gulpSass(dartSass);
const isProd = process.argv.includes('--production');
const isDev = !isProd;

export const pugToHtml = () => {
	return (
		gulp
			.src('./src/pug/index.pug')
			.pipe(
				gulpPlumber({
					errorHandler: gulpNotify.onError(error => ({
						title: 'PUG',
						message: error.message,
					})),
				})
			)
			.pipe(
				GulpPug({
					pretty: true,
				})
			)
			// .pipe(webpHtml())
			.pipe(gulp.dest('./public'))
			.pipe(browserSync.stream())
	);
};

export const styleSass = () => {
	return gulp
		.src('./src/sass/main.scss', { sourcemaps: isDev })
		.pipe(
			gulpPlumber({
				errorHandler: gulpNotify.onError(error => ({
					title: 'SCSS',
					message: error.message,
				})),
			})
		)
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(webpCss())
		.pipe(autoPrefixer())
		.pipe(shorthand())
		.pipe(mediaQueries())
		.pipe(gulpSize({ title: 'MAIN.CSS' }))
		.pipe(gulpIf(isProd, gulp.dest('./public/css', { sourcemaps: isDev })))
		.pipe(rename({ suffix: '.min' }))
		.pipe(cssO())
		.pipe(gulpSize({ title: 'MAIN.MIN.CSS' }))
		.pipe(gulp.dest('./public/css', { sourcemaps: isDev }));
};

export const javaScript = () => {
	return gulp
		.src('./src/js/main.js', { sourcemaps: isProd })
		.pipe(
			gulpPlumber({
				errorHandler: gulpNotify.onError(error => ({
					title: 'JAVASCRIPT',
					message: error.message,
				})),
			})
		)
		.pipe(babel())
		.pipe(webpackStream({ mode: isProd ? 'production' : 'development' }))
		.pipe(gulp.dest('./public/js', { sourcemaps: isProd }));
};

export const favicon = () => {
	return gulp
		.src('./src/img/favicon/logo.svg')
		.pipe(
			gulpPlumber({
				errorHandler: gulpNotify.onError(error => ({
					title: 'FAVICON',
					message: error.message,
				})),
			})
		)
		.pipe(gulp.dest('./public'))
		.pipe(
			favicons({
				icons: {
					favicons: true,
					appleIcon: true,
					android: true,
					widows: false,
					yandex: false,
					coast: false,
					firefox: false,
					appleStartup: false,
				},
				path: 'img/favicon/',
			})
		)
		.pipe(gulp.dest('./public/favicons'))
		.pipe(
			filter(['favicon.svg', 'apple-touch-icon.png', 'manifest.webmanifest'])
		)
		.pipe(gulp.dest('./public'));
};

export const getImage = () => {
	return (
		gulp
			.src('./src/img/**/*.{png,jpg,jpeg,svg,gif}')
			.pipe(
				gulpPlumber({
					errorHandler: gulpNotify.onError(error => ({
						title: 'IMAGES',
						message: error.message,
					})),
				})
			)
			.pipe(newer('/img'))
			// .pipe(webp())
			// .pipe(gulp.dest('./public/img'))
			// .pipe(gulp.src('./src/img/*.{png,jpg,jpeg,svg,gif}'))
			// .pipe(newer('/img'))
			.pipe(gulpIf(isProd, imagemin()))
			.pipe(gulp.dest('./public/img'))
	);
};

export const getFont = () => {
	return gulp
		.src('./src/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}')
		.pipe(
			gulpPlumber({
				errorHandler: gulpNotify.onError(error => ({
					title: 'FONTS',
					message: error.message,
				})),
			})
		)
		.pipe(newer('./public/font'))
		.pipe(
			fonter({
				formats: ['woff', 'ttf'],
			})
		)
		.pipe(gulp.dest('./public/font'))
		.pipe(ttf2woff2())
		.pipe(gulp.dest('./public/font'));
};

export const clear = async () => {
	await deleteAsync('./public');
};

export const server = () => {
	browserSync({ server: './public' });
};

export const watch = () => {
	gulp.watch('./src/pug/**/*.pug', pugToHtml).on('all', browserSync.reload);
	gulp.watch('./src/sass/**/*.scss', styleSass).on('all', browserSync.reload);
	gulp.watch('./src/js/**/*.js', javaScript).on('all', browserSync.reload);
	gulp
		.watch('./src/img/*.{jpg, png, jpeg, svg, gif}', getImage)
		.on('all', browserSync.reload);
	gulp
		.watch('./src/fonts/*..{eot,ttf,otf,otc,ttc,woff,woff2,svg}', getFont)
		.on('all', browserSync.reload);
	gulp
		.watch('./src/img/favicon/favicon.png', favicon)
		.on('all', browserSync.reload);
};

export const build = gulp.series(
	clear,
	gulp.parallel(pugToHtml, styleSass, javaScript, getImage, getFont, favicon)
);

export const dev = gulp.series(build, gulp.parallel(server, watch));

export default isProd ? build : dev;
