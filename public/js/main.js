/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 594:
/***/ (function() {

// simple function to use for callback in the intersection observer
var changeNav = function changeNav(entries, observer) {
  entries.forEach(function (entry) {
    // get id of the intersecting section
    var id = entry.target.getAttribute("id"); // verify the element is intersecting

    if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
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

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! scrollbarWidth.js v0.1.3 | felixexter | MIT | https://github.com/felixexter/scrollbarWidth */
(function (root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function () {
	'use strict';

	function scrollbarWidth() {
		if (typeof document === 'undefined') {
			return 0
		}

		var
			body = document.body,
			box = document.createElement('div'),
			boxStyle = box.style,
			width;

		boxStyle.position = 'absolute';
		boxStyle.top = boxStyle.left = '-9999px';
		boxStyle.width = boxStyle.height = '100px';
		boxStyle.overflow = 'scroll';

		body.appendChild(box);

		width = box.offsetWidth - box.clientWidth;

		body.removeChild(box);

		return width;
	}

	return scrollbarWidth;
}));


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

;// CONCATENATED MODULE: ./src/js/modules/navMobile.js
var scrollbarWidth = __webpack_require__(283);

function navMobile_open() {
  $("#nav-mobile, .js-nav-mobile-open").addClass("active");
  $("body").addClass("page__locked").css({
    "margin-right": scrollbarWidth()
  });
}

function toggle() {
  var isActive = $("#nav-mobile").hasClass("active");
  isActive ? navMobile_close() : navMobile_open();
}

function navMobile_close() {
  $("#nav-mobile, .js-nav-mobile-open").removeClass("active");
  $("body").removeClass("page__locked").css({
    "margin-right": 0
  });
}

$(function () {
  $(document).on("click", ".js-nav-mobile-open", function (e) {
    e.preventDefault();
    toggle();
  });
  $(document).on("click", ".js-nav-mobile-close", function (e) {
    e.preventDefault();
    navMobile_close();
  });
  $(document).on("click", "#nav-mobile a", function (e) {
    navMobile_close();
  });
});
/* harmony default export */ var navMobile = ({
  open: navMobile_open,
  toggle: toggle,
  close: navMobile_close
});
// EXTERNAL MODULE: ./src/js/modules/scrollNav.js
var scrollNav = __webpack_require__(594);
;// CONCATENATED MODULE: ./src/js/main.js


}();
/******/ })()
;