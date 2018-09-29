/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contactTabModule.mjs":
/*!**********************************!*\
  !*** ./src/contactTabModule.mjs ***!
  \**********************************/
/*! exports provided: contactTab */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactTab\", function() { return contactTab; });\nconst contactTab = (() => {\r\n\tconst contactTab = document.createElement('button');\r\n\tconst contactInfo = document.createElement('p');\r\n\r\n\tcontactTab.setAttribute('id', 'contactTab');\r\n\tcontactTab.className = 'tabs';\r\n\tcontactTab.textContent = ' Contact';\r\n\r\n\tcontactTab.style.fontSize = '32px';\r\n\tcontactTab.style.width = '4em';\r\n\tcontactTab.style.height = '2em';\r\n\tcontactTab.style.backgroundColor = 'white';\r\n\tcontactTab.style.margin = 'auto .6em auto .2em';\r\n\tcontactTab.style.position = 'relative';\r\n\tcontactTab.style.display = 'inline-flex';\r\n\tcontactTab.style.justifyContent = 'center';\r\n\tcontactTab.style.alignItems = 'center';\r\n\tcontactTab.style.borderRadius = '25px 25px 0px 0px';\r\n\tcontactTab.style.top = '12px';\r\n\tcontactTab.style.float = 'right';\r\n\tcontactTab.style.outline = 'none';\r\n\tcontactTab.style.borderColor = 'black';\r\n\r\n\tcontactTab.addEventListener('click', function() {\r\n\t\thomeTab.style.backgroundColor = 'white';\r\n\t\thomeTab.style.color = 'black';\r\n\r\n\t\tmenuTab.style.backgroundColor = 'white';\r\n\t\tmenuTab.style.color = 'black';\r\n\r\n\t\tcontactTab.style.backgroundColor = 'black';\r\n\t\tcontactTab.style.color = 'white';\r\n\r\n\t\tinfoContainer.removeChild(infoContainer.firstChild);\r\n\t\tinfoContainer.appendChild(contactInfo);\r\n\t});\r\n\r\n\tcontactInfo.setAttribute('id', 'contactInfo');\r\n\tcontactInfo.style.margin = 'auto';\r\n\tcontactInfo.style.position = 'relative';\r\n\tcontactInfo.style.textAlign = 'center';\r\n\tcontactInfo.style.width = '60%';\r\n\tcontactInfo.style.height = 'auto';\r\n\tcontactInfo.style.fontSize = '2em';\r\n\tcontactInfo.style.textIndent = '50px';\r\n\tcontactInfo.style.whiteSpace = 'pre-line';\r\n\r\n\tcontactInfo.textContent = '1-800-EAT-RSLF';\r\n\r\n\ttabContainer.appendChild(contactTab);\r\n\r\n\tconsole.log('Contact Tab');\r\n\treturn { contactTab, contactInfo };\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/contactTabModule.mjs?");

/***/ }),

/***/ "./src/homeTabModule.mjs":
/*!*******************************!*\
  !*** ./src/homeTabModule.mjs ***!
  \*******************************/
