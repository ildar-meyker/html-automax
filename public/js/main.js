/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/navMobile.js":
/*!*************************************!*\
  !*** ./src/js/modules/navMobile.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function open() {
  $("#nav-mobile, .js-nav-mobile-open").addClass("active");
  $("body").addClass("page__locked");
}

function toggle() {
  var isActive = $("#nav-mobile").hasClass("active");
  isActive ? close() : open();
}

function close() {
  $("#nav-mobile, .js-nav-mobile-open").removeClass("active");
  $("body").removeClass("page__locked");
  console.log(1);
}

$(function () {
  $(document).on("click", ".js-nav-mobile-open", function (e) {
    e.preventDefault();
    toggle();
  });
  $(document).on("click", ".js-nav-mobile-close", function (e) {
    e.preventDefault();
    close();
  });
});
/* harmony default export */ __webpack_exports__["default"] = ({
  open: open,
  toggle: toggle,
  close: close
});

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_navMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navMobile */ "./src/js/modules/navMobile.js");

}();
/******/ })()
;