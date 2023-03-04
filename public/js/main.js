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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

;// CONCATENATED MODULE: ./src/js/modules/navMobile.js
function navMobile_open() {
  $("#nav-mobile, .js-nav-mobile-open").addClass("active");
  $("body").addClass("page__locked");
}

function toggle() {
  var isActive = $("#nav-mobile").hasClass("active");
  isActive ? navMobile_close() : navMobile_open();
}

function navMobile_close() {
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