/*! exports provided: homeTab */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homeTab\", function() { return homeTab; });\nconst homeTab = (() => {\r\n\tconst homeTab = document.createElement('button');\r\n\tconst contactTab = document.querySelector('#contactTab');\r\n\tconst menuTab = document.querySelector('#menuTab');\r\n\tconst homeInfo = document.createElement('p');\r\n\r\n\thomeTab.setAttribute('id', 'homeTab');\r\n\thomeTab.className = 'tabs';\r\n\r\n\thomeTab.textContent = ' Home';\r\n\thomeTab.style.fontSize = '32px';\r\n\thomeTab.style.width = '4em';\r\n\thomeTab.style.height = '2em';\r\n\thomeTab.style.backgroundColor = 'black';\r\n\thomeTab.style.color = 'white';\r\n\thomeTab.style.margin = 'auto .2em auto';\r\n\thomeTab.style.position = 'relative';\r\n\thomeTab.style.display = 'inline-flex';\r\n\thomeTab.style.justifyContent = 'center';\r\n\thomeTab.style.alignItems = 'center';\r\n\thomeTab.style.borderRadius = '25px 25px 0px 0px';\r\n\thomeTab.style.top = '12px';\r\n\thomeTab.style.float = 'right';\r\n\thomeTab.style.outline = 'none';\r\n\thomeTab.style.borderColor = 'black';\r\n\r\n\thomeTab.addEventListener('click', function() {\r\n\t\thomeTab.style.backgroundColor = 'black';\r\n\t\thomeTab.style.color = 'white';\r\n\r\n\t\tinfoContainer.removeChild(infoContainer.firstChild);\r\n\t\tinfoContainer.appendChild(homeInfo);\r\n\r\n\t\tcontactTab.style.backgroundColor = 'white';\r\n\t\tcontactTab.style.color = 'black';\r\n\r\n\t\tmenuTab.style.backgroundColor = 'white';\r\n\t\tmenuTab.style.color = 'black';\r\n\t});\r\n\r\n\thomeInfo.setAttribute('id', 'homeInfo');\r\n\thomeInfo.style.margin = 'auto';\r\n\thomeInfo.style.position = 'relative';\r\n\thomeInfo.style.textAlign = 'justify';\r\n\thomeInfo.style.width = '60%';\r\n\thomeInfo.style.height = 'auto';\r\n\thomeInfo.style.fontSize = '1.9em';\r\n\thomeInfo.style.textIndent = '50px';\r\n\thomeInfo.style.whiteSpace = 'pre-wrap';\r\n\r\n\thomeInfo.textContent = `Est perspiciatis dolores atque alias assumenda voluptates possimus. Sequi rerum hic molestiae officia sunt voluptatibus. Qui tempora dolorem sunt nihil quam totam totam. Quaerat harum enim eius qui. Dicta quasi magnam debitis quaerat est perspiciatis et et. \r\n\tEos fugit molestias corporis distinctio. Perferendis facere quaerat expedita. Voluptates beatae quidem repellat harum dolore eveniet officiis debitis. Vel magni enim aliquid provident sit. Molestiae ut et autem incidunt sapiente odio facilis molestiae.`;\r\n\r\n\ttabContainer.appendChild(homeTab);\r\n\tinfoContainer.appendChild(homeInfo);\r\n\r\n\tconsole.log('Home Tab');\r\n\treturn { homeTab, contactTab, menuTab, homeInfo };\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/homeTabModule.mjs?");

/***/ }),

/***/ "./src/img/restaurant-pic.jpg":
/*!************************************!*\
  !*** ./src/img/restaurant-pic.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b1b3726337ca412eb13274d96e325324.jpg\";\n\n//# sourceURL=webpack:///./src/img/restaurant-pic.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLayoutModule_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLayoutModule.mjs */ \"./src/pageLayoutModule.mjs\");\n/* harmony import */ var _contactTabModule_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactTabModule.mjs */ \"./src/contactTabModule.mjs\");\n/* harmony import */ var _menuTabModule_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuTabModule.mjs */ \"./src/menuTabModule.mjs\");\n/* harmony import */ var _homeTabModule_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homeTabModule.mjs */ \"./src/homeTabModule.mjs\");\n\r\n\r\n\r\n\r\n_homeTabModule_mjs__WEBPACK_IMPORTED_MODULE_3__[\"homeTab\"], _menuTabModule_mjs__WEBPACK_IMPORTED_MODULE_2__[\"menuTab\"], _contactTabModule_mjs__WEBPACK_IMPORTED_MODULE_1__[\"contactTab\"];\r\nconst myTabs = document.getElementsByClassName('tabs');\r\n\r\nfor (let i = 0; i < myTabs.length; i++) {\r\n\tconsole.log(myTabs[i]);\r\n\t//alert(this);\r\n\tmyTabs[i].onclick = checkTabs;\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', _pageLayoutModule_mjs__WEBPACK_IMPORTED_MODULE_0__[\"pageLayout\"]);\r\n\r\nfunction checkTabs(event) {\r\n\tconsole.log('hello', this.childNode, this.node);\r\n\tmyTabs.style.backgroundColor = 'white';\r\n\tmyTabs.style.color = 'black';\r\n\r\n\tthis.style.backgroundColor = 'black';\r\n\tthis.style.color = 'white';\r\n\r\n\tinfoContainer.removeChild(infoContainer.firstChild);\r\n\tinfoContainer.appendChild();\r\n\r\n\t/*\r\n    contactTab.style.backgroundColor = 'white';\r\n    contactTab.style.color = 'black';\r\n\r\n    menuTab.style.backgroundColor = 'white';\r\n    menuTab.style.color = 'black'; */\r\n}\r\n/* console.log(myTabs.id);\r\n\r\nmyTabs.childNodes.forEach(function(currentValue, currentIndex, listObj) {\r\n\tconsole.log(currentValue + ', ' + currentIndex + ', ' + this);\r\n}); */\r\n\r\n/* \r\nhomeTab.addEventListener('click', function() {\r\n\thomeTab.style.backgroundColor = 'black';\r\n\thomeTab.style.color = 'white';\r\n\r\n\tinfoContainer.removeChild(infoContainer.firstChild);\r\n\tinfoContainer.appendChild(homeInfo);\r\n\r\n\tcontactTab.style.backgroundColor = 'white';\r\n\tcontactTab.style.color = 'black';\r\n\r\n\tmenuTab.style.backgroundColor = 'white';\r\n\tmenuTab.style.color = 'black';\r\n});\r\n */\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menuTabModule.mjs":
