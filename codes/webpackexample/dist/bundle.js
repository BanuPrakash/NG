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

/***/ "./src/Person.ts":
/*!***********************!*\
  !*** ./src/Person.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Person = /** @class */ (function () {\r\n    function Person(name, age) {\r\n        this.name = name;\r\n        this.age = age;\r\n    }\r\n    Person.prototype.getName = function () {\r\n        return this.name;\r\n    };\r\n    Person.prototype.getAge = function () {\r\n        return this.age;\r\n    };\r\n    Person.prototype.setName = function (n) {\r\n        this.name = n;\r\n    };\r\n    return Person;\r\n}());\r\nexports[\"default\"] = Person;\r\n\n\n//# sourceURL=webpack://webpackexample/./src/Person.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Person_1 = __importDefault(__webpack_require__(/*! ./Person */ \"./src/Person.ts\")); // ES 6 module system\r\nvar lib_1 = __importStar(__webpack_require__(/*! ./lib */ \"./src/lib.ts\"));\r\nvar p1 = new Person_1.default(\"Harry\", 31);\r\nconsole.log(p1.getName(), p1.getAge());\r\nvar nos = [5, 2, 55, 42, 31];\r\nvar products = [\r\n    { \"id\": 1, \"name\": \"iPhone\", \"price\": 124447.44, \"category\": \"mobile\" },\r\n    { \"id\": 2, \"name\": \"Onida\", \"price\": 4444.44, \"category\": \"tv\" },\r\n    { \"id\": 3, \"name\": \"OnePlus 6\", \"price\": 98444.44, \"category\": \"mobile\" },\r\n    { \"id\": 4, \"name\": \"HDMI connector\", \"price\": 2444.00, \"category\": \"computer\" },\r\n    { \"id\": 5, \"name\": \"Samsung\", \"price\": 68000.00, \"category\": \"tv\" }\r\n];\r\nvar mobiles = (0, lib_1.default)(products, function (p) { return p.category === 'mobile'; });\r\nvar evens = (0, lib_1.default)(nos, function (e) { return e % 2 === 0; });\r\n(0, lib_1.forEach)(evens, console.log);\r\n(0, lib_1.forEach)(mobiles, console.log);\r\n\n\n//# sourceURL=webpack://webpackexample/./src/index.ts?");

/***/ }),

/***/ "./src/lib.ts":
/*!********************!*\
  !*** ./src/lib.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.forEach = void 0;\r\n// Generics\r\nfunction forEach(elems, action) {\r\n    var i;\r\n    for (i = 0; i < elems.length; i++) {\r\n        action(elems[i]);\r\n    }\r\n}\r\nexports.forEach = forEach;\r\nfunction filter(elems, predicate) {\r\n    var res = [];\r\n    forEach(elems, function (e) {\r\n        if (predicate(e)) {\r\n            res.push(e);\r\n        }\r\n    });\r\n    return res;\r\n}\r\nexports[\"default\"] = filter;\r\n\n\n//# sourceURL=webpack://webpackexample/./src/lib.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;