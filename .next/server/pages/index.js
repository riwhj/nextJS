module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer/index.js":
/*!************************************!*\
  !*** ./components/footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\react\\nextJS\\components\\footer\\index.js";


function index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "footer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "clearfix"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "footer-bottom",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "index.html",
              children: "Furniture"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 28
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            class: "social-fo",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                class: "face",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  class: "fa fa-facebook",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                class: "twi",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  class: "fa fa-twitter",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                class: "pin",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  class: "fa fa-pinterest-p",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                class: "dri",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  class: "fa fa-dribbble",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "address",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "clearfix"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "copy-right",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "\xA9 2016 Big store. All Rights Reserved | Design by"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./components/head/index.js":
/*!**********************************!*\
  !*** ./components/head/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\react\\nextJS\\components\\head\\index.js";


function index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      "http-equiv": "Content-Type",
      content: "text/html; charset=utf-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:title",
      content: "Vide"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "keywords",
      content: "Big store Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template,  Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      rel: "stylesheet",
      integrity: "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
      crossorigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "/css/bootstrap.css",
      rel: "stylesheet",
      type: "text/css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "/css/style.css",
      rel: "stylesheet",
      type: "text/css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "/js/jquery-1.11.1.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      type: "text/javascript",
      src: "/js/move-top.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      type: "text/javascript",
      src: "/js/easing.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "/css/font-awesome.css",
      rel: "stylesheet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "//fonts.googleapis.com/css?family=Montserrat:400,700",
      rel: "stylesheet",
      type: "text/css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "//fonts.googleapis.com/css?family=Noto+Sans:400,700",
      rel: "stylesheet",
      type: "text/css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "/js/jstarbox.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      href: "/css/jstarbox.css",
      type: "text/css",
      media: "screen",
      charset: "utf-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "/js/bootstrap.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      type: "text/javascript",
      src: "/js/jquery.mycart.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "/js/jquery.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "/js/bootstrap.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "/js/menumaker.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "/js/wow.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "/js/custom.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "/js/jquery.zoomtoo.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "/js/hizoom.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "js/jquery.vide.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./components/product/index.js":
/*!*************************************!*\
  !*** ./components/product/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\react\\nextJS\\components\\product\\index.js";


function index(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "content-top",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "container ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "row",
          children: props.data.map(data => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "col-md-6 col-xs-6 text-center animate-box",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "product",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  className: "default-img",
                  src: data.image,
                  width: "300",
                  height: "480",
                  alt: "#"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "inner",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "single.html",
                    class: "icon",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                      class: "icon-shopping-cart"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 18,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 17,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "single.html",
                    class: "icon",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                      class: "icon-eye"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 21,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "desc",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "single.html",
                    children: data.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  class: "price",
                  children: data.price
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_head_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/head/index */ "./components/head/index.js");
/* harmony import */ var _components_footer_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer/index */ "./components/footer/index.js");
/* harmony import */ var _components_product_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/product/index */ "./components/product/index.js");


var _jsxFileName = "D:\\react\\nextJS\\pages\\index.js";