/*!*******************************!*\
  !*** ./src/menuTabModule.mjs ***!
  \*******************************/
/*! exports provided: menuTab */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuTab\", function() { return menuTab; });\nconst menuTab = (() => {\r\n\tconst menuTab = document.createElement('button');\r\n\tconst menuInfo = document.createElement('p');\r\n\r\n\tmenuTab.setAttribute('id', 'menuTab');\r\n\tmenuTab.className = 'tabs';\r\n\tmenuTab.textContent = ' Menu';\r\n\r\n\tmenuTab.style.fontSize = '32px';\r\n\tmenuTab.style.width = '4em';\r\n\tmenuTab.style.height = '2em';\r\n\tmenuTab.style.backgroundColor = 'white';\r\n\tmenuTab.style.margin = 'auto .2em auto';\r\n\tmenuTab.style.position = 'relative';\r\n\tmenuTab.style.display = 'inline-flex';\r\n\tmenuTab.style.justifyContent = 'center';\r\n\tmenuTab.style.alignItems = 'center';\r\n\tmenuTab.style.borderRadius = '25px 25px 0px 0px';\r\n\tmenuTab.style.top = '12px';\r\n\tmenuTab.style.float = 'right';\r\n\tmenuTab.style.outline = 'none';\r\n\tmenuTab.style.borderColor = 'black';\r\n\r\n\tmenuTab.addEventListener('click', function() {\r\n\t\thomeTab.style.backgroundColor = 'white';\r\n\t\thomeTab.style.color = 'black';\r\n\r\n\t\tmenuTab.style.backgroundColor = 'black';\r\n\t\tmenuTab.style.color = 'white';\r\n\r\n\t\tinfoContainer.removeChild(infoContainer.firstChild);\r\n\t\tinfoContainer.appendChild(menuInfo);\r\n\r\n\t\tcontactTab.style.backgroundColor = 'white';\r\n\t\tcontactTab.style.color = 'black';\r\n\t});\r\n\r\n\tmenuInfo.setAttribute('id', 'menuInfo');\r\n\tmenuInfo.style.margin = 'auto';\r\n\tmenuInfo.style.position = 'relative';\r\n\tmenuInfo.style.textAlign = 'center';\r\n\tmenuInfo.style.width = '60%';\r\n\tmenuInfo.style.height = 'auto';\r\n\tmenuInfo.style.fontSize = '2em';\r\n\tmenuInfo.style.textIndent = '50px';\r\n\tmenuInfo.style.whiteSpace = 'pre-line';\r\n\r\n\tmenuInfo.textContent = 'Burgers, Pizza, Spaghetti';\r\n\r\n\ttabContainer.appendChild(menuTab);\r\n\r\n\tconsole.log('Menu Tab' + ' ' + menuInfo.textContent);\r\n\treturn { menuTab, menuInfo };\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/menuTabModule.mjs?");

