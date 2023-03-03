/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/navMobile.js":
/*!*************************************!*\
  !*** ./src/js/modules/navMobile.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  $(document).on("click", "#nav-mobile a", function (e) {
    close();
  });
});
/* harmony default export */ __webpack_exports__["default"] = ({
  open: open,
  toggle: toggle,
  close: close
});

/***/ }),

/***/ "./src/js/modules/scrollNav.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrollNav.js ***!
  \*************************************/
/***/ (function() {

// simple function to use for callback in the intersection observer
var changeNav = function changeNav(entries, observer) {
  entries.forEach(function (entry) {
    // get id of the intersecting section
    var id = entry.target.getAttribute("id");
    var ratio = id === "goods" ? 0.01 : 0.55; // verify the element is intersecting

    if (entry.isIntersecting && entry.intersectionRatio >= ratio) {
      // remove old active class
      Array.from(document.querySelectorAll(".js-scroll-nav .active")).forEach(function (el) {
        el.classList.remove("active");
      }); // find matching link & add appropriate class

      Array.from(document.querySelectorAll(".js-scroll-nav [href=\"#".concat(id, "\"]"))).forEach(function (el) {
        el.classList.add("active");
      });
    }
  });
}; // init the observer


var options = {
  threshold: 0.55
};
var observer = new IntersectionObserver(changeNav, options); // target the elements to be observed

var sections = document.querySelectorAll(".section");
sections.forEach(function (section) {
  observer.observe(section);
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_navMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navMobile */ "./src/js/modules/navMobile.js");
/* harmony import */ var _modules_scrollNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollNav */ "./src/js/modules/scrollNav.js");
/* harmony import */ var _modules_scrollNav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_scrollNav__WEBPACK_IMPORTED_MODULE_1__);


}();
/******/ })()
;