/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\ninput {border: none;}\nli {list-style: none;}\n\nimg {\n    height: 15px;\n    width: 15px;\n}\n\nbutton {\n    border: none;\n    background: none;\n}\n\n.main-container {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 8fr;\n}\n\n\n.header {\n    background-color: #6ec0d5;\n    padding: calc(15px + 2vh) 15px;\n    font-weight: bolder;\n    font-size: 2rem;\n    color: white;\n\n    grid-column: 1 / 3;\n}\n\n.sidebar {\n    grid-row: 2 / 4;\n    padding: 15px;\n    background-color: #eff8fb;\n    min-width: 200px;\n    font-weight: bolder;\n    font-size: 1.5rem;\n}\n\n.project {\n    margin-left: 15px;\n    margin-top: 5px;\n    padding: 5px;\n}\n\n.project:hover {\n    cursor: pointer;\n    background-color: #e3eaef;\n}\n\n.home, .projects {\n    margin: 15px;\n    padding: 10px\n}\n\n.home:hover{\n    cursor: pointer;\n    background-color: #e3eaef;\n}\n\n.container {\n    grid-row: 2 / 4;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 15px;\n}\n\n.sort {\n    border: 1px solid #6dc1d6;\n    color: #6dc1d6;\n    padding: 5px;\n    margin-bottom: 15px;\n    cursor: pointer;\n}\n\n.sort:hover {\n    background-color: #6dc1d6;\n    color: white;\n}\n\n.form-popup {\n    display: none;\n    margin: 10px 0px;\n    border: 1px solid #6dc1d6;\n    border-radius: 8px;\n    padding: 15px;\n    opacity: 100%;\n}\n\n.form-container {\n    display: flex;\n    gap: 15px;\n    align-items: center;\n}\n\n.form-task-name {flex: 1;}\n\n.close img, .submit img{\n    width: 25px;\n    height: 25px;\n}\n\n.add-btn-container {\n    opacity: 60%;\n    margin: 15px 15px;\n}\n\n.add-btn-container:hover {opacity: 100%;}\n\n.add {\n    display: flex;\n    gap: 10px;\n    cursor: pointer;\n    align-items: center;\n}\n\n.dropbtn {\n    background-color: white;\n    padding: 6px;\n    font-size: 1rem;\n    cursor: pointer;\n    width: 90px;\n    text-decoration: none;\n}\n\n.priority-low {\n    color: green;\n    border: 1px solid green;\n}\n\n.priority-medium {\n    color: orange;\n    border: 1px solid orange;\n}\n\n.priority-high {\n    color: red;\n    border: 1px solid red;\n}\n\n.priority-low:hover {\n    background-color: green;\n    color: white;\n}\n\n.priority-medium:hover {\n    background-color: orange;\n    color: white;\n}\n\n.priority-high:hover {\n    background-color: red;\n    color: white;\n}\n\n.dropdown{\n    position: relative;\n    display: inline-block;\n}\n\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n    color: black;\n}\n\n.dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n}\n\n.dropdown-content a:hover {background-color: #ddd;}\n.show {display:block;}\n\n.bar {\n    display: flex;\n    border-style: solid;\n    border-width: 2px 0;\n    border-color: #dff1f6;\n    gap: 25px;\n    padding: 15px;\n    align-items: center;\n    width: clamp(550px, 100vw, 1000px);\n}\n\n.bar .name {\n    display: flex;\n    align-items: center;\n    flex: 1;\n\n}\n\n.done {opacity: 40%;}\n\n.done > .name {text-decoration: line-through;}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA,OAAO,YAAY,CAAC;AACpB,IAAI,gBAAgB,CAAC;;AAErB;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;AAC/B;;;AAGA;IACI,yBAAyB;IACzB,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,YAAY;;IAEZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,yBAAyB;IACzB,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ;AACJ;;AAEA;IACI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,eAAe;;IAEf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA,iBAAiB,OAAO,CAAC;;AAEzB;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA,0BAA0B,aAAa,CAAC;;AAExC;IACI,aAAa;IACb,SAAS;IACT,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,eAAe;IACf,eAAe;IACf,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;;;AAGA;IACI,aAAa;IACb,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;IAChB,4CAA4C;IAC5C,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;IACrB,cAAc;AAClB;;AAEA,2BAA2B,sBAAsB,CAAC;AAClD,OAAO,aAAa,CAAC;;AAErB;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,qBAAqB;IACrB,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,OAAO;;AAEX;;AAEA,OAAO,YAAY,CAAC;;AAEpB,eAAe,6BAA6B,CAAC","sourcesContent":["*, *::before, *::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\ninput {border: none;}\nli {list-style: none;}\n\nimg {\n    height: 15px;\n    width: 15px;\n}\n\nbutton {\n    border: none;\n    background: none;\n}\n\n.main-container {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 8fr;\n}\n\n\n.header {\n    background-color: #6ec0d5;\n    padding: calc(15px + 2vh) 15px;\n    font-weight: bolder;\n    font-size: 2rem;\n    color: white;\n\n    grid-column: 1 / 3;\n}\n\n.sidebar {\n    grid-row: 2 / 4;\n    padding: 15px;\n    background-color: #eff8fb;\n    min-width: 200px;\n    font-weight: bolder;\n    font-size: 1.5rem;\n}\n\n.project {\n    margin-left: 15px;\n    margin-top: 5px;\n    padding: 5px;\n}\n\n.project:hover {\n    cursor: pointer;\n    background-color: #e3eaef;\n}\n\n.home, .projects {\n    margin: 15px;\n    padding: 10px\n}\n\n.home:hover{\n    cursor: pointer;\n    background-color: #e3eaef;\n}\n\n.container {\n    grid-row: 2 / 4;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 15px;\n}\n\n.sort {\n    border: 1px solid #6dc1d6;\n    color: #6dc1d6;\n    padding: 5px;\n    margin-bottom: 15px;\n    cursor: pointer;\n}\n\n.sort:hover {\n    background-color: #6dc1d6;\n    color: white;\n}\n\n.form-popup {\n    display: none;\n    margin: 10px 0px;\n    border: 1px solid #6dc1d6;\n    border-radius: 8px;\n    padding: 15px;\n    opacity: 100%;\n}\n\n.form-container {\n    display: flex;\n    gap: 15px;\n    align-items: center;\n}\n\n.form-task-name {flex: 1;}\n\n.close img, .submit img{\n    width: 25px;\n    height: 25px;\n}\n\n.add-btn-container {\n    opacity: 60%;\n    margin: 15px 15px;\n}\n\n.add-btn-container:hover {opacity: 100%;}\n\n.add {\n    display: flex;\n    gap: 10px;\n    cursor: pointer;\n    align-items: center;\n}\n\n.dropbtn {\n    background-color: white;\n    padding: 6px;\n    font-size: 1rem;\n    cursor: pointer;\n    width: 90px;\n    text-decoration: none;\n}\n\n.priority-low {\n    color: green;\n    border: 1px solid green;\n}\n\n.priority-medium {\n    color: orange;\n    border: 1px solid orange;\n}\n\n.priority-high {\n    color: red;\n    border: 1px solid red;\n}\n\n.priority-low:hover {\n    background-color: green;\n    color: white;\n}\n\n.priority-medium:hover {\n    background-color: orange;\n    color: white;\n}\n\n.priority-high:hover {\n    background-color: red;\n    color: white;\n}\n\n.dropdown{\n    position: relative;\n    display: inline-block;\n}\n\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n    color: black;\n}\n\n.dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n}\n\n.dropdown-content a:hover {background-color: #ddd;}\n.show {display:block;}\n\n.bar {\n    display: flex;\n    border-style: solid;\n    border-width: 2px 0;\n    border-color: #dff1f6;\n    gap: 25px;\n    padding: 15px;\n    align-items: center;\n    width: clamp(550px, 100vw, 1000px);\n}\n\n.bar .name {\n    display: flex;\n    align-items: center;\n    flex: 1;\n\n}\n\n.done {opacity: 40%;}\n\n.done > .name {text-decoration: line-through;}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeader(){
    let header = document.createElement('div');
    let title = document.createElement('div');

    header.classList.add('header');
    title.textContent = "To-Do List";
    title.classList.add('title');

    header.append(title);

    return header;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskDomEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDomEvents */ "./src/modules/taskDomEvents.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");


