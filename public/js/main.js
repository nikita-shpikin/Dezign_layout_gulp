/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_smoothScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/smoothScroll .js */ \"./src/js/module/smoothScroll .js\");\n\r\n(0,_module_smoothScroll_js__WEBPACK_IMPORTED_MODULE_0__.smoothScroll)();\r\n\n\n//# sourceURL=webpack://dezign_layout_gulp/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/smoothScroll .js":
/*!****************************************!*\
  !*** ./src/js/module/smoothScroll .js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"smoothScroll\": function() { return /* binding */ smoothScroll; }\n/* harmony export */ });\nfunction smoothScroll() {\r\n\tconst homeBtn = document.querySelector('.home__btn');\r\n\r\n\thomeBtn.addEventListener('click', arrow => {\r\n\t\tarrow.preventDefault();\r\n\r\n\t\tlet blockClients = document.querySelector('.clients');\r\n\r\n\t\tsetTimeout(() => {\r\n\t\t\tscroll(blockClients);\r\n\t\t}, 300);\r\n\t});\r\n\r\n\tconst arrMenu = document.querySelectorAll('.header__link');\r\n\r\n\tarrMenu.forEach(item => {\r\n\t\titem.addEventListener('click', e => {\r\n\t\t\te.preventDefault();\r\n\r\n\t\t\tlet href = e.target.getAttribute('href').substring(1).toLowerCase();\r\n\t\t\tlet sections = document.querySelectorAll('section');\r\n\r\n\t\t\tsections.forEach(section => {\r\n\t\t\t\tif (section.getAttribute('id') == href) {\r\n\t\t\t\t\tscroll(section);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t});\r\n\t});\r\n}\r\n\r\nfunction scroll(e) {\r\n\twindow.scroll({\r\n\t\tleft: 0,\r\n\t\ttop: e.offsetTop,\r\n\t\tbehavior: 'smooth',\r\n\t});\r\n}\r\n\n\n//# sourceURL=webpack://dezign_layout_gulp/./src/js/module/smoothScroll_.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;