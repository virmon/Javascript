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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.css":
/*!*****************!*\
  !*** ./app.css ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./app.css */ \"./node_modules/css-loader/dist/cjs.js!./app.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./app.css?");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let dinoData = []; // Create Dino Constructor\n\nfunction Creature(data) {\n  this.species = data.species;\n  this.weight = data.weight;\n  this.height = data.height;\n  this.diet = data.diet;\n  this.where = data.where;\n  this.when = data.when;\n  this.fact = [data.fact];\n} // Create Dino Objects\n\n\nfetch('./dino.json').then(res => res.json()).then(data => {\n  dinoData = data.Dinos.map(dino => new Creature(dino));\n}); // Create Human Object\n\nconst human = new Creature({\n  species: 'Human',\n  name: document.getElementById('name').value,\n  height: parseInt(document.getElementById('inches').value),\n  weight: parseInt(document.getElementById('weight').value),\n  diet: document.getElementById('diet').value,\n  where: '',\n  when: '',\n  fact: ''\n}); // Use IIFE to get human data from form\n\nlet getHumanData = function () {\n  const compareBtn = document.getElementById('btn');\n  compareBtn.addEventListener('click', function () {\n    if (!validInput()) {\n      alert(\"All Fields are Required\");\n    } else {\n      removeForm();\n      human.name = document.getElementById('name').value;\n\n      if (document.getElementById('feet').value === '') {\n        human.height = parseInt(document.getElementById('inches').value);\n      } else {\n        human.height = parseInt(document.getElementById('feet').value);\n      }\n\n      human.weight = parseInt(document.getElementById('weight').value);\n      human.diet = document.getElementById('diet').value;\n      compareFacts();\n      generateGrid();\n    }\n  });\n}(); // Create Dino Compare Method 1\n// NOTE: Weight in JSON file is in lbs, height in inches. \n\n\nCreature.prototype.compareHeight = function () {\n  let diff = 0;\n\n  if (this.height > human.height) {\n    diff = this.height - human.height;\n    this.fact.push(`${this.species} is taller than you in ${diff} inches`);\n  } else if (this.height < human.height) {\n    diff = human.height - this.height;\n    this.fact.push(`You are taller in ${diff} inches`);\n  } else {\n    this.fact.push(`You have the same height!`);\n  }\n}; // Create Dino Compare Method 2\n// NOTE: Weight in JSON file is in lbs, height in inches.\n\n\nCreature.prototype.compareWeight = function () {\n  let diff = 0;\n\n  if (this.weight > human.weight) {\n    diff = this.weight - human.weight;\n    this.fact.push(`${this.species} is heavier than you in ${diff} lbs`);\n  } else if (this.weight < human.weight) {\n    diff = human.weight - this.weight;\n    this.fact.push(`You are heavier in ${diff} lbs`);\n  } else {\n    this.fact.push(`You have the same weight!`);\n  }\n}; // Create Dino Compare Method 3\n// NOTE: Weight in JSON file is in lbs, height in inches.\n\n\nCreature.prototype.compareDiet = function () {\n  if (this.diet.toLowerCase() === human.diet.toLowerCase()) {\n    this.fact.push(`Both of you are ${this.diet}`);\n  } else {\n    this.fact.push(`${this.species} are ${this.diet}`);\n  }\n};\n/**\n * @description Generate Tiles for each Dino in Array\n */\n\n\nfunction generateGrid() {\n  // insert human into dinoData array\n  dinoData.splice(4, 0, human);\n  let i = getRandomInt(0, dinoData[0].fact.length - 1);\n  dinoData.map(data => {\n    addTiles(data, i);\n  });\n}\n/**\n * @description Add tiles to DOM; On button click, prepare and display infographic\n */\n\n\nfunction addTiles(data, i) {\n  const mainGrid = document.getElementById('grid'); // Create new elements\n\n  const newTile = document.createElement('div');\n  const gridItemHeader = document.createElement('h3');\n  const img = document.createElement('img');\n  const para = document.createElement('p');\n  gridItemHeader.textContent = data.species;\n  para.textContent = data.species === 'Pigeon' ? data.fact[0] : data.fact[i];\n  img.setAttribute('src', `./images/${data.species}.png`); // Add class to new tile\n\n  newTile.setAttribute('class', 'grid-item'); // Add to grid\n\n  newTile.appendChild(gridItemHeader);\n  newTile.appendChild(img);\n\n  if (data.species !== 'Human') {\n    newTile.appendChild(para);\n  }\n\n  mainGrid.appendChild(newTile);\n}\n/**\n * @description Remove form from screen\n */\n\n\nfunction removeForm() {\n  document.getElementById('dino-compare').style.display = \"none\";\n}\n/**\n * @description Map dinoData then instantiate compare methods\n */\n\n\nfunction compareFacts() {\n  dinoData.map(data => {\n    data.compareDiet();\n    data.compareHeight();\n    data.compareWeight();\n  });\n}\n/**\n * @retrivedFrom https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range\n * @description Randomize integer\n * @param {number} min - minimum possible number\n * @param {number} max - maximum possible number\n * @returns {number} Random integer from min to max\n */\n\n\nfunction getRandomInt(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nfunction validInput() {\n  let name = document.getElementById('name').value;\n  let feet = parseInt(document.getElementById('feet').value);\n  let inches = parseInt(document.getElementById('inches').value);\n  let weight = parseInt(document.getElementById('weight').value);\n  let diet = document.getElementById('diet').value;\n\n  if (!name || !inches || !feet || !weight || !diet) {\n    return false;\n  }\n\n  return true;\n}\n\ndocument.getElementById('feet').addEventListener('change', function () {\n  document.getElementById('inches').value = \" \";\n  let feet = document.getElementById('feet').value;\n  let inches = document.getElementById('inches').value;\n  document.getElementById('inches').value = feet * 12 + inches;\n});\ndocument.getElementById('inches').addEventListener('change', function () {\n  document.getElementById('feet').value = \" \";\n  let inches = document.getElementById('inches').value;\n  document.getElementById('feet').value = inches / 12;\n});\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./images/tracks.png":