let demoTasks = [];

demoTasks.push(new _task__WEBPACK_IMPORTED_MODULE_1__["default"]("Clean the sink", "medium", "2022-09-28", "demo", "-1", false));
demoTasks.push(new _task__WEBPACK_IMPORTED_MODULE_1__["default"]("Wash the laundry", "medium", "2022-09-25", "demo", "-2", false));
demoTasks.push(new _task__WEBPACK_IMPORTED_MODULE_1__["default"]("Fix shower head", "high", "2022-10-01", "demo", "-3", false));
demoTasks.push(new _task__WEBPACK_IMPORTED_MODULE_1__["default"]("Learn react", "high", "2022-10-05", "demo", "-4", false));

function load(){
    //localStorage.clear();
    let projects = [];

    if(localStorage.getItem('project')){    
        projects = JSON.parse(localStorage.getItem('project'));
    }
    projects.unshift(demoTasks);

    let container = document.querySelector('.task-container');
    let add_button = document.querySelector('.add-btn-container');

    if(localStorage.getItem('tasks')){    
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    for(let j = 0; j < projects.length; j++){
        for(let i = 0; i < projects[j].length; i++){
            container.insertBefore((0,_taskDomEvents__WEBPACK_IMPORTED_MODULE_0__["default"])(projects[j][i]), add_button);
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);

/***/ }),

/***/ "./src/modules/projectDomEvents.js":
/*!*****************************************!*\
  !*** ./src/modules/projectDomEvents.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add_task_button": () => (/* binding */ add_task_button),
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _imgs_add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/add.svg */ "./src/modules/imgs/add.svg");
/* harmony import */ var _imgs_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/close.svg */ "./src/modules/imgs/close.svg");
/* harmony import */ var _imgs_submit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/submit.svg */ "./src/modules/imgs/submit.svg");
/* harmony import */ var _taskDomEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskDomEvents */ "./src/modules/taskDomEvents.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar */ "./src/modules/sidebar.js");









function createProject(){
    let container = document.createElement('div');
    container.classList.add('container');

    let tasks = document.createElement('div');
    tasks.classList.add('task-container');

    tasks.append(add_task_button());
    container.append(sort_container(), tasks);

    return container;
}

function sort_container(){
    let container = document.createElement('div');
    container.textContent = "Sort by Date";
    container.classList.add("sort");

    container.addEventListener('click', () => {
        let tasks = document.querySelectorAll(".bar");
        let tasksArr = Array.from(tasks);
        let container = document.querySelector('.task-container');

        if(container.classList[1] === "descending"){
            container.classList.remove("descending");
            container.classList.add("ascending");
            tasksArr.sort(compareDatesDescending);
        }
        else{
            container.classList.remove("ascending");
            container.classList.add("descending");
            tasksArr.sort(compareDatesAscending);
        }

        removeChildElements();
        for(let i = 0; i < tasksArr.length; i++){
            container.append(tasksArr[i]);
        }

        let home = document.querySelector('.home');
        if(home.classList[1] == "active"){
            container.append(add_task_button());
        }
    }); 

    return container;
}

function compareDatesAscending(a, b){
    let aDate = a.querySelector('.date').value;
    let bDate = b.querySelector('.date').value;

    return aDate < bDate ? -1 : aDate > bDate ? 1 : 0;
}

function compareDatesDescending(a, b){
    let aDate = a.querySelector('.date').value;
    let bDate = b.querySelector('.date').value;

    return aDate < bDate ? 1 : aDate > bDate ? -1 : 0;
}

function add_task_button(){
    let container = document.createElement('li');
    container.classList.add('add-btn-container');

    container.append(task_button(), create_task_popup());

    return container;
}

function task_button(){
    let add_button = document.createElement('div');

    let add = document.createElement('img');
    add.src = _imgs_add_svg__WEBPACK_IMPORTED_MODULE_0__;
    let button = document.createElement('div');
    button.textContent = "Add Task";

    add_button.classList.add('add');
    add_button.append(add, button);

    add_button.addEventListener('click', show_create_task_popup, true);

    return add_button;
}

function create_task_popup(){
    let popup = document.createElement('div');
    popup.classList.add('form-popup');

    let form = document.createElement("form");
    form.classList.add('form-container');

    let name_label = document.createElement('label');
    name_label.setAttribute('for', 'name');
    name_label.textContent = "Task Name";

    let name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('placeholder', 'Enter task name');
    name.setAttribute('name', 'name');
    name.classList.add('form-task-name');
    name.required = true;

    let project_label = document.createElement('label');
    project_label.setAttribute('for', 'name');
    project_label.textContent = "Project Name";

    let project = document.createElement('input');
    project.setAttribute('type', 'text');
    project.setAttribute('placeholder', 'Enter project name(optional)');
    project.setAttribute('name', 'project');
    project.classList.add('form-task-project');

    let priority_label = document.createElement('label');
    priority_label.setAttribute('for', 'priority')
    priority_label.textContent = "Priority Level";

    let priority = document.createElement('select');
    priority.setAttribute('name', 'priority');
    priority.required = true;

    let low = document.createElement('option');
    low.value = 'low';
    low.textContent = 'low';

    let medium = document.createElement('option');
    medium.value = 'medium';
    medium.textContent = 'medium';

    let high = document.createElement('option');
    high.value = 'high';
    high.textContent = 'high';

    priority.append(low, medium, high);

    let date_label = document.createElement('label');
    date_label.setAttribute('for', 'date');
    date_label.textContent = "Due Date";

    let date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.setAttribute('name', 'date');
    date.required = true;

    form.append(name_label, name, project_label, project, priority_label, priority, date_label, date);
    form.append(close_buttton(), submit_button());

    add_submit(form);


    popup.append(form);

    return popup;
}

function show_create_task_popup(e){
    let form = document.querySelector(".form-popup");

    form.classList.add('show');
}

function submit_button(){
    let button = document.createElement('button');
    button.classList.add('submit');

    let icon = document.createElement('img');
    icon.src = _imgs_submit_svg__WEBPACK_IMPORTED_MODULE_2__;
    button.appendChild(icon);
    button.setAttribute('type', 'submit');

    return button;
}

function close_buttton(){
    let button = document.createElement('button');
    button.classList.add('close');

    let icon = document.createElement('img');
    icon.src = _imgs_close_svg__WEBPACK_IMPORTED_MODULE_1__;
    button.appendChild(icon);
    button.setAttribute('type', 'button');

    button.addEventListener('click', close_form);

    return button;
}

function close_form(e){
    let form = document.querySelector('.form-popup');
    form.classList.remove('show');
}

function add_task(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let formProps = Object.fromEntries(formData);

    let container = document.querySelector('.task-container');
    let add_button = document.querySelector('.add-btn-container');

    let newTask = new _task__WEBPACK_IMPORTED_MODULE_4__["default"](formProps.name, formProps.priority, formProps.date, formProps.project ? formProps.project : "home" , uniqueId(), false);

    container.insertBefore((0,_taskDomEvents__WEBPACK_IMPORTED_MODULE_3__["default"])(newTask), add_button);
    (0,_storage__WEBPACK_IMPORTED_MODULE_5__["default"])(newTask);

    (0,_sidebar__WEBPACK_IMPORTED_MODULE_6__.changeProjects)();
    reset_form();
    close_form();
}

function reset_form(){
    let form = document.querySelector('.form-container');

    form.reset();
}

function add_submit(form){
    form.addEventListener('submit', add_task);
}

function removeChildElements(){
    let element = document.querySelector(".task-container");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function uniqueId(){
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
};



/***/ }),

/***/ "./src/modules/sidebar.js":
/*!********************************!*\
  !*** ./src/modules/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeProjects": () => (/* binding */ changeProjects),
/* harmony export */   "createSidebar": () => (/* binding */ createSidebar)
/* harmony export */ });
/* harmony import */ var _taskDomEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDomEvents */ "./src/modules/taskDomEvents.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _projectDomEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectDomEvents */ "./src/modules/projectDomEvents.js");




let demoTasks = [];