const DUMMY_MEETUPS = [{
  id: 'm1',
  title: 'Vukosavljevic and Gornjak is Snobar ',
  image: 'https://cdn.jeab.com/wp-content/uploads/2013/05/snobar_chair-4-1024x682.jpg',
  price: '$130.00',
  detail: 'A soft, comfortable chair with a cute design. The chair by Vukosavljevic and Gornjaks Snobar designed for Yonder Magnetik was inspired by the Snowberry tree in Sweden. It looks like a chair, not very high in white color. The cushion is soft and comfortable like a cloud. The base is made of light wood.'
}, {
  id: 'm2',
  title: 'Modern style armchair chair',
  image: 'https://th-test-11.slatic.net/shop/a6ff8fb808ef91aea73a2f609736c42c.jpeg_2200x2200q80.jpg_.webp',
  price: '$243.00',
  detail: 'Modern style armchair chair wooden legs beech minimal living room furniture Living room chair'
}, {
  id: 'm3',
  title: 'Modern style chair ',
  image: 'https://i.pinimg.com/564x/04/df/d7/04dfd7542a23eea0adb6f4dd8417c84a.jpg',
  price: '$189.00',
  detail: 'Modern style chair Soft leather seat, comfortable seat, waterproof, black wooden legs and premium gold plated legs. Strong resistance guaranteed | Anuta shop'
}, {
  id: 'm4',
  title: 'Mobili per ufficio New Loop',
  image: 'https://i.pinimg.com/564x/07/57/a1/0757a1b032836314d77a34dc18fd72d9.jpg',
  price: '$2870.00',
  detail: 'Mobili per ufficio New Loop - Arredamento per Ufficio'
}, {
  id: 'm5',
  title: 'Un paravent stylé dans ma déco ',
  image: 'https://i.pinimg.com/564x/54/b7/17/54b7178572309b139a40c45e965b7095.jpg',
  price: '$410.00',
  detail: 'Un paravent stylé dans ma déco - Quand on habite dans un petit appartement, on est sans cesse à la recherche de nouvelles idées pour séparer les espaces et créer des petits coins cosy.'
}, {
  id: 'm6',
  title: 'Wishbone Dining Chair',
  image: 'https://i.pinimg.com/564x/4c/72/57/4c7257dee07db194fda544eefac9799d.jpg',
  price: '$193.00',
  detail: 'Set a new Scandi standard in your kitchen, bar, restaurant or café with our exquisite Hans Wegner Wishbone Dining Chairs. This striking Black Ash variant with a stunningly crafted Natural Paper Coil Seat lets your guests know that you mean business when it comes to high profile styling. The Wishbone epitomises the very best of Danish furniture design. A class above, these beauties have Y-shaped curved high backs that make for a supremely comfortable seating position, offering both top tier aesth'
}, {
  id: 'm7',
  title: 'Dining Chairs ',
  image: 'https://i.pinimg.com/564x/55/ea/f1/55eaf1e321b8fd93d376419442baa07c.jpg',
  price: '$459.00',
  detail: 'Dining Chairs Entertain in comfort and style with luxury dining chairs from onekingslane.com. Shop everything from traditional oak side chairs to casual wicker dining chairs.'
}, {
  id: 'm8',
  title: 'Dining room table',
  image: 'https://i.pinimg.com/564x/20/8d/f8/208df8d4b28d7133e45f8afa8e82bc00.jpg',
  price: '$2870.00',
  detail: 'Dining room table - Luna sheesham tables 180x90 - Tikamoon Tikamoon : Luna solid sheesham Dining Table 180x90'
}, {
  id: 'm9',
  title: 'Furniture',
  image: 'https://i.pinimg.com/564x/91/1e/49/911e490d1927b49762f111008d79bc88.jpg',
  price: '$้4570.00',
  detail: ' Bedding, Furniture, Electronics, Jewelry, Clothing & more This modern industrial coffee table combines design with function. Create a warm welcome with the clean lines of this 42" console table. Whether tucked behind the sofa or a display for a menagerie of trinkets, this console table is the perfect backdrop to create a magazine-ready display. : ? A variety of hand-crafted finishes including blackened bronze, golden brass, satin nickel and white are applied to the steel frame. The table top and shelves are made of tempered clear glass. ? Premium materials have been used in making this table: tempered glass throughout the table top and shelves while a steel frame ensures optimal storage.'
}, {
  id: 'm10',
  title: 'Limited Edition Sideboard Designs ',
  image: 'https://i.pinimg.com/564x/05/1b/24/051b2413ccce88c56c9f750aebb74000.jpg',
  price: '$5710.00',
  detail: 'Limited Edition Sideboard Designs by Boca do Lobo The best of luxury sideboard design in a selection curated by Boca do Lobo to inspire interior designers looking to finish their projects. Discover the best buffets and sideboards for your Dining Room in mid-century, contemporary, industrial or vintage style by some of the best furniture brands out there.'
}, {
  id: 'm11',
  title: 'Lindos recibidores modernos',
  image: 'https://demofc076.trustthemes.net/wp-content/uploads/2017/08/Contemporary_Levy_A_A1.jpg',
  price: '$723.00',
  detail: 'Lindos recibidores modernos - Paperblog El recibidor es el ambiente y la primera imagen que reciben nuestros invitados de nuestro hogar, por eso hoy te presentamos unas propuestas de recibidores modernos.'
}, {
  id: 'm12',
  title: 'Villette Console Table - Silver',
  image: 'https://i.pinimg.com/564x/a1/cd/46/a1cd46e8bd387d46a597dbfffd755d17.jpg',
  price: '$485.00',
  detail: 'With a slender metal frame and exquisite silver finish - our rectangular console table is perfect for your hallway or living space. The simple design allows for ultimate styling versatility, suiting a variety of looks; the silver finish is exquisite by'
}];
function Home(props) {
  const {
    data
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_head_index__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_product_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer_index__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      data: DUMMY_MEETUPS
    }
  };
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZHVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImluZGV4IiwicHJvcHMiLCJkYXRhIiwibWFwIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwiRFVNTVlfTUVFVFVQUyIsImlkIiwiZGV0YWlsIiwiSG9tZSIsImdldFN0YXRpY1Byb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMs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LElBQVQsQ0FBY1QsS0FBZCxFQUFxQjtBQUNsQyxRQUFNO0FBQUVDO0FBQUYsTUFBV0QsS0FBakI7QUFDQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLGlFQUFEO0FBQVMsVUFBSSxFQUFFQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBLGtCQURGO0FBT0Q7QUFFTSxlQUFlUyxjQUFmLEdBQWdDO0FBQ3JDO0FBQ0EsU0FBTztBQUNMVixTQUFLLEVBQUU7QUFDTEMsVUFBSSxFQUFFSztBQUREO0FBREYsR0FBUDtBQUtELEM7Ozs7Ozs7Ozs7O0FDaElELHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gaW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItYm90dG9tXCI+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJpbmRleC5odG1sXCI+XG4gICAgICAgICAgICAgIEZ1cm5pdHVyZVxuICAgICAgICAgICAgICA8L2E+PGJyPjwvYnI+PGJyPjwvYnI+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic29jaWFsLWZvXCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZmFjZVwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1mYWNlYm9va1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidHdpXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXR3aXR0ZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInBpblwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1waW50ZXJlc3QtcFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJpXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWRyaWJiYmxlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkcmVzc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3B5LXJpZ2h0XCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgJmNvcHk7IDIwMTYgQmlnIHN0b3JlLiBBbGwgUmlnaHRzIFJlc2VydmVkIHwgRGVzaWduIGJ5XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuZnVuY3Rpb24gaW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bWV0YSBodHRwLWVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlZpZGVcIiAvPlxuICAgICAgPG1ldGFcbiAgICAgICAgbmFtZT1cImtleXdvcmRzXCJcbiAgICAgICAgY29udGVudD1cIkJpZyBzdG9yZSBSZXNwb25zaXZlIHdlYiB0ZW1wbGF0ZSwgQm9vdHN0cmFwIFdlYiBUZW1wbGF0ZXMsIEZsYXQgV2ViIFRlbXBsYXRlcywgQW5kcm9pZCBDb21wYXRpYmxlIHdlYiB0ZW1wbGF0ZSwgXG4gICAgICAgICAgICBTbWFydHBob25lIENvbXBhdGlibGUgd2ViIHRlbXBsYXRlLCBmcmVlIHdlYmRlc2lnbnMgZm9yIE5va2lhLCBTYW1zdW5nLCBMRywgU29ueUVyaWNzc29uLCBNb3Rvcm9sYSB3ZWIgZGVzaWduXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC13dmZYcHFwWlpWUUdLNlRBaDVQVmxHT2ZRTkhTb0QyeGJFK1FrUHhDQUZsTkVldm9FSDNTbDBzaWJWY09RVm5OXCJcbiAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9jc3MvYm9vdHN0cmFwLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiL2Nzcy9zdHlsZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvanF1ZXJ5LTEuMTEuMS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiL2pzL21vdmUtdG9wLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIi9qcy9lYXNpbmcuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9jc3MvZm9udC1hd2Vzb21lLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCIvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNzAwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCIvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Tm90bytTYW5zOjQwMCw3MDBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL2pzdGFyYm94LmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cIi9jc3MvanN0YXJib3guY3NzXCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIG1lZGlhPVwic2NyZWVuXCJcbiAgICAgICAgICBjaGFyc2V0PVwidXRmLThcIlxuICAgICAgICAvPlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9ib290c3RyYXAuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiL2pzL2pxdWVyeS5teWNhcnQuanNcIj48L3NjcmlwdD5cblxuICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvbWVudW1ha2VyLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL3dvdy5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9jdXN0b20uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvanF1ZXJ5Lnpvb210b28uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvaGl6b29tLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwianMvanF1ZXJ5LnZpZGUubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPC9IZWFkPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIGluZGV4KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXRvcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIHtwcm9wcy5kYXRhLm1hcCgoZGF0YSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgY29sLXhzLTYgdGV4dC1jZW50ZXIgYW5pbWF0ZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFwiPlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZGVmYXVsdC1pbWdcIiBzcmM9e2RhdGEuaW1hZ2V9IHdpZHRoPVwiMzAwXCIgIGhlaWdodD1cIjQ4MFwiIGFsdD1cIiNcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJzaW5nbGUuaHRtbFwiIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLXNob3BwaW5nLWNhcnRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJzaW5nbGUuaHRtbFwiIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLWV5ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInNpbmdsZS5odG1sXCI+e2RhdGEudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+e2RhdGEucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiaW1wb3J0IFNldEhlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZC9pbmRleFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXIvaW5kZXhcIjtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2R1Y3QvaW5kZXhcIjtcblxuY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcbiAge1xuICAgIGlkOiAnbTEnLFxuICAgIHRpdGxlOiAnVnVrb3NhdmxqZXZpYyBhbmQgR29ybmphayBpcyBTbm9iYXIgJyxcbiAgICBpbWFnZTpcbiAgICAgICdodHRwczovL2Nkbi5qZWFiLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxMy8wNS9zbm9iYXJfY2hhaXItNC0xMDI0eDY4Mi5qcGcnLFxuICAgIHByaWNlOiAnJDEzMC4wMCcsXG4gICAgZGV0YWlsOiAnQSBzb2Z0LCBjb21mb3J0YWJsZSBjaGFpciB3aXRoIGEgY3V0ZSBkZXNpZ24uIFRoZSBjaGFpciBieSBWdWtvc2F2bGpldmljIGFuZCBHb3JuamFrcyBTbm9iYXIgZGVzaWduZWQgZm9yIFlvbmRlciBNYWduZXRpayB3YXMgaW5zcGlyZWQgYnkgdGhlIFNub3diZXJyeSB0cmVlIGluIFN3ZWRlbi4gSXQgbG9va3MgbGlrZSBhIGNoYWlyLCBub3QgdmVyeSBoaWdoIGluIHdoaXRlIGNvbG9yLiBUaGUgY3VzaGlvbiBpcyBzb2Z0IGFuZCBjb21mb3J0YWJsZSBsaWtlIGEgY2xvdWQuIFRoZSBiYXNlIGlzIG1hZGUgb2YgbGlnaHQgd29vZC4nLFxuICAgXG4gIH0sXG4gIHtcbiAgICBpZDogJ20yJyxcbiAgICB0aXRsZTogJ01vZGVybiBzdHlsZSBhcm1jaGFpciBjaGFpcicsXG4gICAgaW1hZ2U6XG4gICAgICAnaHR0cHM6Ly90aC10ZXN0LTExLnNsYXRpYy5uZXQvc2hvcC9hNmZmOGZiODA4ZWY5MWFlYTczYTJmNjA5NzM2YzQyYy5qcGVnXzIyMDB4MjIwMHE4MC5qcGdfLndlYnAnLFxuICAgICAgcHJpY2U6ICckMjQzLjAwJyxcbiAgICAgIGRldGFpbDogJ01vZGVybiBzdHlsZSBhcm1jaGFpciBjaGFpciB3b29kZW4gbGVncyBiZWVjaCBtaW5pbWFsIGxpdmluZyByb29tIGZ1cm5pdHVyZSBMaXZpbmcgcm9vbSBjaGFpcicsXG4gIH0sXG4gIHtcbiAgICBpZDogJ20zJyxcbiAgICB0aXRsZTogJ01vZGVybiBzdHlsZSBjaGFpciAnLFxuICAgIGltYWdlOlxuICAgICAgJ2h0dHBzOi8vaS5waW5pbWcuY29tLzU2NHgvMDQvZGYvZDcvMDRkZmQ3NTQyYTIzZWVhMGFkYjZmNGRkODQxN2M4NGEuanBnJyxcbiAgICBwcmljZTogJyQxODkuMDAnLFxuICAgIGRldGFpbDogJ01vZGVybiBzdHlsZSBjaGFpciBTb2Z0IGxlYXRoZXIgc2VhdCwgY29tZm9ydGFibGUgc2VhdCwgd2F0ZXJwcm9vZiwgYmxhY2sgd29vZGVuIGxlZ3MgYW5kIHByZW1pdW0gZ29sZCBwbGF0ZWQgbGVncy4gU3Ryb25nIHJlc2lzdGFuY2UgZ3VhcmFudGVlZCB8IEFudXRhIHNob3AnLFxuICAgXG4gIH0sXG4gIHtcbiAgICBpZDogJ200JyxcbiAgICB0aXRsZTogJ01vYmlsaSBwZXIgdWZmaWNpbyBOZXcgTG9vcCcsXG4gICAgaW1hZ2U6XG4gICAgICAnaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC8wNy81Ny9hMS8wNzU3YTFiMDMyODM2MzE0ZDc3YTM0ZGMxOGZkNzJkOS5qcGcnLFxuICAgICAgcHJpY2U6ICckMjg3MC4wMCcsXG4gICAgICBkZXRhaWw6ICdNb2JpbGkgcGVyIHVmZmljaW8gTmV3IExvb3AgLSBBcnJlZGFtZW50byBwZXIgVWZmaWNpbycsXG4gIH0sXG4gIHtcbiAgICBpZDogJ201JyxcbiAgICB0aXRsZTogJ1VuIHBhcmF2ZW50IHN0eWzDqSBkYW5zIG1hIGTDqWNvICcsXG4gICAgaW1hZ2U6XG4gICAgICAnaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC81NC9iNy8xNy81NGI3MTc4NTcyMzA5YjEzOWE0MGM0NWU5NjViNzA5NS5qcGcnLFxuICAgIHByaWNlOiAnJDQxMC4wMCcsXG4gICAgZGV0YWlsOiAnVW4gcGFyYXZlbnQgc3R5bMOpIGRhbnMgbWEgZMOpY28gLSBRdWFuZCBvbiBoYWJpdGUgZGFucyB1biBwZXRpdCBhcHBhcnRlbWVudCwgb24gZXN0IHNhbnMgY2Vzc2Ugw6AgbGEgcmVjaGVyY2hlIGRlIG5vdXZlbGxlcyBpZMOpZXMgcG91ciBzw6lwYXJlciBsZXMgZXNwYWNlcyBldCBjcsOpZXIgZGVzIHBldGl0cyBjb2lucyBjb3N5LicsXG4gICBcbiAgfSxcbiAge1xuICAgIGlkOiAnbTYnLFxuICAgIHRpdGxlOiAnV2lzaGJvbmUgRGluaW5nIENoYWlyJyxcbiAgICBpbWFnZTpcbiAgICAgICdodHRwczovL2kucGluaW1nLmNvbS81NjR4LzRjLzcyLzU3LzRjNzI1N2RlZTA3ZGIxOTRmZGE1NDRlZWZhYzk3OTlkLmpwZycsXG4gICAgICBwcmljZTogJyQxOTMuMDAnLFxuICAgICAgZGV0YWlsOiAnU2V0IGEgbmV3IFNjYW5kaSBzdGFuZGFyZCBpbiB5b3VyIGtpdGNoZW4sIGJhciwgcmVzdGF1cmFudCBvciBjYWbDqSB3aXRoIG91ciBleHF1aXNpdGUgSGFucyBXZWduZXIgV2lzaGJvbmUgRGluaW5nIENoYWlycy4gVGhpcyBzdHJpa2luZyBCbGFjayBBc2ggdmFyaWFudCB3aXRoIGEgc3R1bm5pbmdseSBjcmFmdGVkIE5hdHVyYWwgUGFwZXIgQ29pbCBTZWF0IGxldHMgeW91ciBndWVzdHMga25vdyB0aGF0IHlvdSBtZWFuIGJ1c2luZXNzIHdoZW4gaXQgY29tZXMgdG8gaGlnaCBwcm9maWxlIHN0eWxpbmcuIFRoZSBXaXNoYm9uZSBlcGl0b21pc2VzIHRoZSB2ZXJ5IGJlc3Qgb2YgRGFuaXNoIGZ1cm5pdHVyZSBkZXNpZ24uIEEgY2xhc3MgYWJvdmUsIHRoZXNlIGJlYXV0aWVzIGhhdmUgWS1zaGFwZWQgY3VydmVkIGhpZ2ggYmFja3MgdGhhdCBtYWtlIGZvciBhIHN1cHJlbWVseSBjb21mb3J0YWJsZSBzZWF0aW5nIHBvc2l0aW9uLCBvZmZlcmluZyBib3RoIHRvcCB0aWVyIGFlc3RoJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnbTcnLFxuICAgIHRpdGxlOiAnRGluaW5nIENoYWlycyAnLFxuICAgIGltYWdlOlxuICAgICAgJ2h0dHBzOi8vaS5waW5pbWcuY29tLzU2NHgvNTUvZWEvZjEvNTVlYWYxZTMyMWI4ZmQ5M2QzNzY0MTk0NDJiYWEwN2MuanBnJyxcbiAgICBwcmljZTogJyQ0NTkuMDAnLFxuICAgIGRldGFpbDogJ0RpbmluZyBDaGFpcnMgRW50ZXJ0YWluIGluIGNvbWZvcnQgYW5kIHN0eWxlIHdpdGggbHV4dXJ5IGRpbmluZyBjaGFpcnMgZnJvbSBvbmVraW5nc2xhbmUuY29tLiBTaG9wIGV2ZXJ5dGhpbmcgZnJvbSB0cmFkaXRpb25hbCBvYWsgc2lkZSBjaGFpcnMgdG8gY2FzdWFsIHdpY2tlciBkaW5pbmcgY2hhaXJzLicsXG4gICBcbiAgfSxcbiAge1xuICAgIGlkOiAnbTgnLFxuICAgIHRpdGxlOiAnRGluaW5nIHJvb20gdGFibGUnLFxuICAgIGltYWdlOlxuICAgICAgJ2h0dHBzOi8vaS5waW5pbWcuY29tLzU2NHgvMjAvOGQvZjgvMjA4ZGY4ZDRiMjhkNzEzM2U0NWY4YWZhOGU4MmJjMDAuanBnJyxcbiAgICAgIHByaWNlOiAnJDI4NzAuMDAnLFxuICAgICAgZGV0YWlsOiAnRGluaW5nIHJvb20gdGFibGUgLSBMdW5hIHNoZWVzaGFtIHRhYmxlcyAxODB4OTAgLSBUaWthbW9vbiBUaWthbW9vbiA6IEx1bmEgc29saWQgc2hlZXNoYW0gRGluaW5nIFRhYmxlIDE4MHg5MCcsXG4gIH0sXG4gIHtcbiAgICBpZDogJ205JyxcbiAgICB0aXRsZTogJ0Z1cm5pdHVyZScsXG4gICAgaW1hZ2U6XG4gICAgICAnaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC85MS8xZS80OS85MTFlNDkwZDE5MjdiNDk3NjJmMTExMDA4ZDc5YmM4OC5qcGcnLFxuICAgICAgcHJpY2U6ICck4LmJNDU3MC4wMCcsXG4gICAgICBkZXRhaWw6ICcgQmVkZGluZywgRnVybml0dXJlLCBFbGVjdHJvbmljcywgSmV3ZWxyeSwgQ2xvdGhpbmcgJiBtb3JlIFRoaXMgbW9kZXJuIGluZHVzdHJpYWwgY29mZmVlIHRhYmxlIGNvbWJpbmVzIGRlc2lnbiB3aXRoIGZ1bmN0aW9uLiBDcmVhdGUgYSB3YXJtIHdlbGNvbWUgd2l0aCB0aGUgY2xlYW4gbGluZXMgb2YgdGhpcyA0MlwiIGNvbnNvbGUgdGFibGUuIFdoZXRoZXIgdHVja2VkIGJlaGluZCB0aGUgc29mYSBvciBhIGRpc3BsYXkgZm9yIGEgbWVuYWdlcmllIG9mIHRyaW5rZXRzLCB0aGlzIGNvbnNvbGUgdGFibGUgaXMgdGhlIHBlcmZlY3QgYmFja2Ryb3AgdG8gY3JlYXRlIGEgbWFnYXppbmUtcmVhZHkgZGlzcGxheS4gOiA/IEEgdmFyaWV0eSBvZiBoYW5kLWNyYWZ0ZWQgZmluaXNoZXMgaW5jbHVkaW5nIGJsYWNrZW5lZCBicm9uemUsIGdvbGRlbiBicmFzcywgc2F0aW4gbmlja2VsIGFuZCB3aGl0ZSBhcmUgYXBwbGllZCB0byB0aGUgc3RlZWwgZnJhbWUuIFRoZSB0YWJsZSB0b3AgYW5kIHNoZWx2ZXMgYXJlIG1hZGUgb2YgdGVtcGVyZWQgY2xlYXIgZ2xhc3MuID8gUHJlbWl1bSBtYXRlcmlhbHMgaGF2ZSBiZWVuIHVzZWQgaW4gbWFraW5nIHRoaXMgdGFibGU6IHRlbXBlcmVkIGdsYXNzIHRocm91Z2hvdXQgdGhlIHRhYmxlIHRvcCBhbmQgc2hlbHZlcyB3aGlsZSBhIHN0ZWVsIGZyYW1lIGVuc3VyZXMgb3B0aW1hbCBzdG9yYWdlLicsXG4gIH0sXG4gIHtcbiAgICBpZDogJ20xMCcsXG4gICAgdGl0bGU6ICdMaW1pdGVkIEVkaXRpb24gU2lkZWJvYXJkIERlc2lnbnMgJyxcbiAgICBpbWFnZTpcbiAgICAgICdodHRwczovL2kucGluaW1nLmNvbS81NjR4LzA1LzFiLzI0LzA1MWIyNDEzY2NjZTg4YzU2YzlmNzUwYWViYjc0MDAwLmpwZycsXG4gICAgcHJpY2U6ICckNTcxMC4wMCcsXG4gICAgZGV0YWlsOiAnTGltaXRlZCBFZGl0aW9uIFNpZGVib2FyZCBEZXNpZ25zIGJ5IEJvY2EgZG8gTG9ibyBUaGUgYmVzdCBvZiBsdXh1cnkgc2lkZWJvYXJkIGRlc2lnbiBpbiBhIHNlbGVjdGlvbiBjdXJhdGVkIGJ5IEJvY2EgZG8gTG9ibyB0byBpbnNwaXJlIGludGVyaW9yIGRlc2lnbmVycyBsb29raW5nIHRvIGZpbmlzaCB0aGVpciBwcm9qZWN0cy4gRGlzY292ZXIgdGhlIGJlc3QgYnVmZmV0cyBhbmQgc2lkZWJvYXJkcyBmb3IgeW91ciBEaW5pbmcgUm9vbSBpbiBtaWQtY2VudHVyeSwgY29udGVtcG9yYXJ5LCBpbmR1c3RyaWFsIG9yIHZpbnRhZ2Ugc3R5bGUgYnkgc29tZSBvZiB0aGUgYmVzdCBmdXJuaXR1cmUgYnJhbmRzIG91dCB0aGVyZS4nLFxuICAgXG4gIH0sXG4gIHtcbiAgICBpZDogJ20xMScsXG4gICAgdGl0bGU6ICdMaW5kb3MgcmVjaWJpZG9yZXMgbW9kZXJub3MnLFxuICAgIGltYWdlOlxuICAgICAgJ2h0dHBzOi8vZGVtb2ZjMDc2LnRydXN0dGhlbWVzLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wOC9Db250ZW1wb3JhcnlfTGV2eV9BX0ExLmpwZycsXG4gICAgICBwcmljZTogJyQ3MjMuMDAnLFxuICAgICAgZGV0YWlsOiAnTGluZG9zIHJlY2liaWRvcmVzIG1vZGVybm9zIC0gUGFwZXJibG9nIEVsIHJlY2liaWRvciBlcyBlbCBhbWJpZW50ZSB5IGxhIHByaW1lcmEgaW1hZ2VuIHF1ZSByZWNpYmVuIG51ZXN0cm9zIGludml0YWRvcyBkZSBudWVzdHJvIGhvZ2FyLCBwb3IgZXNvIGhveSB0ZSBwcmVzZW50YW1vcyB1bmFzIHByb3B1ZXN0YXMgZGUgcmVjaWJpZG9yZXMgbW9kZXJub3MuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnbTEyJyxcbiAgICB0aXRsZTogJ1ZpbGxldHRlIENvbnNvbGUgVGFibGUgLSBTaWx2ZXInLFxuICAgIGltYWdlOlxuICAgICAgJ2h0dHBzOi8vaS5waW5pbWcuY29tLzU2NHgvYTEvY2QvNDYvYTFjZDQ2ZThiZDM4N2Q0NmE1OTdkYmZmZmQ3NTVkMTcuanBnJyxcbiAgICBwcmljZTogJyQ0ODUuMDAnLFxuICAgIGRldGFpbDogJ1dpdGggYSBzbGVuZGVyIG1ldGFsIGZyYW1lIGFuZCBleHF1aXNpdGUgc2lsdmVyIGZpbmlzaCAtIG91ciByZWN0YW5ndWxhciBjb25zb2xlIHRhYmxlIGlzIHBlcmZlY3QgZm9yIHlvdXIgaGFsbHdheSBvciBsaXZpbmcgc3BhY2UuIFRoZSBzaW1wbGUgZGVzaWduIGFsbG93cyBmb3IgdWx0aW1hdGUgc3R5bGluZyB2ZXJzYXRpbGl0eSwgc3VpdGluZyBhIHZhcmlldHkgb2YgbG9va3M7IHRoZSBzaWx2ZXIgZmluaXNoIGlzIGV4cXVpc2l0ZSBieScsXG4gICBcbiAgfSxcbiBcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNldEhlYWQgLz5cbiAgICAgIDxQcm9kdWN0IGRhdGE9e2RhdGF9IC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhOiBEVU1NWV9NRUVUVVBTLFxuICAgIH0sXG4gIH07XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9