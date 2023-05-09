export function smoothScroll() {
	const homeBtn = document.querySelector('.home__btn');

	homeBtn.addEventListener('click', arrow => {
		arrow.preventDefault();

		let blockClients = document.querySelector('.clients');

		setTimeout(() => {
			scroll(blockClients);
		}, 300);
	});

	const arrMenu = document.querySelectorAll('.header__link');

	arrMenu.forEach(item => {
		item.addEventListener('click', e => {
			e.preventDefault();

			let href = e.target.getAttribute('href').substring(1).toLowerCase();
			let sections = document.querySelectorAll('section');

			sections.forEach(section => {
				if (section.getAttribute('id') == href) {
					scroll(section);
				}
			});
		});
	});
}

function scroll(e) {
	window.scroll({
		left: 0,
		top: e.offsetTop,
		behavior: 'smooth',
	});
}