demoTasks.push(new _task__WEBPACK_IMPORTED_MODULE_1__["default"]("Clean the sink", "medium", "2022-09-28", "demo", "-1", false));
demoTasks.push(new _task__WEBPACK_IMPORTED_MODULE_1__["default"]("Wash the laundry", "medium", "2022-09-25", "demo", "-2", false));
demoTasks.push(new _task__WEBPACK_IMPORTED_MODULE_1__["default"]("Fix shower head", "high", "2022-10-01", "demo", "-3", false));
demoTasks.push(new _task__WEBPACK_IMPORTED_MODULE_1__["default"]("Learn react", "high", "2022-10-05", "demo", "-4", false));

function createSidebar(){
    let sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    sidebar.append(home(), projects());


    return sidebar;
}

function home(){
    let home = document.createElement('li');
    home.classList.add("home");
    home.classList.add("active");
    home.textContent = "Home";

    home.addEventListener('click', () => {
        let container = document.querySelector(".task-container");
        home.classList.add("active");
        let projects = [];
        if(localStorage.getItem('project')){    
            projects = JSON.parse(localStorage.getItem('project'));
        }

        projects.unshift(demoTasks);
        removeChildElements();

        for(let i = 0; i < projects.length; i++){
            for(let j = 0; j < projects[i].length; j++){
                container.appendChild((0,_taskDomEvents__WEBPACK_IMPORTED_MODULE_0__["default"])(projects[i][j]));
            }
        }
        container.appendChild((0,_projectDomEvents__WEBPACK_IMPORTED_MODULE_2__.add_task_button)());
    });

    return home;
}

function projects(){
    let projects = document.createElement('li');
    projects.classList.add("projects");
    projects.textContent = "Projects";

    let projectsArr = [];
    if(localStorage.getItem('project')){    
        projectsArr = JSON.parse(localStorage.getItem('project'));
    }
    projects.append(project("demo"));
    for(let i = 0; i < projectsArr.length; i++){
        let name = projectsArr[i][0]._project;
        projects.append(project(name));
    }
    return projects;
}

function project(name){
    let project = document.createElement('li');
    project.textContent = name;
    project.classList.add('project');

    project.addEventListener('click', () => {
        let container = document.querySelector(".task-container");
        let tasks = [];
        let home = document.querySelector('.home');
        home.classList.remove('active')

        removeChildElements();

        let projects = [];
        if(localStorage.getItem('project')){    
            projects = JSON.parse(localStorage.getItem('project'));
        }
        for(let i = 0; i < projects.length; i++){
            if(name == projects[i][0]._project){
                tasks = projects[i];
            }
        }

        if(name === "demo"){
            tasks = demoTasks;
        }

        for(let j = 0; j < tasks.length; j++){
            container.append((0,_taskDomEvents__WEBPACK_IMPORTED_MODULE_0__["default"])(tasks[j]));
        }
    });

    return project;
}

function removeChildElements(){
    let element = document.querySelector(".task-container");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function changeProjects(){
    let sidebar = document.querySelector('.sidebar');
    removeProject();
    sidebar.append(projects());
}

function removeProject(){
    let element = document.querySelector(".sidebar");
    element.removeChild(element.lastChild);
}



/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function saveTask(task){
    let project = task._project;
    let projects = [];
    let tasks = [];
    let found = false

    if(localStorage.getItem('project')){    
        projects = JSON.parse(localStorage.getItem('project'));
    }

    for(let i = 0; i < projects.length; i++){
        if(projects[i][0]._project === project){
            projects[i].push(task);
            found = true;
        }
    }
    if(!found){
        tasks.push(task);
        projects.push(tasks);
    }
    localStorage.setItem('project', JSON.stringify(projects));
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveTask);

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task{
    constructor(name, priority, date, project, id, done) {
        this._name = name;
        this._priority = priority;
        this._date = date;
        this._project = project;
        this._id = id;
        this._done = done;
    }

    set name(newName){
        this._name = newName;
    }

    set priority(newPriority){
        this._priority = newPriority;
    }

    set date(newDate){
        this._date = newDate;
    }

    set project(newProject){
        this._project = newProject;
    }

    set id(id){
        this._id = id;
    }

    set done(done){
        this._done = done;
    }

    get name(){
        return this._name;
    }

    get priority(){
        return this._priority;
    }

    get date(){
        return this._date;
    }

    get project(){
        return this._project;
    }

    get id(){
        return this._id;
    }

    get done(){
        return this._done;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/modules/taskDomEvents.js":
/*!**************************************!*\
  !*** ./src/modules/taskDomEvents.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/delete.svg */ "./src/modules/imgs/delete.svg");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/modules/sidebar.js");



function createTask(task){
    let task_bar = document.createElement("li");
    task_bar.classList.add("bar");
    task_bar.setAttribute('id', task._id);
    if(task._done){
        task_bar.classList.add('done');
    }

    task_bar.append(checkbox(task._done), task_name(task._name), project(task._project), priority(task._priority), due_date(task._date), delete_button());
    return task_bar;
}

function checkbox(done){
    let box = document.createElement("input");
    box.setAttribute("type", "checkbox");
    box.checked = done;

    
    box.addEventListener('change', () => {
        let bar = box.parentNode;
        if(box.checked){
            bar.classList.add('done');
        }
        else {
            bar.classList.remove('done');
        }
        editDone(bar.id, box.checked);
    });
    return box;
}

function task_name(name){
    let task_name = document.createElement("input");
    task_name.setAttribute("type", "text");
    task_name.classList.add('name');

    task_name.value = name;

    task_name.addEventListener('change', (e) => {
        let id = task_name.parentNode.id;
        editName(id, task_name.value)
    });

    return task_name;
}

function project(name){
    let project = document.createElement("input");
    project.setAttribute("type", "text");
    project.classList.add('project-name');

    project.value = name;

    project.addEventListener('change', (e) => {
        let id = project.parentNode.id;
        editProject(id, project.value)
    });

    return project;
}

function priority(level){
    let button = document.createElement("button");
    let priority = "priority-" + level;

    button.classList.add("dropbtn");
    button.classList.add(priority);
    button.textContent = level;

    button.append(dropdown());

    add_dropdown_click(button);

    return button;
}

function dropdown(){
    let dropdown_box = document.createElement('div');
    dropdown_box.classList.add("dropdown-content");

    let low = document.createElement('div');
    low.textContent = "low";
    low.classList.add('low');

    let medium = document.createElement('div');
    medium.textContent = "medium";
    medium.classList.add('medium');

    let high = document.createElement('div');
    high.textContent = "high";
    high.classList.add('high');

    dropdown_box.append(low, medium, high);

    add_change_priority(dropdown_box);


    return dropdown_box;
}

function add_dropdown_click(button){
    button.addEventListener('click', () => {
        let dropdown_box = button.lastChild;

        dropdown_box.classList.toggle("show");
    });
}

function add_change_priority(dropdown_box){
    for(let i = 0; i < 3; i++){
        dropdown_box.children[i].addEventListener("click", (e) => {
            let button = dropdown_box.parentNode;
            let change =  e.target.textContent;
            let priority = "priority-" + change;
            button.classList.remove(button.classList[1])
            button.classList.add(priority);
            
            
            button.textContent = change;

            button.appendChild(dropdown());

            let id = button.parentNode.id;

            editPriority(id, change);
        });
    }
}

function due_date(date){
    let due_date = document.createElement('input');
    due_date.setAttribute("type", "date");
    due_date.classList.add('date');
    due_date.value = date;

    
    due_date.addEventListener('change', (e) => {
        let id = due_date.parentNode.id;
        editDate(id, due_date.value)
    });

    return due_date;
}

function delete_button(){
    let delete_button = document.createElement("img");

    delete_button.classList.add("delete");
    delete_button.src = _imgs_delete_svg__WEBPACK_IMPORTED_MODULE_0__;

    delete_button.addEventListener('click', (e) => {
        let container = document.querySelector('.task-container');
        
        let bar = e.target.parentNode;
        let id = bar.id;
        container.removeChild(bar);
        remove(id);
        (0,_sidebar__WEBPACK_IMPORTED_MODULE_1__.changeProjects)();
    });


    return delete_button;
}

function editName(id, change){
    let projects = []
    if(localStorage.getItem('project')){    
        projects = JSON.parse(localStorage.getItem('project')); 
    }

    for(let i = 0; i < projects.length; i++){
        for(let j = 0; j < projects[i].length; j++){
            if(projects[i][j]._id == id){
                projects[i][j]._name = change;
            }
        }
    }
    localStorage.setItem('project', JSON.stringify(projects));
}

function editProject(id, change){
    if(id < 0){
        return;
    }
    let projects = [];
    if(localStorage.getItem('project')){    
        projects = JSON.parse(localStorage.getItem('project')); 
    }
    let tasks = [];
    let temp;
    let pushed = false;
    for(let i = 0; i < projects.length; i++){
        for(let j = 0; j < projects[i].length; j++){
            if(projects[i][j]._id == id){
                projects[i][j]._project = change;
                temp =  projects[i][j];
                remove(projects[i][j]._id);
            }
        }
    }

    if(localStorage.getItem('project')){    
        projects = JSON.parse(localStorage.getItem('project')); 
    }

    for(let i = 0; i < projects.length; i++){
        console.log(project[i]);
        if(temp._project === project[i][0]._project){
            project[i].push(temp);
            pushed = true;
        }
    }

    if(!pushed && temp){
        tasks.push(temp);
        projects.push(tasks);
    }

    localStorage.setItem('project', JSON.stringify(projects));
    (0,_sidebar__WEBPACK_IMPORTED_MODULE_1__.changeProjects)();
}

function editPriority(id, change){
    let projects = []
    if(localStorage.getItem('project')){    
        projects = JSON.parse(localStorage.getItem('project')); 
    }

    for(let i = 0; i < projects.length; i++){
        for(let j = 0; j < projects[i].length; j++){
            if(projects[i][j]._id == id){
                projects[i][j]._priority = change;
            }
        }
    }
    localStorage.setItem('project', JSON.stringify(projects));
}

function editDate(id, change){
    let projects = []
    if(localStorage.getItem('project')){    
        projects = JSON.parse(localStorage.getItem('project')); 
    }

    for(let i = 0; i < projects.length; i++){
        for(let j = 0; j < projects[i].length; j++){
            if(projects[i][j]._id == id){
                projects[i][j]._date = change;
            }
        }
    }
    localStorage.setItem('project', JSON.stringify(projects));
}

function editDone(id, change){
    let projects = []
    if(localStorage.getItem('project')){    
        projects = JSON.parse(localStorage.getItem('project')); 
    }

    for(let i = 0; i < projects.length; i++){
        for(let j = 0; j < projects[i].length; j++){
            if(projects[i][j]._id == id){
                projects[i][j]._done = change;
            }
        }
    }
    localStorage.setItem('project', JSON.stringify(projects));
}

function remove(id){
    let projects = []
    if(localStorage.getItem('project')){    
        projects = JSON.parse(localStorage.getItem('project')); 
    }

    for(let i = 0; i < projects.length; i++){
        for(let j = 0; j < projects[i].length; j++){
            if(projects[i][j]._id == id){
                projects[i].splice(j, 1);
            }
        }
    }

    for(let j = 0; j < projects.length; j++){
        if(projects[j].length == 0){
            projects.splice(j, 1);
        }
    }

    localStorage.setItem('project', JSON.stringify(projects));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);

/***/ }),

