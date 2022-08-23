/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$contentDiv\": () => (/* binding */ $contentDiv),\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\nconst $contentDiv = document.querySelector('div#content');\r\n\r\nfunction createHeader() {\r\n\r\n    const $headerDiv = document.createElement('header');\r\n    \r\n    const $h1 = document.createElement('h1');\r\n    $h1.textContent = 'SLOGGO RESTAURANT';\r\n\r\n    const $nav = document.createElement('nav');\r\n\r\n    const $home = document.createElement('p');\r\n    $home.id = 'home';\r\n    $home.textContent = 'HOME';\r\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.homeButtonEvent)($home);\r\n\r\n    $nav.appendChild($home);\r\n\r\n    const $menu = document.createElement('p');\r\n    $menu.id = 'menu';\r\n    $menu.textContent = 'MENU';\r\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.menuButtonEvent)($menu)\r\n\r\n    $nav.appendChild($menu);\r\n\r\n    const $about = document.createElement('p');\r\n    $about.id = 'about';\r\n    $about.textContent = 'ABOUT';\r\n\r\n    $nav.appendChild($about);\r\n\r\n    $headerDiv.appendChild($h1);\r\n    $headerDiv.appendChild($nav);\r\n\r\n    $contentDiv.appendChild($headerDiv);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHome\": () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createHome() {\r\n    const $contentDiv = document.querySelector('div#content');\r\n    \r\n    const $welcomeContainer = document.createElement('div');\r\n    $welcomeContainer.id = 'welcomeContainer';\r\n    const $welcomeHeader = document.createElement('div');\r\n    $welcomeHeader.id = 'welcomeHeader';\r\n\r\n    const $hOne = document.createElement('h2');\r\n    $hOne.textContent = 'The';\r\n    $welcomeHeader.appendChild($hOne);\r\n\r\n    const $hTwo = document.createElement('h2');\r\n    $hTwo.textContent = 'All';\r\n    $hTwo.classList.add('emphasis1');\r\n    $welcomeHeader.appendChild($hTwo);\r\n\r\n    const $hThree = document.createElement('h2');\r\n    $hThree.textContent = 'New';\r\n    $hThree.classList.add('emphasis2');\r\n    $welcomeHeader.appendChild($hThree);\r\n\r\n    const $hFour = document.createElement('h2');\r\n    $hFour.textContent = 'Burger';\r\n    $welcomeHeader.appendChild($hFour);\r\n\r\n    $welcomeContainer.appendChild($welcomeHeader)\r\n\r\n    const $burgerImg = document.createElement('img');\r\n    $burgerImg.src = './assets/burgerWelcome.png';\r\n\r\n    $welcomeContainer.appendChild($burgerImg);\r\n\r\n    $contentDiv.appendChild($welcomeContainer)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeButtonEvent\": () => (/* binding */ homeButtonEvent),\n/* harmony export */   \"menuButtonEvent\": () => (/* binding */ menuButtonEvent)\n/* harmony export */ });\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\nconsole.log('start');\r\n\r\n(0,_header_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)()\r\n;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHome)()\r\n\r\nfunction homeButtonEvent(but) {\r\n    but.addEventListener('click', (e) => {\r\n        _header_js__WEBPACK_IMPORTED_MODULE_0__.$contentDiv.innerHTML = '';\r\n    \r\n        (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)()\r\n        ;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHome)()\r\n    })\r\n}\r\n\r\nfunction menuButtonEvent(but) {\r\n    but.addEventListener('click', (e) => {\r\n        _header_js__WEBPACK_IMPORTED_MODULE_0__.$contentDiv.innerHTML = '';\r\n    \r\n        (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)()\r\n        ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenu)()\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n\r\n\r\nfunction createMenu() {\r\n\r\n    const $menuContainer = document.createElement('div')\r\n    $menuContainer.classList.add('menuContainer');\r\n\r\n    $menuContainer.innerHTML = `\r\n    <div class=\"card\" id=\"one\">\r\n        <div class=\"cardText\">\r\n            <h1>Burger</h1>\r\n            <p>Delicious burger!</p>\r\n        </div>\r\n        <img src=\"./assets/burgerwelcome.png\">\r\n    </div>\r\n\r\n    <div class=\"card\" id=\"two\">\r\n        <div class=\"cardText\">\r\n            <h1>Burger</h1>\r\n            <p>Delicious burger!</p>\r\n        </div>\r\n        <img src=\"./assets/burgerwelcome.png\">\r\n    </div>\r\n\r\n    <div class=\"card\" id=\"three\">\r\n        <div class=\"cardText\">\r\n            <h1>Burger</h1>\r\n            <p>Delicious burger!</p>\r\n        </div>\r\n        <img src=\"./assets/burgerwelcome.png\">\r\n    </div>\r\n\r\n    <div class=\"card\" id=\"four\">\r\n        <div class=\"cardText\">\r\n            <h1>Burger</h1>\r\n            <p>Delicious burger!</p>\r\n        </div>\r\n        <img src=\"./assets/burgerwelcome.png\">\r\n    </div>\r\n\r\n    <div class=\"card\" id=\"five\">\r\n        <div class=\"cardText\">\r\n            <h1>Burger</h1>\r\n            <p>Delicious burger!</p>\r\n        </div>\r\n        <img src=\"./assets/burgerwelcome.png\">\r\n    </div>\r\n\r\n    <div class=\"card\" id=\"six\">\r\n        <div class=\"cardText\">\r\n            <h1>Burger</h1>\r\n            <p>Delicious burger!</p>\r\n        </div>\r\n        <img src=\"./assets/burgerwelcome.png\">\r\n    </div>\r\n\r\n    <div class=\"card\" id=\"seven\">\r\n        <div class=\"cardText\">\r\n            <h1>Item</h1>\r\n            <p>Item desc</p>\r\n        </div>\r\n        <img src=\"./assets/burgerwelcome.png\">\r\n    </div>\r\n\r\n    <div class=\"card\" id=\"eight\">\r\n        <div class=\"cardText\">\r\n            <h1>Item</h1>\r\n            <p>Item desc</p>\r\n        </div>\r\n        <img src=\"./assets/burgerwelcome.png\">\r\n    </div>`\r\n\r\n    _header_js__WEBPACK_IMPORTED_MODULE_0__.$contentDiv.appendChild($menuContainer)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;