/*!***************************!*\
  !*** ./images/tracks.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9e5def92b715763acc0dd617d2717104.png\");\n\n//# sourceURL=webpack:///./images/tracks.png?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app.css":
/*!*******************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_tracks_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/tracks.png */ \"./images/tracks.png\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_tracks_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* General Styles */\\nbody {\\n    background: rgb(111, 208, 224);\\n    background: linear-gradient(0deg,rgb(111, 208, 224) 0%, rgb(171, 228, 167) 100%);\\n    font-family: 'Open Sans', sans-serif;\\n    text-align: center;\\n    min-height: 100vh;\\n}\\n\\nh1 {\\n    margin: 0;\\n    font-family: 'Frijole', cursive;\\n    font-size: 3em;\\n    font-weight: 400;\\n}\\n\\nh2,\\nh3 {\\n    font-family: 'Oswald', sans-serif;\\n}\\n\\n@media (min-width: 650px) {\\n    h1 {\\n        font-size: 5em;\\n    }\\n}\\n\\n@media (min-width: 920px) {\\n    h1 {\\n        font-size: 8em;\\n    }\\n}\\n\\np {\\n    font-weight: 100;\\n}\\n\\n/* Grid Styles */\\n#grid {\\n    background: #fff url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat;\\n    background-size: cover;\\n    display: flex;\\n    margin: 2em;\\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\\n    flex-wrap: wrap;\\n}\\n\\n.grid-item {\\n    position: relative;\\n    box-sizing: border-box;\\n    width: 100%;\\n}\\n\\n.grid-item:nth-child(1){\\n    background: #009687f5;\\n}\\n\\n.grid-item:nth-child(2){\\n    background: #dc7657f5;\\n}\\n\\n.grid-item:nth-child(3){\\n    background: #4bb3c1fa;\\n}\\n\\n.grid-item:nth-child(4){\\n    background: #fac069f9;\\n}\\n\\n.grid-item:nth-child(5){\\n    background: #67a866f9;\\n}\\n\\n.grid-item:nth-child(6){\\n    background: #b94169fa;\\n}\\n\\n.grid-item:nth-child(7){\\n    background: #7f62b3fa;\\n}\\n\\n.grid-item:nth-child(8){\\n    background: #9fc376f9;\\n}\\n\\n.grid-item:nth-child(9){\\n    background: #677bcbfa;\\n}\\n\\n@media (min-width: 550px) {\\n    #grid div {\\n        width: calc(100% / 3);\\n    }\\n}\\n\\n.grid-item h3 {\\n    font-size: 2em;\\n    color: #eee;\\n}\\n\\n.grid-item img {\\n    max-width: 100%;\\n    padding-bottom: 1em;\\n}\\n\\n.grid-item p {\\n    background: rgba(000,000,000, .3);\\n    position: absolute;\\n    bottom: 0;\\n    width: 100%;\\n    padding: 0.8em 0.8em 1.8em;\\n    margin:0;\\n    box-sizing: border-box;\\n    font-size: 1.2em;\\n    font-weight: 600;\\n    color: #fff;\\n}\\n\\n/* Form Styles */\\n.form-container {\\n    background: #eee;\\n    padding: 1.3em;\\n    text-align: left;\\n    max-width: 400px;\\n    margin: 0 auto;\\n}\\n\\nform p {\\n    margin-bottom: 0.3em;\\n    font-size: 1.3em;\\n    font-weight: 600;\\n    font-family: 'Oswald', sans-serif;\\n}\\n\\ninput {\\n    padding: 0.7em;\\n    background: #fff;\\n    border: 0;\\n}\\n\\n.form-field__short {\\n    width: 25%;\\n    margin-right: 3%;\\n    box-sizing: border-box;\\n}\\n\\n.form-field__full {\\n    width: 100%;\\n    box-sizing: border-box;\\n}\\n\\nselect {\\n    display: block;\\n}\\n\\n#btn {\\n    display: inline-block;\\n    background: #ccc;\\n    padding: 0.8em;\\n    margin: 1.2em auto;\\n    transition: ease 0.3s all;\\n}\\n\\n#btn:hover {\\n    background: #777;\\n    color: #fff;\\n    cursor: pointer;\\n}\\n\\n/* Footer */\\n.fine-print {\\n    display: block;\\n    font-size: 0.7em;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./app.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./app.js ./app.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./app.js */\"./app.js\");\nmodule.exports = __webpack_require__(/*! ./app.css */\"./app.css\");\n\n\n//# sourceURL=webpack:///multi_./app.js_./app.css?");

/***/ })

/******/ });