/***/ "./src/modules/imgs/add.svg":
/*!**********************************!*\
  !*** ./src/modules/imgs/add.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "064e6ef8ccdf0682dd2a.svg";

/***/ }),

/***/ "./src/modules/imgs/close.svg":
/*!************************************!*\
  !*** ./src/modules/imgs/close.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3edff3eec0d86a97d3b2.svg";

/***/ }),

/***/ "./src/modules/imgs/delete.svg":
/*!*************************************!*\
  !*** ./src/modules/imgs/delete.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8618c2a5c71beb2ff7ab.svg";

/***/ }),

/***/ "./src/modules/imgs/submit.svg":
/*!*************************************!*\
  !*** ./src/modules/imgs/submit.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c5cdf324107ab0946ff.svg";

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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_projectDomEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/projectDomEvents */ "./src/modules/projectDomEvents.js");
/* harmony import */ var _modules_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sidebar */ "./src/modules/sidebar.js");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/header */ "./src/modules/header.js");
/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/load */ "./src/modules/load.js");






let mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');

mainContainer.append((0,_modules_header__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_modules_sidebar__WEBPACK_IMPORTED_MODULE_2__.createSidebar)(), (0,_modules_projectDomEvents__WEBPACK_IMPORTED_MODULE_1__.createProject)());

document.body.append(mainContainer);

add_not_clicked();
(0,_modules_load__WEBPACK_IMPORTED_MODULE_4__["default"])()