/***/ }),

/***/ "./src/pageLayoutModule.mjs":
/*!**********************************!*\
  !*** ./src/pageLayoutModule.mjs ***!
  \**********************************/
/*! exports provided: pageLayout */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageLayout\", function() { return pageLayout; });\n/* harmony import */ var _img_restaurant_pic_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/restaurant-pic.jpg */ \"./src/img/restaurant-pic.jpg\");\n\r\n//Module for setting up restaurant page\r\nconst pageLayout = (() => {\r\n\tconst pageStyle = document.querySelector('html').style;\r\n\tconst bodyStyle = document.querySelector('body').style;\r\n\tconst content = document.querySelector('#content');\r\n\tconst tabContainer = document.createElement('section');\r\n\tconst infoContainer = document.createElement('section');\r\n\tconst picContainer = document.createElement('section');\r\n\tconst headline = document.createElement('h1');\r\n\tlet myPic = document.createElement('img');\r\n\r\n\tpageStyle.maxWidth = '100vw';\r\n\tpageStyle.minWidth = '100vw';\r\n\tpageStyle.position = 'relative';\r\n\tpageStyle.fontSize = '16px';\r\n\tpageStyle.backgroundColor = 'grey';\r\n\r\n\tbodyStyle.maxWidth = '100%';\r\n\tbodyStyle.margin = '0px';\r\n\tbodyStyle.position = 'relative';\r\n\tbodyStyle.overflowX = 'hidden';\r\n\r\n\tcontent.style.width = '100%';\r\n\tcontent.style.position = 'relative';\r\n\tcontent.style.margin = 'auto';\r\n\r\n\ttabContainer.setAttribute('id', 'tabContainer');\r\n\ttabContainer.style.fontSize = '32px';\r\n\ttabContainer.style.backgroundColor = 'lightgrey';\r\n\ttabContainer.style.height = '2em';\r\n\r\n\theadline.setAttribute('id', 'headline');\r\n\theadline.textContent = 'JS Restaurant';\r\n\theadline.style.position = 'absolute';\r\n\theadline.style.textAlign = 'center';\r\n\theadline.style.margin = 'auto';\r\n\theadline.style.top = '.4%';\r\n\theadline.style.left = '13.541em';\r\n\theadline.style.width = '6.25em';\r\n\r\n\tpicContainer.setAttribute('id', 'picContainer');\r\n\r\n\tmyPic = new Image();\r\n\tmyPic.src = _img_restaurant_pic_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n\tmyPic.setAttribute('id', 'myPic');\r\n\tmyPic.style.margin = 'auto';\r\n\tmyPic.style.position = 'relative';\r\n\tmyPic.style.height = '34em';\r\n\tmyPic.style.width = '100%';\r\n\tmyPic.style.borderTop = '1px solid black';\r\n\r\n\tinfoContainer.setAttribute('id', 'infoContainer');\r\n\tinfoContainer.style.backgroundColor = 'grey';\r\n\tinfoContainer.style.width = '100%';\r\n\tinfoContainer.style.height = '100%';\r\n\tinfoContainer.style.margin = 'auto auto';\r\n\r\n\tcontent.appendChild(tabContainer);\r\n\ttabContainer.appendChild(headline);\r\n\tcontent.appendChild(picContainer);\r\n\tpicContainer.appendChild(myPic);\r\n\tcontent.appendChild(infoContainer);\r\n\r\n\tconsole.log('Page Layout');\r\n\treturn {\r\n\t\tpageStyle,\r\n\t\tbodyStyle,\r\n\t\tcontent,\r\n\t\theadline,\r\n\t\ttabContainer,\r\n\t\tinfoContainer,\r\n\t\tpicContainer,\r\n\t\theadline,\r\n\t};\r\n})();\r\n\r\n\n\n//# sourceURL=webpack:///./src/pageLayoutModule.mjs?");

/***/ })

/******/ });