function add_not_clicked(){
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ29DO0FBQ1Q7QUFDSjtBQUNYOztBQUVqQztBQUNBOztBQUVBLHFCQUFxQiwyREFBWSxJQUFJLCtEQUFhLElBQUksd0VBQWE7O0FBRW5FOztBQUVBO0FBQ0EseURBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0RG9tRXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tEb21FdmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0IHtib3JkZXI6IG5vbmU7fVxcbmxpIHtsaXN0LXN0eWxlOiBub25lO31cXG5cXG5pbWcge1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOGZyO1xcbn1cXG5cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlYzBkNTtcXG4gICAgcGFkZGluZzogY2FsYygxNXB4ICsgMnZoKSAxNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjhmYjtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZWFlZjtcXG59XFxuXFxuLmhvbWUsIC5wcm9qZWN0cyB7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gICAgcGFkZGluZzogMTBweFxcbn1cXG5cXG4uaG9tZTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlYWVmO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDE1cHg7XFxufVxcblxcbi5zb3J0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZkYzFkNjtcXG4gICAgY29sb3I6ICM2ZGMxZDY7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc29ydDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZGMxZDY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcm0tcG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNmRjMWQ2O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tdGFzay1uYW1lIHtmbGV4OiAxO31cXG5cXG4uY2xvc2UgaW1nLCAuc3VibWl0IGltZ3tcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLmFkZC1idG4tY29udGFpbmVyIHtcXG4gICAgb3BhY2l0eTogNjAlO1xcbiAgICBtYXJnaW46IDE1cHggMTVweDtcXG59XFxuXFxuLmFkZC1idG4tY29udGFpbmVyOmhvdmVyIHtvcGFjaXR5OiAxMDAlO31cXG5cXG4uYWRkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kcm9wYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkaXVtIHtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnByaW9yaXR5LWxvdzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcmlvcml0eS1tZWRpdW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2g6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRyb3Bkb3due1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIG1pbi13aWR0aDogMTYwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IGEge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XFxuLnNob3cge2Rpc3BsYXk6YmxvY2s7fVxcblxcbi5iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDJweCAwO1xcbiAgICBib3JkZXItY29sb3I6ICNkZmYxZjY7XFxuICAgIGdhcDogMjVweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IGNsYW1wKDU1MHB4LCAxMDB2dywgMTAwMHB4KTtcXG59XFxuXFxuLmJhciAubmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXg6IDE7XFxuXFxufVxcblxcbi5kb25lIHtvcGFjaXR5OiA0MCU7fVxcblxcbi5kb25lID4gLm5hbWUge3RleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO31cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUEsT0FBTyxZQUFZLENBQUM7QUFDcEIsSUFBSSxnQkFBZ0IsQ0FBQzs7QUFFckI7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0FBQy9COzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZOztJQUVaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7O0lBRWYsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQSxpQkFBaUIsT0FBTyxDQUFDOztBQUV6QjtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQSwwQkFBMEIsYUFBYSxDQUFDOztBQUV4QztJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQSwyQkFBMkIsc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxhQUFhLENBQUM7O0FBRXJCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsT0FBTzs7QUFFWDs7QUFFQSxPQUFPLFlBQVksQ0FBQzs7QUFFcEIsZUFBZSw2QkFBNkIsQ0FBQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dCB7Ym9yZGVyOiBub25lO31cXG5saSB7bGlzdC1zdHlsZTogbm9uZTt9XFxuXFxuaW1nIHtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG59XFxuXFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWMwZDU7XFxuICAgIHBhZGRpbmc6IGNhbGMoMTVweCArIDJ2aCkgMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY4ZmI7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2VhZWY7XFxufVxcblxcbi5ob21lLCAucHJvamVjdHMge1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHhcXG59XFxuXFxuLmhvbWU6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZWFlZjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG4uc29ydCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ZGMxZDY7XFxuICAgIGNvbG9yOiAjNmRjMWQ2O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNvcnQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmRjMWQ2O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mb3JtLXBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZkYzFkNjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLXRhc2stbmFtZSB7ZmxleDogMTt9XFxuXFxuLmNsb3NlIGltZywgLnN1Ym1pdCBpbWd7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5hZGQtYnRuLWNvbnRhaW5lciB7XFxuICAgIG9wYWNpdHk6IDYwJTtcXG4gICAgbWFyZ2luOiAxNXB4IDE1cHg7XFxufVxcblxcbi5hZGQtYnRuLWNvbnRhaW5lcjpob3ZlciB7b3BhY2l0eTogMTAwJTt9XFxuXFxuLmFkZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZHJvcGJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLnByaW9yaXR5LW1lZGl1bSB7XFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5wcmlvcml0eS1sb3c6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkaXVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kcm9wZG93bntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcblxcbi5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGVudCBhIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxcbi5zaG93IHtkaXNwbGF5OmJsb2NrO31cXG5cXG4uYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHggMDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZGZmMWY2O1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBjbGFtcCg1NTBweCwgMTAwdncsIDEwMDBweCk7XFxufVxcblxcbi5iYXIgLm5hbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4OiAxO1xcblxcbn1cXG5cXG4uZG9uZSB7b3BhY2l0eTogNDAlO31cXG5cXG4uZG9uZSA+IC5uYW1lIHt0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDt9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvLURvIExpc3RcIjtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuXG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZSk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7IiwiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSBcIi4vdGFza0RvbUV2ZW50c1wiO1xuaW1wb3J0IHRhc2tDb25zdHJ1Y3RvciBmcm9tIFwiLi90YXNrXCI7XG5sZXQgZGVtb1Rhc2tzID0gW107XG5cbmRlbW9UYXNrcy5wdXNoKG5ldyB0YXNrQ29uc3RydWN0b3IoXCJDbGVhbiB0aGUgc2lua1wiLCBcIm1lZGl1bVwiLCBcIjIwMjItMDktMjhcIiwgXCJkZW1vXCIsIFwiLTFcIiwgZmFsc2UpKTtcbmRlbW9UYXNrcy5wdXNoKG5ldyB0YXNrQ29uc3RydWN0b3IoXCJXYXNoIHRoZSBsYXVuZHJ5XCIsIFwibWVkaXVtXCIsIFwiMjAyMi0wOS0yNVwiLCBcImRlbW9cIiwgXCItMlwiLCBmYWxzZSkpO1xuZGVtb1Rhc2tzLnB1c2gobmV3IHRhc2tDb25zdHJ1Y3RvcihcIkZpeCBzaG93ZXIgaGVhZFwiLCBcImhpZ2hcIiwgXCIyMDIyLTEwLTAxXCIsIFwiZGVtb1wiLCBcIi0zXCIsIGZhbHNlKSk7XG5kZW1vVGFza3MucHVzaChuZXcgdGFza0NvbnN0cnVjdG9yKFwiTGVhcm4gcmVhY3RcIiwgXCJoaWdoXCIsIFwiMjAyMi0xMC0wNVwiLCBcImRlbW9cIiwgXCItNFwiLCBmYWxzZSkpO1xuXG5mdW5jdGlvbiBsb2FkKCl7XG4gICAgLy9sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0JykpeyAgICBcbiAgICAgICAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0JykpO1xuICAgIH1cbiAgICBwcm9qZWN0cy51bnNoaWZ0KGRlbW9UYXNrcyk7XG5cbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XG4gICAgbGV0IGFkZF9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bi1jb250YWluZXInKTtcblxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKXsgICAgXG4gICAgICAgIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gICAgfVxuXG4gICAgZm9yKGxldCBqID0gMDsgaiA8IHByb2plY3RzLmxlbmd0aDsgaisrKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzW2pdLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoY3JlYXRlVGFzayhwcm9qZWN0c1tqXVtpXSksIGFkZF9idXR0b24pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkOyIsImltcG9ydCBhZGRJY29uIGZyb20gXCIuL2ltZ3MvYWRkLnN2Z1wiO1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tIFwiLi9pbWdzL2Nsb3NlLnN2Z1wiO1xuaW1wb3J0IHN1Ym1pdEljb24gZnJvbSBcIi4vaW1ncy9zdWJtaXQuc3ZnXCI7XG5cbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL3Rhc2tEb21FdmVudHNcIjtcbmltcG9ydCB0YXNrQ29uc3RydWN0b3IgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHNhdmVUYXNrIGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7Y2hhbmdlUHJvamVjdHN9IGZyb20gXCIuL3NpZGViYXJcIjtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpe1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICBsZXQgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrcy5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuXG4gICAgdGFza3MuYXBwZW5kKGFkZF90YXNrX2J1dHRvbigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHNvcnRfY29udGFpbmVyKCksIHRhc2tzKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHNvcnRfY29udGFpbmVyKCl7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiU29ydCBieSBEYXRlXCI7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzb3J0XCIpO1xuXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJhclwiKTtcbiAgICAgICAgbGV0IHRhc2tzQXJyID0gQXJyYXkuZnJvbSh0YXNrcyk7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcblxuICAgICAgICBpZihjb250YWluZXIuY2xhc3NMaXN0WzFdID09PSBcImRlc2NlbmRpbmdcIil7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRlc2NlbmRpbmdcIik7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFzY2VuZGluZ1wiKTtcbiAgICAgICAgICAgIHRhc2tzQXJyLnNvcnQoY29tcGFyZURhdGVzRGVzY2VuZGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYXNjZW5kaW5nXCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkZXNjZW5kaW5nXCIpO1xuICAgICAgICAgICAgdGFza3NBcnIuc29ydChjb21wYXJlRGF0ZXNBc2NlbmRpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ2hpbGRFbGVtZW50cygpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3NBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0YXNrc0FycltpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG4gICAgICAgIGlmKGhvbWUuY2xhc3NMaXN0WzFdID09IFwiYWN0aXZlXCIpe1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChhZGRfdGFza19idXR0b24oKSk7XG4gICAgICAgIH1cbiAgICB9KTsgXG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjb21wYXJlRGF0ZXNBc2NlbmRpbmcoYSwgYil7XG4gICAgbGV0IGFEYXRlID0gYS5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpLnZhbHVlO1xuICAgIGxldCBiRGF0ZSA9IGIucXVlcnlTZWxlY3RvcignLmRhdGUnKS52YWx1ZTtcblxuICAgIHJldHVybiBhRGF0ZSA8IGJEYXRlID8gLTEgOiBhRGF0ZSA+IGJEYXRlID8gMSA6IDA7XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVEYXRlc0Rlc2NlbmRpbmcoYSwgYil7XG4gICAgbGV0IGFEYXRlID0gYS5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpLnZhbHVlO1xuICAgIGxldCBiRGF0ZSA9IGIucXVlcnlTZWxlY3RvcignLmRhdGUnKS52YWx1ZTtcblxuICAgIHJldHVybiBhRGF0ZSA8IGJEYXRlID8gMSA6IGFEYXRlID4gYkRhdGUgPyAtMSA6IDA7XG59XG5cbmZ1bmN0aW9uIGFkZF90YXNrX2J1dHRvbigpe1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGQtYnRuLWNvbnRhaW5lcicpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZCh0YXNrX2J1dHRvbigpLCBjcmVhdGVfdGFza19wb3B1cCgpKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHRhc2tfYnV0dG9uKCl7XG4gICAgbGV0IGFkZF9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBhZGQuc3JjID0gYWRkSWNvbjtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuXG4gICAgYWRkX2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQnKTtcbiAgICBhZGRfYnV0dG9uLmFwcGVuZChhZGQsIGJ1dHRvbik7XG5cbiAgICBhZGRfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd19jcmVhdGVfdGFza19wb3B1cCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gYWRkX2J1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX3Rhc2tfcG9wdXAoKXtcbiAgICBsZXQgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdmb3JtLXBvcHVwJyk7XG5cbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcblxuICAgIGxldCBuYW1lX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuYW1lX2xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgICBuYW1lX2xhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIE5hbWVcIjtcblxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIHRhc2sgbmFtZScpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGFzay1uYW1lJyk7XG4gICAgbmFtZS5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBsZXQgcHJvamVjdF9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJvamVjdF9sYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XG4gICAgcHJvamVjdF9sYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lXCI7XG5cbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHByb2plY3Quc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBwcm9qZWN0IG5hbWUob3B0aW9uYWwpJyk7XG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdCcpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnZm9ybS10YXNrLXByb2plY3QnKTtcblxuICAgIGxldCBwcmlvcml0eV9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlfbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKVxuICAgIHByaW9yaXR5X2xhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eSBMZXZlbFwiO1xuXG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHkucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgbGV0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGxvdy52YWx1ZSA9ICdsb3cnO1xuICAgIGxvdy50ZXh0Q29udGVudCA9ICdsb3cnO1xuXG4gICAgbGV0IG1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG1lZGl1bS52YWx1ZSA9ICdtZWRpdW0nO1xuICAgIG1lZGl1bS50ZXh0Q29udGVudCA9ICdtZWRpdW0nO1xuXG4gICAgbGV0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBoaWdoLnZhbHVlID0gJ2hpZ2gnO1xuICAgIGhpZ2gudGV4dENvbnRlbnQgPSAnaGlnaCc7XG5cbiAgICBwcmlvcml0eS5hcHBlbmQobG93LCBtZWRpdW0sIGhpZ2gpO1xuXG4gICAgbGV0IGRhdGVfbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVfbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGF0ZScpO1xuICAgIGRhdGVfbGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG5cbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKTtcbiAgICBkYXRlLnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIGZvcm0uYXBwZW5kKG5hbWVfbGFiZWwsIG5hbWUsIHByb2plY3RfbGFiZWwsIHByb2plY3QsIHByaW9yaXR5X2xhYmVsLCBwcmlvcml0eSwgZGF0ZV9sYWJlbCwgZGF0ZSk7XG4gICAgZm9ybS5hcHBlbmQoY2xvc2VfYnV0dHRvbigpLCBzdWJtaXRfYnV0dG9uKCkpO1xuXG4gICAgYWRkX3N1Ym1pdChmb3JtKTtcblxuXG4gICAgcG9wdXAuYXBwZW5kKGZvcm0pO1xuXG4gICAgcmV0dXJuIHBvcHVwO1xufVxuXG5mdW5jdGlvbiBzaG93X2NyZWF0ZV90YXNrX3BvcHVwKGUpe1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXBvcHVwXCIpO1xuXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdF9idXR0b24oKXtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdCcpO1xuXG4gICAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpY29uLnNyYyA9IHN1Ym1pdEljb247XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjbG9zZV9idXR0dG9uKCl7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuXG4gICAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpY29uLnNyYyA9IGNsb3NlSWNvbjtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlX2Zvcm0pO1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY2xvc2VfZm9ybShlKXtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBvcHVwJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG59XG5cbmZ1bmN0aW9uIGFkZF90YXNrKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgIGxldCBmb3JtUHJvcHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpO1xuICAgIGxldCBhZGRfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4tY29udGFpbmVyJyk7XG5cbiAgICBsZXQgbmV3VGFzayA9IG5ldyB0YXNrQ29uc3RydWN0b3IoZm9ybVByb3BzLm5hbWUsIGZvcm1Qcm9wcy5wcmlvcml0eSwgZm9ybVByb3BzLmRhdGUsIGZvcm1Qcm9wcy5wcm9qZWN0ID8gZm9ybVByb3BzLnByb2plY3QgOiBcImhvbWVcIiAsIHVuaXF1ZUlkKCksIGZhbHNlKTtcblxuICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoY3JlYXRlVGFzayhuZXdUYXNrKSwgYWRkX2J1dHRvbik7XG4gICAgc2F2ZVRhc2sobmV3VGFzayk7XG5cbiAgICBjaGFuZ2VQcm9qZWN0cygpO1xuICAgIHJlc2V0X2Zvcm0oKTtcbiAgICBjbG9zZV9mb3JtKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0X2Zvcm0oKXtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgZm9ybS5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBhZGRfc3VibWl0KGZvcm0pe1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkX3Rhc2spO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZEVsZW1lbnRzKCl7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdW5pcXVlSWQoKXtcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gRGF0ZS5ub3coKS50b1N0cmluZygzNik7XG4gICAgY29uc3QgcmFuZG9tbmVzcyA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKTtcbiAgICByZXR1cm4gZGF0ZVN0cmluZyArIHJhbmRvbW5lc3M7XG59O1xuXG5leHBvcnQge2NyZWF0ZVByb2plY3QsIGFkZF90YXNrX2J1dHRvbn07IiwiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSBcIi4vdGFza0RvbUV2ZW50c1wiO1xuaW1wb3J0IHRhc2tDb25zdHJ1Y3RvciBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQge2FkZF90YXNrX2J1dHRvbn0gZnJvbSBcIi4vcHJvamVjdERvbUV2ZW50c1wiO1xuXG5sZXQgZGVtb1Rhc2tzID0gW107XG5cbmRlbW9UYXNrcy5wdXNoKG5ldyB0YXNrQ29uc3RydWN0b3IoXCJDbGVhbiB0aGUgc2lua1wiLCBcIm1lZGl1bVwiLCBcIjIwMjItMDktMjhcIiwgXCJkZW1vXCIsIFwiLTFcIiwgZmFsc2UpKTtcbmRlbW9UYXNrcy5wdXNoKG5ldyB0YXNrQ29uc3RydWN0b3IoXCJXYXNoIHRoZSBsYXVuZHJ5XCIsIFwibWVkaXVtXCIsIFwiMjAyMi0wOS0yNVwiLCBcImRlbW9cIiwgXCItMlwiLCBmYWxzZSkpO1xuZGVtb1Rhc2tzLnB1c2gobmV3IHRhc2tDb25zdHJ1Y3RvcihcIkZpeCBzaG93ZXIgaGVhZFwiLCBcImhpZ2hcIiwgXCIyMDIyLTEwLTAxXCIsIFwiZGVtb1wiLCBcIi0zXCIsIGZhbHNlKSk7XG5kZW1vVGFza3MucHVzaChuZXcgdGFza0NvbnN0cnVjdG9yKFwiTGVhcm4gcmVhY3RcIiwgXCJoaWdoXCIsIFwiMjAyMi0xMC0wNVwiLCBcImRlbW9cIiwgXCItNFwiLCBmYWxzZSkpO1xuXG5mdW5jdGlvbiBjcmVhdGVTaWRlYmFyKCl7XG4gICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICBzaWRlYmFyLmFwcGVuZChob21lKCksIHByb2plY3RzKCkpO1xuXG5cbiAgICByZXR1cm4gc2lkZWJhcjtcbn1cblxuZnVuY3Rpb24gaG9tZSgpe1xuICAgIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcbiAgICAgICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSl7ICAgIFxuICAgICAgICAgICAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0JykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvamVjdHMudW5zaGlmdChkZW1vVGFza3MpO1xuICAgICAgICByZW1vdmVDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBwcm9qZWN0c1tpXS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2socHJvamVjdHNbaV1bal0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkX3Rhc2tfYnV0dG9uKCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhvbWU7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RzKCl7XG4gICAgbGV0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG4gICAgcHJvamVjdHMudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cbiAgICBsZXQgcHJvamVjdHNBcnIgPSBbXTtcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcpKXsgICAgXG4gICAgICAgIHByb2plY3RzQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcpKTtcbiAgICB9XG4gICAgcHJvamVjdHMuYXBwZW5kKHByb2plY3QoXCJkZW1vXCIpKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgbmFtZSA9IHByb2plY3RzQXJyW2ldWzBdLl9wcm9qZWN0O1xuICAgICAgICBwcm9qZWN0cy5hcHBlbmQocHJvamVjdChuYW1lKSk7XG4gICAgfVxuICAgIHJldHVybiBwcm9qZWN0cztcbn1cblxuZnVuY3Rpb24gcHJvamVjdChuYW1lKXtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgcHJvamVjdC50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG5cbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcbiAgICAgICAgbGV0IHRhc2tzID0gW107XG4gICAgICAgIGxldCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbiAgICAgICAgaG9tZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuXG4gICAgICAgIHJlbW92ZUNoaWxkRWxlbWVudHMoKTtcblxuICAgICAgICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSl7ICAgIFxuICAgICAgICAgICAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0JykpO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihuYW1lID09IHByb2plY3RzW2ldWzBdLl9wcm9qZWN0KXtcbiAgICAgICAgICAgICAgICB0YXNrcyA9IHByb2plY3RzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYobmFtZSA9PT0gXCJkZW1vXCIpe1xuICAgICAgICAgICAgdGFza3MgPSBkZW1vVGFza3M7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGFza3MubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChjcmVhdGVUYXNrKHRhc2tzW2pdKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZEVsZW1lbnRzKCl7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlUHJvamVjdHMoKXtcbiAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgcmVtb3ZlUHJvamVjdCgpO1xuICAgIHNpZGViYXIuYXBwZW5kKHByb2plY3RzKCkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KCl7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlU2lkZWJhciwgY2hhbmdlUHJvamVjdHN9OyIsImZ1bmN0aW9uIHNhdmVUYXNrKHRhc2spe1xuICAgIGxldCBwcm9qZWN0ID0gdGFzay5fcHJvamVjdDtcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgICBsZXQgdGFza3MgPSBbXTtcbiAgICBsZXQgZm91bmQgPSBmYWxzZVxuXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSl7ICAgIFxuICAgICAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSk7XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYocHJvamVjdHNbaV1bMF0uX3Byb2plY3QgPT09IHByb2plY3Qpe1xuICAgICAgICAgICAgcHJvamVjdHNbaV0ucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZighZm91bmQpe1xuICAgICAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHRhc2tzKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHNhdmVUYXNrOyIsImNsYXNzIFRhc2t7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJpb3JpdHksIGRhdGUsIHByb2plY3QsIGlkLCBkb25lKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLl9kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIHRoaXMuX2RvbmUgPSBkb25lO1xuICAgIH1cblxuICAgIHNldCBuYW1lKG5ld05hbWUpe1xuICAgICAgICB0aGlzLl9uYW1lID0gbmV3TmFtZTtcbiAgICB9XG5cbiAgICBzZXQgcHJpb3JpdHkobmV3UHJpb3JpdHkpe1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cblxuICAgIHNldCBkYXRlKG5ld0RhdGUpe1xuICAgICAgICB0aGlzLl9kYXRlID0gbmV3RGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgcHJvamVjdChuZXdQcm9qZWN0KXtcbiAgICAgICAgdGhpcy5fcHJvamVjdCA9IG5ld1Byb2plY3Q7XG4gICAgfVxuXG4gICAgc2V0IGlkKGlkKXtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICB9XG5cbiAgICBzZXQgZG9uZShkb25lKXtcbiAgICAgICAgdGhpcy5fZG9uZSA9IGRvbmU7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgICB9XG5cbiAgICBnZXQgZGF0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZTtcbiAgICB9XG5cbiAgICBnZXQgcHJvamVjdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdDtcbiAgICB9XG5cbiAgICBnZXQgaWQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIGdldCBkb25lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9kb25lO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJpbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL2ltZ3MvZGVsZXRlLnN2Zyc7XG5pbXBvcnQge2NoYW5nZVByb2plY3RzfSBmcm9tICcuL3NpZGViYXInO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2spe1xuICAgIGxldCB0YXNrX2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB0YXNrX2Jhci5jbGFzc0xpc3QuYWRkKFwiYmFyXCIpO1xuICAgIHRhc2tfYmFyLnNldEF0dHJpYnV0ZSgnaWQnLCB0YXNrLl9pZCk7XG4gICAgaWYodGFzay5fZG9uZSl7XG4gICAgICAgIHRhc2tfYmFyLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICB9XG5cbiAgICB0YXNrX2Jhci5hcHBlbmQoY2hlY2tib3godGFzay5fZG9uZSksIHRhc2tfbmFtZSh0YXNrLl9uYW1lKSwgcHJvamVjdCh0YXNrLl9wcm9qZWN0KSwgcHJpb3JpdHkodGFzay5fcHJpb3JpdHkpLCBkdWVfZGF0ZSh0YXNrLl9kYXRlKSwgZGVsZXRlX2J1dHRvbigpKTtcbiAgICByZXR1cm4gdGFza19iYXI7XG59XG5cbmZ1bmN0aW9uIGNoZWNrYm94KGRvbmUpe1xuICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBib3guY2hlY2tlZCA9IGRvbmU7XG5cbiAgICBcbiAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBsZXQgYmFyID0gYm94LnBhcmVudE5vZGU7XG4gICAgICAgIGlmKGJveC5jaGVja2VkKXtcbiAgICAgICAgICAgIGJhci5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBiYXIuY2xhc3NMaXN0LnJlbW92ZSgnZG9uZScpO1xuICAgICAgICB9XG4gICAgICAgIGVkaXREb25lKGJhci5pZCwgYm94LmNoZWNrZWQpO1xuICAgIH0pO1xuICAgIHJldHVybiBib3g7XG59XG5cbmZ1bmN0aW9uIHRhc2tfbmFtZShuYW1lKXtcbiAgICBsZXQgdGFza19uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tfbmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0YXNrX25hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuXG4gICAgdGFza19uYW1lLnZhbHVlID0gbmFtZTtcblxuICAgIHRhc2tfbmFtZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICBsZXQgaWQgPSB0YXNrX25hbWUucGFyZW50Tm9kZS5pZDtcbiAgICAgICAgZWRpdE5hbWUoaWQsIHRhc2tfbmFtZS52YWx1ZSlcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXNrX25hbWU7XG59XG5cbmZ1bmN0aW9uIHByb2plY3QobmFtZSl7XG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuXG4gICAgcHJvamVjdC52YWx1ZSA9IG5hbWU7XG5cbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIGxldCBpZCA9IHByb2plY3QucGFyZW50Tm9kZS5pZDtcbiAgICAgICAgZWRpdFByb2plY3QoaWQsIHByb2plY3QudmFsdWUpXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gcHJpb3JpdHkobGV2ZWwpe1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxldCBwcmlvcml0eSA9IFwicHJpb3JpdHktXCIgKyBsZXZlbDtcblxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZHJvcGJ0blwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChwcmlvcml0eSk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gbGV2ZWw7XG5cbiAgICBidXR0b24uYXBwZW5kKGRyb3Bkb3duKCkpO1xuXG4gICAgYWRkX2Ryb3Bkb3duX2NsaWNrKGJ1dHRvbik7XG5cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBkcm9wZG93bigpe1xuICAgIGxldCBkcm9wZG93bl9ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkcm9wZG93bl9ib3guY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLWNvbnRlbnRcIik7XG5cbiAgICBsZXQgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG93LnRleHRDb250ZW50ID0gXCJsb3dcIjtcbiAgICBsb3cuY2xhc3NMaXN0LmFkZCgnbG93Jyk7XG5cbiAgICBsZXQgbWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVkaXVtLnRleHRDb250ZW50ID0gXCJtZWRpdW1cIjtcbiAgICBtZWRpdW0uY2xhc3NMaXN0LmFkZCgnbWVkaXVtJyk7XG5cbiAgICBsZXQgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhpZ2gudGV4dENvbnRlbnQgPSBcImhpZ2hcIjtcbiAgICBoaWdoLmNsYXNzTGlzdC5hZGQoJ2hpZ2gnKTtcblxuICAgIGRyb3Bkb3duX2JveC5hcHBlbmQobG93LCBtZWRpdW0sIGhpZ2gpO1xuXG4gICAgYWRkX2NoYW5nZV9wcmlvcml0eShkcm9wZG93bl9ib3gpO1xuXG5cbiAgICByZXR1cm4gZHJvcGRvd25fYm94O1xufVxuXG5mdW5jdGlvbiBhZGRfZHJvcGRvd25fY2xpY2soYnV0dG9uKXtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBkcm9wZG93bl9ib3ggPSBidXR0b24ubGFzdENoaWxkO1xuXG4gICAgICAgIGRyb3Bkb3duX2JveC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkX2NoYW5nZV9wcmlvcml0eShkcm9wZG93bl9ib3gpe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzOyBpKyspe1xuICAgICAgICBkcm9wZG93bl9ib3guY2hpbGRyZW5baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZHJvcGRvd25fYm94LnBhcmVudE5vZGU7XG4gICAgICAgICAgICBsZXQgY2hhbmdlID0gIGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gXCJwcmlvcml0eS1cIiArIGNoYW5nZTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKGJ1dHRvbi5jbGFzc0xpc3RbMV0pXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChwcmlvcml0eSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gY2hhbmdlO1xuXG4gICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoZHJvcGRvd24oKSk7XG5cbiAgICAgICAgICAgIGxldCBpZCA9IGJ1dHRvbi5wYXJlbnROb2RlLmlkO1xuXG4gICAgICAgICAgICBlZGl0UHJpb3JpdHkoaWQsIGNoYW5nZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHVlX2RhdGUoZGF0ZSl7XG4gICAgbGV0IGR1ZV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVfZGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBkdWVfZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgZHVlX2RhdGUudmFsdWUgPSBkYXRlO1xuXG4gICAgXG4gICAgZHVlX2RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgbGV0IGlkID0gZHVlX2RhdGUucGFyZW50Tm9kZS5pZDtcbiAgICAgICAgZWRpdERhdGUoaWQsIGR1ZV9kYXRlLnZhbHVlKVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGR1ZV9kYXRlO1xufVxuXG5mdW5jdGlvbiBkZWxldGVfYnV0dG9uKCl7XG4gICAgbGV0IGRlbGV0ZV9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgZGVsZXRlX2J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICAgIGRlbGV0ZV9idXR0b24uc3JjID0gZGVsZXRlSWNvbjtcblxuICAgIGRlbGV0ZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgYmFyID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgbGV0IGlkID0gYmFyLmlkO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoYmFyKTtcbiAgICAgICAgcmVtb3ZlKGlkKTtcbiAgICAgICAgY2hhbmdlUHJvamVjdHMoKTtcbiAgICB9KTtcblxuXG4gICAgcmV0dXJuIGRlbGV0ZV9idXR0b247XG59XG5cbmZ1bmN0aW9uIGVkaXROYW1lKGlkLCBjaGFuZ2Upe1xuICAgIGxldCBwcm9qZWN0cyA9IFtdXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSl7ICAgIFxuICAgICAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSk7IFxuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBwcm9qZWN0c1tpXS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBpZihwcm9qZWN0c1tpXVtqXS5faWQgPT0gaWQpe1xuICAgICAgICAgICAgICAgIHByb2plY3RzW2ldW2pdLl9uYW1lID0gY2hhbmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3QoaWQsIGNoYW5nZSl7XG4gICAgaWYoaWQgPCAwKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcpKXsgICAgXG4gICAgICAgIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcpKTsgXG4gICAgfVxuICAgIGxldCB0YXNrcyA9IFtdO1xuICAgIGxldCB0ZW1wO1xuICAgIGxldCBwdXNoZWQgPSBmYWxzZTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgcHJvamVjdHNbaV0ubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgaWYocHJvamVjdHNbaV1bal0uX2lkID09IGlkKXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1tpXVtqXS5fcHJvamVjdCA9IGNoYW5nZTtcbiAgICAgICAgICAgICAgICB0ZW1wID0gIHByb2plY3RzW2ldW2pdO1xuICAgICAgICAgICAgICAgIHJlbW92ZShwcm9qZWN0c1tpXVtqXS5faWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSl7ICAgIFxuICAgICAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSk7IFxuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RbaV0pO1xuICAgICAgICBpZih0ZW1wLl9wcm9qZWN0ID09PSBwcm9qZWN0W2ldWzBdLl9wcm9qZWN0KXtcbiAgICAgICAgICAgIHByb2plY3RbaV0ucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgIHB1c2hlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZighcHVzaGVkICYmIHRlbXApe1xuICAgICAgICB0YXNrcy5wdXNoKHRlbXApO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHRhc2tzKTtcbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgY2hhbmdlUHJvamVjdHMoKTtcbn1cblxuZnVuY3Rpb24gZWRpdFByaW9yaXR5KGlkLCBjaGFuZ2Upe1xuICAgIGxldCBwcm9qZWN0cyA9IFtdXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSl7ICAgIFxuICAgICAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSk7IFxuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBwcm9qZWN0c1tpXS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBpZihwcm9qZWN0c1tpXVtqXS5faWQgPT0gaWQpe1xuICAgICAgICAgICAgICAgIHByb2plY3RzW2ldW2pdLl9wcmlvcml0eSA9IGNoYW5nZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbmZ1bmN0aW9uIGVkaXREYXRlKGlkLCBjaGFuZ2Upe1xuICAgIGxldCBwcm9qZWN0cyA9IFtdXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSl7ICAgIFxuICAgICAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSk7IFxuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBwcm9qZWN0c1tpXS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBpZihwcm9qZWN0c1tpXVtqXS5faWQgPT0gaWQpe1xuICAgICAgICAgICAgICAgIHByb2plY3RzW2ldW2pdLl9kYXRlID0gY2hhbmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cblxuZnVuY3Rpb24gZWRpdERvbmUoaWQsIGNoYW5nZSl7XG4gICAgbGV0IHByb2plY3RzID0gW11cbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcpKXsgICAgXG4gICAgICAgIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcpKTsgXG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHByb2plY3RzW2ldLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgIGlmKHByb2plY3RzW2ldW2pdLl9pZCA9PSBpZCl7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNbaV1bal0uX2RvbmUgPSBjaGFuZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoaWQpe1xuICAgIGxldCBwcm9qZWN0cyA9IFtdXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSl7ICAgIFxuICAgICAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSk7IFxuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBwcm9qZWN0c1tpXS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBpZihwcm9qZWN0c1tpXVtqXS5faWQgPT0gaWQpe1xuICAgICAgICAgICAgICAgIHByb2plY3RzW2ldLnNwbGljZShqLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvcihsZXQgaiA9IDA7IGogPCBwcm9qZWN0cy5sZW5ndGg7IGorKyl7XG4gICAgICAgIGlmKHByb2plY3RzW2pdLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShqLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFzazsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2NyZWF0ZVByb2plY3R9IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0RG9tRXZlbnRzJztcbmltcG9ydCB7Y3JlYXRlU2lkZWJhcn0gZnJvbSAnLi9tb2R1bGVzL3NpZGViYXInO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuL21vZHVsZXMvaGVhZGVyJztcbmltcG9ydCBsb2FkIGZyb20gJy4vbW9kdWxlcy9sb2FkJ1xuXG5sZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xuXG5tYWluQ29udGFpbmVyLmFwcGVuZChjcmVhdGVIZWFkZXIoKSwgY3JlYXRlU2lkZWJhcigpLCBjcmVhdGVQcm9qZWN0KCkpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZChtYWluQ29udGFpbmVyKTtcblxuYWRkX25vdF9jbGlja2VkKCk7XG5sb2FkKClcblxuXG5mdW5jdGlvbiBhZGRfbm90X2NsaWNrZWQoKXtcbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5kcm9wYnRuJykpIHtcbiAgICAgICAgICB2YXIgZHJvcGRvd25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyb3Bkb3duLWNvbnRlbnRcIik7XG4gICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRyb3Bkb3ducy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9wZW5Ecm9wZG93biA9IGRyb3Bkb3duc1tpXTtcbiAgICAgICAgICAgIGlmIChvcGVuRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcbiAgICAgICAgICAgICAgb3BlbkRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=