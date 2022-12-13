"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["index"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    width: 100%;\n    background-image: url('https://ugc.berkeley.edu/wp-content/uploads/2016/01/thunderstorm-3625405_1920-1536x864.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-color: #142354;\n    display: flex;\n    justify-content: center;\n    overflow: hidden;\n}\n\n@media only screen and (max-width: 750px) {\n    .mainContainer {width: 370px; height: 650px;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 320px; height: 110px; padding: 2px;}\n    .weatherGif{width: 320px;}\n    .hr3Container{width: 330px; font-size: 0.6em;}\n    .hrElem{width: 50px; padding: 5px; height: 105px;}\n    .hrElem img{width: 35px;}\n    .footer{width: 320px; height: 50px;}\n}\n\n@media only screen and (min-width: 750px) {\n    .mainContainer {width: 750px; height: 1000px;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 450px; height: 110px; padding: 15px;}\n    .weatherGif{width: 500px;}\n    .hr3Container{width: 600px; font-size: 0.7em;}\n    .hrElem{width: 90px; padding: 5px; height: 105px;}\n    .hrElem img{width: 40px;}\n    .footer{width: 700px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n\n@media only screen and (min-width: 1000px) {\n    .mainContainer {width: 1000px; height: 750px;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 450px; height: 100px; padding: 15px;}\n    .weatherGif{width: 400px;}\n    .hr3Container{width: 900px; font-size: 0.8em;}\n    .hrElem{width: 150px; padding: 5px; height: 105px;}\n    .hrElem img{width: 55px;}\n    .footer{width: 900px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n@media only screen and (min-width: 1400px) {\n    .mainContainer {width: 1400px; height: 750px;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 450px; height: 100px; padding: 15px;}\n    .weatherGif{width: 400px;}\n    .hr3Container{width: 900px; font-size: 0.8em;}\n    .hrElem{width: 150px; padding: 5px; height: 105px;}\n    .hrElem img{width: 55px;}\n    .footer{width: 900px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n@media only screen and (min-width: 2560px) {\n    .mainContainer {width: 2500px; height: 750px;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 450px; height: 100px; padding: 15px;}\n    .weatherGif{width: 400px;}\n    .hr3Container{width: 900px; font-size: 0.8em;}\n    .hrElem{width: 150px; padding: 5px; height: 105px;}\n    .hrElem img{width: 55px;}\n    .footer{width: 900px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n\n.mainContainer {\n    font-family: 'Courier New', Courier, monospace;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n\n\n}\n\n.searchBox {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n#location {\n    text-align: center;\n    border: 2px solid black;\n    border-radius: 5px;\n}\n\n.content {\n    display: grid;\n    background-color: aliceblue;\n    justify-content: space-between;\n    align-items: flex-start;\n    border: 2px solid black;\n    border-radius: 15px;\n}\n\n.locName {\n    grid-column: 1 / 3;\n    font-size: 2em;\n    font-weight: bold;\n    text-align: center;\n}\n\n.weatherGif {\n    border: 5px solid black;\n    border-radius: 15px;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nfooter div {\n    background-color: aliceblue;\n    border: 2px solid black;\n    border-radius: 5px;\n    text-align: center;\n\n}\n\n.hr3Container {\n    display: flex;\n    justify-content: center;\n    \n}\n\n.hrElem {\n    background-color: aliceblue;\n    border: 2px solid black;\n    border-radius: 10px;\n}\n\n\n\n.hrElem :first-child {\n    font-weight: bold;\n    text-align: center;\n    border-bottom: 2px solid black;\n}\n\n.hrElem img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border: 2px solid black;\n    border-radius: 50px;\n    background-color: steelblue;\n}\n\n.inlineIcon {\n    display: inline;\n    margin: 0 0.125em;\n    padding: 0;\n    vertical-align: baseline;\n    height: 0.8em;\n    width: 0.8em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    width: 100%;\n    background-image: url('https://ugc.berkeley.edu/wp-content/uploads/2016/01/thunderstorm-3625405_1920-1536x864.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-color: #142354;\n    display: flex;\n    justify-content: center;\n    overflow: hidden;\n}\n\n@media only screen and (max-width: 750px) {\n    .mainContainer {width: 370px; height: 650px;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 320px; height: 110px; padding: 2px;}\n    .weatherGif{width: 320px;}\n    .hr3Container{width: 330px; font-size: 0.6em;}\n    .hrElem{width: 50px; padding: 5px; height: 105px;}\n    .hrElem img{width: 35px;}\n    .footer{width: 320px; height: 50px;}\n}\n\n@media only screen and (min-width: 750px) {\n    .mainContainer {width: 750px; height: 1000px;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 450px; height: 110px; padding: 15px;}\n    .weatherGif{width: 500px;}\n    .hr3Container{width: 600px; font-size: 0.7em;}\n    .hrElem{width: 90px; padding: 5px; height: 105px;}\n    .hrElem img{width: 40px;}\n    .footer{width: 700px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n\n@media only screen and (min-width: 1000px) {\n    .mainContainer {width: 1000px; height: 750px;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 450px; height: 100px; padding: 15px;}\n    .weatherGif{width: 400px;}\n    .hr3Container{width: 900px; font-size: 0.8em;}\n    .hrElem{width: 150px; padding: 5px; height: 105px;}\n    .hrElem img{width: 55px;}\n    .footer{width: 900px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n@media only screen and (min-width: 1400px) {\n    .mainContainer {width: 1400px; height: 750px;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 450px; height: 100px; padding: 15px;}\n    .weatherGif{width: 400px;}\n    .hr3Container{width: 900px; font-size: 0.8em;}\n    .hrElem{width: 150px; padding: 5px; height: 105px;}\n    .hrElem img{width: 55px;}\n    .footer{width: 900px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n@media only screen and (min-width: 2560px) {\n    .mainContainer {width: 2500px; height: 750px;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 450px; height: 100px; padding: 15px;}\n    .weatherGif{width: 400px;}\n    .hr3Container{width: 900px; font-size: 0.8em;}\n    .hrElem{width: 150px; padding: 5px; height: 105px;}\n    .hrElem img{width: 55px;}\n    .footer{width: 900px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n\n.mainContainer {\n    font-family: 'Courier New', Courier, monospace;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n\n\n}\n\n.searchBox {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n#location {\n    text-align: center;\n    border: 2px solid black;\n    border-radius: 5px;\n}\n\n.content {\n    display: grid;\n    background-color: aliceblue;\n    justify-content: space-between;\n    align-items: flex-start;\n    border: 2px solid black;\n    border-radius: 15px;\n}\n\n.locName {\n    grid-column: 1 / 3;\n    font-size: 2em;\n    font-weight: bold;\n    text-align: center;\n}\n\n.weatherGif {\n    border: 5px solid black;\n    border-radius: 15px;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nfooter div {\n    background-color: aliceblue;\n    border: 2px solid black;\n    border-radius: 5px;\n    text-align: center;\n\n}\n\n.hr3Container {\n    display: flex;\n    justify-content: center;\n    \n}\n\n.hrElem {\n    background-color: aliceblue;\n    border: 2px solid black;\n    border-radius: 10px;\n}\n\n\n\n.hrElem :first-child {\n    font-weight: bold;\n    text-align: center;\n    border-bottom: 2px solid black;\n}\n\n.hrElem img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border: 2px solid black;\n    border-radius: 50px;\n    background-color: steelblue;\n}\n\n.inlineIcon {\n    display: inline;\n    margin: 0 0.125em;\n    padding: 0;\n    vertical-align: baseline;\n    height: 0.8em;\n    width: 0.8em;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./src/API calls/getWeather.js":
/*!*************************************!*\
  !*** ./src/API calls/getWeather.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWeather": () => (/* binding */ createWeather),
/* harmony export */   "createWeatherHourly": () => (/* binding */ createWeatherHourly),
/* harmony export */   "getLocData": () => (/* binding */ getLocData),
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData),
/* harmony export */   "getWeatherGif": () => (/* binding */ getWeatherGif),
/* harmony export */   "weatherProcess": () => (/* binding */ weatherProcess)
/* harmony export */ });
let key = 'f311acbde5084d948501ed5874b9b20e';
let unit = 'metric';

//API calls

async function getLocData(loc) {
//gets longitude and latitude of string name   
    const locURL = `https://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=1&appid=${key}`;
    try {
        const response = await fetch(locURL, {mode: 'cors'});
        const locData = await response.json();
        return locData;
    } catch (error) {
        console.log(error);
    }

}

async function getWeatherData(lat, lon) {

    try {
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`
        const response = await fetch(weatherURL, {mode: 'cors'});
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.log(error);
    }
}

async function getWeatherGif(weather) {
    try {
        const giphyKey = 'mPks7xOqmUh3hb02SSufYq0vY6EOv0OA';
        const giphyURL = `https://api.giphy.com/v1/gifs/search?key=${giphyKey}&q=${weather}&limit=1&offset=0&rating=g&lang=en`;
        const response = await fetch(giphyURL, {mode: 'cors'});
        const weatherGif = await response.json();
        return weatherGif.data[0].images.original.url;
    } catch (error) {
        console.log(error)
    }
}

async function getHourlyForecast(lat, lon) {
    try {
        const hourlyUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${unit}&cnt=5`;
        const response = await fetch(hourlyUrl, {mode: 'cors'});
        const hourlyWeather = await response.json();
        return hourlyWeather;
    } catch (error) {
        console.log(error)
    }
}

//data processing
function weatherProcess(weatherData) {
    let name = weatherData.name;
    let temp = weatherData.main.temp;
    let feelsLike = weatherData.main.feels_like;
    let weatherType = weatherData.weather[0].main;
    let windSpeed = weatherData.wind.speed;

    return { name, temp, feelsLike, weatherType, windSpeed };
}

function locProcess(loc) {
    let lat = loc[0].lat;
    let lon = loc[0].lon;
    return { lat, lon };
}

async function hourlyProcess(hr3Data) {
    let hr3Array = [];

    for (let i = 0; i < hr3Data.list.length; i++) {

        const element = hr3Data.list[i];
        const time = element.dt_txt.slice(11);
        const temp = element.main.temp;
        const feelsLike = element.main.feels_like;
        const weatherIcon = element.weather[0].icon;

        const weatherObj = {time, temp, feelsLike, weatherIcon};
        hr3Array.push(weatherObj);
    }
return hr3Array;
}


// init
async function createWeather(locName) {
    const locData = await getLocData(locName);
    let loc =  locProcess(locData);
    let weatherData = await getWeatherData(loc.lat, loc.lon);
    const weatherProcessed = weatherProcess(weatherData);
    return weatherProcessed;
    }

 

async function createWeatherHourly(locName) {
    const loc = await getLocData(locName);
    const latlon = locProcess(loc);
    const response = await getHourlyForecast(latlon.lat, latlon.lon);
    const processedHourly = await hourlyProcess(response);
    console.log(response);
    return processedHourly;
}


/***/ }),

/***/ "./src/generateDOMelem/createDom.js":
/*!******************************************!*\
  !*** ./src/generateDOMelem/createDom.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create3HrElem": () => (/* binding */ create3HrElem),
/* harmony export */   "createCurrentContent": () => (/* binding */ createCurrentContent),
/* harmony export */   "initDocument": () => (/* binding */ initDocument),
/* harmony export */   "populateFooter": () => (/* binding */ populateFooter),
/* harmony export */   "removeChildElementsh3e": () => (/* binding */ removeChildElementsh3e),
/* harmony export */   "setWeatherGif": () => (/* binding */ setWeatherGif)
/* harmony export */ });
/* harmony import */ var _assets_icons_device_thermostat_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/device_thermostat_FILL0_wght400_GRAD0_opsz48.svg */ "./src/assets/icons/device_thermostat_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _assets_icons_dew_point_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/dew_point_FILL0_wght400_GRAD0_opsz48.svg */ "./src/assets/icons/dew_point_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _assets_icons_clear_day_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/clear_day_FILL0_wght400_GRAD0_opsz48.svg */ "./src/assets/icons/clear_day_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _assets_icons_air_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/air_FILL0_wght400_GRAD0_opsz48.svg */ "./src/assets/icons/air_FILL0_wght400_GRAD0_opsz48.svg");







function initDocument() {
    const mainContainer = document.createElement('div');
    mainContainer.className = 'mainContainer';
    const searchBox = document.createElement('div');
    searchBox.className = 'searchBox';
    const content = document.createElement('div');
    content.className = 'content';
    const weatherGif = document.createElement('img');
    weatherGif.className = 'weatherGif';
    const hr3Container = document.createElement('div');
    hr3Container.className = 'hr3Container';
    const footer = document.createElement('footer')
    footer.className = 'footer';
    

    mainContainer.appendChild(searchBox);
    mainContainer.appendChild(content);
    mainContainer.appendChild(weatherGif);
    mainContainer.appendChild(hr3Container);
    mainContainer.appendChild(footer);
    document.body.appendChild(mainContainer);

    const locInput = document.createElement('input');
    locInput.type = 'text';
    locInput.name = 'location';
    locInput.id = 'location';

    const searchBtn = document.createElement('button');
    searchBtn.id = 'searchBtn';
    searchBtn.textContent = 'Search';

    searchBox.appendChild(locInput);
    searchBox.appendChild(searchBtn);

    const locName = document.createElement('div');
    locName.className = 'locName';

    const locTemp = document.createElement('div');
    locTemp.className = 'locTemp';

    const weatherType = document.createElement('div');
    weatherType.className = 'weatherType';

    const feelsLike = document.createElement('div');
    feelsLike.className = 'feelsLike';

    const windSpeed = document.createElement('div');
    windSpeed.className = 'windSpeed';

    content.appendChild(locName);
    content.appendChild(locTemp);
    content.appendChild(weatherType);
    content.appendChild(feelsLike);
    content.appendChild(windSpeed);

    const locTempIcon = document.createElement('img');
    locTempIcon.className = 'inlineIcon';
    locTempIcon.src = _assets_icons_device_thermostat_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_0__;
    const locTempText = document.createElement('span');
    locTempText.className = 'locTempText';
    locTemp.appendChild(locTempIcon);
    locTemp.appendChild(locTempText);

    const feelsLikeIcon = document.createElement('img');
    feelsLikeIcon.className = 'inlineIcon';
    feelsLikeIcon.src = _assets_icons_dew_point_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__;
    const feelsLikeText = document.createElement('span');
    feelsLikeText.className = 'feelsLikeText';
    feelsLike.appendChild(feelsLikeIcon);
    feelsLike.appendChild(feelsLikeText);

    const weatherTypeIcon = document.createElement('img');
    weatherTypeIcon.className = 'inlineIcon';
    weatherTypeIcon.src = _assets_icons_clear_day_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__;
    const weatherTypeText = document.createElement('span');
    weatherTypeText.className = 'weatherTypeText';
    weatherType.appendChild(weatherTypeIcon);
    weatherType.appendChild(weatherTypeText);

    const windSpeedIcon = document.createElement('img');
    windSpeedIcon.className = 'inlineIcon';
    windSpeedIcon.src = _assets_icons_air_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_3__;
    const windSpeedText = document.createElement('span');
    windSpeedText.className = 'windSpeedText';
    windSpeed.appendChild(windSpeedIcon);
    windSpeed.appendChild(windSpeedText);



    const city1 = document.createElement('div');
    city1.className = 'city1';

    const city2 = document.createElement('div');
    city2.className = 'city2';

    const city3 = document.createElement('div');
    city3.className = 'city3';

    const city4 = document.createElement('div');
    city4.className = 'city4';

    footer.appendChild(city1);
    footer.appendChild(city2);
    footer.appendChild(city3);
    footer.appendChild(city4);
};

function create3HrElem(hourlyWeatherObj) {
    console.log(hourlyWeatherObj);
    const container = document.querySelector('.hr3Container');
    const hrElem = document.createElement('div');
    hrElem.className = 'hrElem';
    container.appendChild(hrElem);

    const locName = document.createElement('div');
    locName.textContent = hourlyWeatherObj.time;

    const locTemp = document.createElement('div');
    locTemp.textContent = 'Temperature: ' + hourlyWeatherObj.temp;

    const feelsLike = document.createElement('div');
    feelsLike.textContent = 'Feels like: ' + hourlyWeatherObj.feelsLike;

    const weatherType = document.createElement('img');
    weatherType.src = `http://openweathermap.org/img/w/${hourlyWeatherObj.weatherIcon}.png`;

    hrElem.appendChild(locName);
    hrElem.appendChild(locTemp);
    hrElem.appendChild(feelsLike);
    hrElem.appendChild(weatherType);
}

function setWeatherGif(gifUrl) {
    document.querySelector('.weatherGif').src = gifUrl;
}

function removeChildElementsh3e() {
    const h3e = document.querySelector('.hr3Container');
    const length = h3e.children.length;

    for (let index = 0; index < length; index++) {
        h3e.removeChild(h3e.firstChild);
    }

}

function createCurrentContent(weatherObj) {

    const locName = document.querySelector('.locName');
    const locTempText = document.querySelector('.locTempText');
    const feelsLikeText = document.querySelector('.feelsLikeText')
    const weatherTypeText = document.querySelector('.weatherTypeText');
    const windSpeedText = document.querySelector('.windSpeedText');

    locName.textContent = weatherObj.name;
    locTempText.textContent = 'Temperature: ' + weatherObj.temp + ' °C';
    feelsLikeText.textContent = 'Feels like: ' + weatherObj.feelsLike + ' °C';
    weatherTypeText.textContent = 'Weather: ' + weatherObj.weatherType;
    windSpeedText.textContent = weatherObj.windSpeed + ' m/s';




}

function populateFooter(city1, city2, city3, city4) {
    const elemCity1 = document.querySelector('.city1');
    const elemCity2 = document.querySelector('.city2');
    const elemCity3 = document.querySelector('.city3');
    const elemCity4 = document.querySelector('.city4');

    elemCity1.textContent = city1.name + ': ' + city1.temp + '°C';
    elemCity1.style.backgroundColor = returnColor(city1.temp);

    elemCity2.textContent = city2.name + ': ' + city2.temp + '°C';
    elemCity2.style.backgroundColor = returnColor(city2.temp);

    elemCity3.textContent = city3.name + ': ' + city3.temp + '°C';
    elemCity3.style.backgroundColor = returnColor(city3.temp);

    elemCity4.textContent = city4.name + ': ' + city4.temp + '°C';
    elemCity4.style.backgroundColor = returnColor(city4.temp);
}

function returnColor(value) {
    if (value <= -1) {
        return 'skyblue';
    } else if (value >= 1 && value <= 10) {
        return 'greenyellow';
    } else if (value >= 11 && value <= 29) {
        return 'yellow';
    } else if (value >= 30) {
        return 'red';
    }
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API calls/getWeather */ "./src/API calls/getWeather.js");
/* harmony import */ var _generateDOMelem_createDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateDOMelem/createDom */ "./src/generateDOMelem/createDom.js");




let cityName = 'oslo';

function addEvents() {
    const btn = document.querySelector('#searchBtn');
    const input = document.querySelector('#location');

btn.addEventListener('click', () => {
    cityName = input.value;
    populateDom(cityName);
});

input.addEventListener('keypress', (event) => {
    if(event.key === "Enter") {
        event.preventDefault();
        btn.click();
    }
});
}

async function populateDom(cityName) {
    const weatherObj = await (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.createWeather)(cityName);
    (0,_generateDOMelem_createDom__WEBPACK_IMPORTED_MODULE_2__.createCurrentContent)(weatherObj);
    const weatherGif = await (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.getWeatherGif)(weatherObj.weatherType);
    (0,_generateDOMelem_createDom__WEBPACK_IMPORTED_MODULE_2__.setWeatherGif)(weatherGif);
    (0,_generateDOMelem_createDom__WEBPACK_IMPORTED_MODULE_2__.removeChildElementsh3e)();
    const hourlyWeather = await (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.createWeatherHourly)(cityName);
    for (let index = 0; index < hourlyWeather.length; index++) {
        const element = hourlyWeather[index];
    (0,_generateDOMelem_createDom__WEBPACK_IMPORTED_MODULE_2__.create3HrElem)(element);
    }
    console.log(hourlyWeather);

}

async function footerData() {
    try {
    let loc = await (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.getLocData)('Oslo');
    let cityData = await (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(loc[0].lat, loc[0].lon);
    const city1 = (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.weatherProcess)(cityData);

     loc = await (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.getLocData)('London');
     cityData = await (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(loc[0].lat, loc[0].lon);
    const city2 = (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.weatherProcess)(cityData);

     loc = await (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.getLocData)('Madrid');
     cityData = await (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(loc[0].lat, loc[0].lon);
    const city3 = (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.weatherProcess)(cityData);

     loc = await (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.getLocData)('Orlando');
     cityData = await (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(loc[0].lat, loc[0].lon);
    const city4 = (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.weatherProcess)(cityData);

    (0,_generateDOMelem_createDom__WEBPACK_IMPORTED_MODULE_2__.populateFooter)(city1, city2, city3, city4);

    } catch (error) {
        console.log(error);
    }
    
}


(0,_generateDOMelem_createDom__WEBPACK_IMPORTED_MODULE_2__.initDocument)();
populateDom(cityName);
footerData();
addEvents();


/***/ }),

/***/ "./src/assets/icons/air_FILL0_wght400_GRAD0_opsz48.svg":
/*!*************************************************************!*\
  !*** ./src/assets/icons/air_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97db192e1b4a2b420948.svg";

/***/ }),

/***/ "./src/assets/icons/clear_day_FILL0_wght400_GRAD0_opsz48.svg":
/*!*******************************************************************!*\
  !*** ./src/assets/icons/clear_day_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2bf239bdf87133ff8676.svg";

/***/ }),

/***/ "./src/assets/icons/device_thermostat_FILL0_wght400_GRAD0_opsz48.svg":
/*!***************************************************************************!*\
  !*** ./src/assets/icons/device_thermostat_FILL0_wght400_GRAD0_opsz48.svg ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d007da899751122cacaf.svg";

/***/ }),

/***/ "./src/assets/icons/dew_point_FILL0_wght400_GRAD0_opsz48.svg":
/*!*******************************************************************!*\
  !*** ./src/assets/icons/dew_point_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc9ca44990f840e2136a.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBQXdCLDhCQUE4QjtBQUN0RDtBQUNBLElBQUkseUVBQWE7QUFDakI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGlFQUFVO0FBQzlCLHlCQUF5QixxRUFBYztBQUN2QyxrQkFBa0IscUVBQWM7O0FBRWhDLGlCQUFpQixpRUFBVTtBQUMzQixzQkFBc0IscUVBQWM7QUFDcEMsa0JBQWtCLHFFQUFjOztBQUVoQyxpQkFBaUIsaUVBQVU7QUFDM0Isc0JBQXNCLHFFQUFjO0FBQ3BDLGtCQUFrQixxRUFBYzs7QUFFaEMsaUJBQWlCLGlFQUFVO0FBQzNCLHNCQUFzQixxRUFBYztBQUNwQyxrQkFBa0IscUVBQWM7O0FBRWhDLElBQUksMEVBQWM7O0FBRWxCLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esd0VBQVk7QUFDWjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvQVBJIGNhbGxzL2dldFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZW5lcmF0ZURPTWVsZW0vY3JlYXRlRG9tLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly91Z2MuYmVya2VsZXkuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAxL3RodW5kZXJzdG9ybS0zNjI1NDA1XzE5MjAtMTUzNng4NjQuanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDIzNTQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgIC5tYWluQ29udGFpbmVyIHt3aWR0aDogMzcwcHg7IGhlaWdodDogNjUwcHg7fVxcbiAgICAuc2VhcmNoQm94IHt3aWR0aDogNTBweDsgaGVpZ2h0OiA1MHB4O31cXG4gICAgYnV0dG9uIHt3aWR0aDogMTAwcHg7IGhlaWdodDogMzVweDsgbWFyZ2luLXRvcDogNXB4O31cXG4gICAgLmNvbnRlbnQge3dpZHRoOiAzMjBweDsgaGVpZ2h0OiAxMTBweDsgcGFkZGluZzogMnB4O31cXG4gICAgLndlYXRoZXJHaWZ7d2lkdGg6IDMyMHB4O31cXG4gICAgLmhyM0NvbnRhaW5lcnt3aWR0aDogMzMwcHg7IGZvbnQtc2l6ZTogMC42ZW07fVxcbiAgICAuaHJFbGVte3dpZHRoOiA1MHB4OyBwYWRkaW5nOiA1cHg7IGhlaWdodDogMTA1cHg7fVxcbiAgICAuaHJFbGVtIGltZ3t3aWR0aDogMzVweDt9XFxuICAgIC5mb290ZXJ7d2lkdGg6IDMyMHB4OyBoZWlnaHQ6IDUwcHg7fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XFxuICAgIC5tYWluQ29udGFpbmVyIHt3aWR0aDogNzUwcHg7IGhlaWdodDogMTAwMHB4O31cXG4gICAgLnNlYXJjaEJveCB7d2lkdGg6IDUwcHg7IGhlaWdodDogNTBweDt9XFxuICAgIGJ1dHRvbiB7d2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDM1cHg7IG1hcmdpbi10b3A6IDVweDt9XFxuICAgIC5jb250ZW50IHt3aWR0aDogNDUwcHg7IGhlaWdodDogMTEwcHg7IHBhZGRpbmc6IDE1cHg7fVxcbiAgICAud2VhdGhlckdpZnt3aWR0aDogNTAwcHg7fVxcbiAgICAuaHIzQ29udGFpbmVye3dpZHRoOiA2MDBweDsgZm9udC1zaXplOiAwLjdlbTt9XFxuICAgIC5ockVsZW17d2lkdGg6IDkwcHg7IHBhZGRpbmc6IDVweDsgaGVpZ2h0OiAxMDVweDt9XFxuICAgIC5ockVsZW0gaW1ne3dpZHRoOiA0MHB4O31cXG4gICAgLmZvb3Rlcnt3aWR0aDogNzAwcHg7IGhlaWdodDogNDBweDt9XFxuICAgIC5mb290ZXIgZGl2e3BhZGRpbmc6IDEwcHg7fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgICAubWFpbkNvbnRhaW5lciB7d2lkdGg6IDEwMDBweDsgaGVpZ2h0OiA3NTBweDt9XFxuICAgIC5zZWFyY2hCb3gge3dpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7fVxcbiAgICBidXR0b24ge3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAzNXB4OyBtYXJnaW4tdG9wOiA1cHg7fVxcbiAgICAuY29udGVudCB7d2lkdGg6IDQ1MHB4OyBoZWlnaHQ6IDEwMHB4OyBwYWRkaW5nOiAxNXB4O31cXG4gICAgLndlYXRoZXJHaWZ7d2lkdGg6IDQwMHB4O31cXG4gICAgLmhyM0NvbnRhaW5lcnt3aWR0aDogOTAwcHg7IGZvbnQtc2l6ZTogMC44ZW07fVxcbiAgICAuaHJFbGVte3dpZHRoOiAxNTBweDsgcGFkZGluZzogNXB4OyBoZWlnaHQ6IDEwNXB4O31cXG4gICAgLmhyRWxlbSBpbWd7d2lkdGg6IDU1cHg7fVxcbiAgICAuZm9vdGVye3dpZHRoOiA5MDBweDsgaGVpZ2h0OiA0MHB4O31cXG4gICAgLmZvb3RlciBkaXZ7cGFkZGluZzogMTBweDt9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XFxuICAgIC5tYWluQ29udGFpbmVyIHt3aWR0aDogMTQwMHB4OyBoZWlnaHQ6IDc1MHB4O31cXG4gICAgLnNlYXJjaEJveCB7d2lkdGg6IDUwcHg7IGhlaWdodDogNTBweDt9XFxuICAgIGJ1dHRvbiB7d2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDM1cHg7IG1hcmdpbi10b3A6IDVweDt9XFxuICAgIC5jb250ZW50IHt3aWR0aDogNDUwcHg7IGhlaWdodDogMTAwcHg7IHBhZGRpbmc6IDE1cHg7fVxcbiAgICAud2VhdGhlckdpZnt3aWR0aDogNDAwcHg7fVxcbiAgICAuaHIzQ29udGFpbmVye3dpZHRoOiA5MDBweDsgZm9udC1zaXplOiAwLjhlbTt9XFxuICAgIC5ockVsZW17d2lkdGg6IDE1MHB4OyBwYWRkaW5nOiA1cHg7IGhlaWdodDogMTA1cHg7fVxcbiAgICAuaHJFbGVtIGltZ3t3aWR0aDogNTVweDt9XFxuICAgIC5mb290ZXJ7d2lkdGg6IDkwMHB4OyBoZWlnaHQ6IDQwcHg7fVxcbiAgICAuZm9vdGVyIGRpdntwYWRkaW5nOiAxMHB4O31cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNTYwcHgpIHtcXG4gICAgLm1haW5Db250YWluZXIge3dpZHRoOiAyNTAwcHg7IGhlaWdodDogNzUwcHg7fVxcbiAgICAuc2VhcmNoQm94IHt3aWR0aDogNTBweDsgaGVpZ2h0OiA1MHB4O31cXG4gICAgYnV0dG9uIHt3aWR0aDogMTAwcHg7IGhlaWdodDogMzVweDsgbWFyZ2luLXRvcDogNXB4O31cXG4gICAgLmNvbnRlbnQge3dpZHRoOiA0NTBweDsgaGVpZ2h0OiAxMDBweDsgcGFkZGluZzogMTVweDt9XFxuICAgIC53ZWF0aGVyR2lme3dpZHRoOiA0MDBweDt9XFxuICAgIC5ocjNDb250YWluZXJ7d2lkdGg6IDkwMHB4OyBmb250LXNpemU6IDAuOGVtO31cXG4gICAgLmhyRWxlbXt3aWR0aDogMTUwcHg7IHBhZGRpbmc6IDVweDsgaGVpZ2h0OiAxMDVweDt9XFxuICAgIC5ockVsZW0gaW1ne3dpZHRoOiA1NXB4O31cXG4gICAgLmZvb3Rlcnt3aWR0aDogOTAwcHg7IGhlaWdodDogNDBweDt9XFxuICAgIC5mb290ZXIgZGl2e3BhZGRpbmc6IDEwcHg7fVxcbn1cXG5cXG4ubWFpbkNvbnRhaW5lciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG5cXG59XFxuXFxuLnNlYXJjaEJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbiNsb2NhdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4ubG9jTmFtZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyR2lmIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5ocjNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5ockVsZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cXG5cXG4uaHJFbGVtIDpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmhyRWxlbSBpbWcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG59XFxuXFxuLmlubGluZUljb24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIG1hcmdpbjogMCAwLjEyNWVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAgIGhlaWdodDogMC44ZW07XFxuICAgIHdpZHRoOiAwLjhlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxtSEFBbUg7SUFDbkgsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0IsWUFBWSxFQUFFLGFBQWEsQ0FBQztJQUM1QyxZQUFZLFdBQVcsRUFBRSxZQUFZLENBQUM7SUFDdEMsUUFBUSxZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQztJQUNwRCxVQUFVLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDO0lBQ3BELFlBQVksWUFBWSxDQUFDO0lBQ3pCLGNBQWMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO0lBQzdDLFFBQVEsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUM7SUFDakQsWUFBWSxXQUFXLENBQUM7SUFDeEIsUUFBUSxZQUFZLEVBQUUsWUFBWSxDQUFDO0FBQ3ZDOztBQUVBO0lBQ0ksZ0JBQWdCLFlBQVksRUFBRSxjQUFjLENBQUM7SUFDN0MsWUFBWSxXQUFXLEVBQUUsWUFBWSxDQUFDO0lBQ3RDLFFBQVEsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUM7SUFDcEQsVUFBVSxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztJQUNyRCxZQUFZLFlBQVksQ0FBQztJQUN6QixjQUFjLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztJQUM3QyxRQUFRLFdBQVcsRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDO0lBQ2pELFlBQVksV0FBVyxDQUFDO0lBQ3hCLFFBQVEsWUFBWSxFQUFFLFlBQVksQ0FBQztJQUNuQyxZQUFZLGFBQWEsQ0FBQztBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQixhQUFhLEVBQUUsYUFBYSxDQUFDO0lBQzdDLFlBQVksV0FBVyxFQUFFLFlBQVksQ0FBQztJQUN0QyxRQUFRLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO0lBQ3BELFVBQVUsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7SUFDckQsWUFBWSxZQUFZLENBQUM7SUFDekIsY0FBYyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7SUFDN0MsUUFBUSxZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQztJQUNsRCxZQUFZLFdBQVcsQ0FBQztJQUN4QixRQUFRLFlBQVksRUFBRSxZQUFZLENBQUM7SUFDbkMsWUFBWSxhQUFhLENBQUM7QUFDOUI7QUFDQTtJQUNJLGdCQUFnQixhQUFhLEVBQUUsYUFBYSxDQUFDO0lBQzdDLFlBQVksV0FBVyxFQUFFLFlBQVksQ0FBQztJQUN0QyxRQUFRLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO0lBQ3BELFVBQVUsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7SUFDckQsWUFBWSxZQUFZLENBQUM7SUFDekIsY0FBYyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7SUFDN0MsUUFBUSxZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQztJQUNsRCxZQUFZLFdBQVcsQ0FBQztJQUN4QixRQUFRLFlBQVksRUFBRSxZQUFZLENBQUM7SUFDbkMsWUFBWSxhQUFhLENBQUM7QUFDOUI7QUFDQTtJQUNJLGdCQUFnQixhQUFhLEVBQUUsYUFBYSxDQUFDO0lBQzdDLFlBQVksV0FBVyxFQUFFLFlBQVksQ0FBQztJQUN0QyxRQUFRLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO0lBQ3BELFVBQVUsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7SUFDckQsWUFBWSxZQUFZLENBQUM7SUFDekIsY0FBYyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7SUFDN0MsUUFBUSxZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQztJQUNsRCxZQUFZLFdBQVcsQ0FBQztJQUN4QixRQUFRLFlBQVksRUFBRSxZQUFZLENBQUM7SUFDbkMsWUFBWSxhQUFhLENBQUM7QUFDOUI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsOEJBQThCOzs7QUFHbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7Ozs7QUFJQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vdWdjLmJlcmtlbGV5LmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wMS90aHVuZGVyc3Rvcm0tMzYyNTQwNV8xOTIwLTE1MzZ4ODY0LmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyMzU0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICAubWFpbkNvbnRhaW5lciB7d2lkdGg6IDM3MHB4OyBoZWlnaHQ6IDY1MHB4O31cXG4gICAgLnNlYXJjaEJveCB7d2lkdGg6IDUwcHg7IGhlaWdodDogNTBweDt9XFxuICAgIGJ1dHRvbiB7d2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDM1cHg7IG1hcmdpbi10b3A6IDVweDt9XFxuICAgIC5jb250ZW50IHt3aWR0aDogMzIwcHg7IGhlaWdodDogMTEwcHg7IHBhZGRpbmc6IDJweDt9XFxuICAgIC53ZWF0aGVyR2lme3dpZHRoOiAzMjBweDt9XFxuICAgIC5ocjNDb250YWluZXJ7d2lkdGg6IDMzMHB4OyBmb250LXNpemU6IDAuNmVtO31cXG4gICAgLmhyRWxlbXt3aWR0aDogNTBweDsgcGFkZGluZzogNXB4OyBoZWlnaHQ6IDEwNXB4O31cXG4gICAgLmhyRWxlbSBpbWd7d2lkdGg6IDM1cHg7fVxcbiAgICAuZm9vdGVye3dpZHRoOiAzMjBweDsgaGVpZ2h0OiA1MHB4O31cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xcbiAgICAubWFpbkNvbnRhaW5lciB7d2lkdGg6IDc1MHB4OyBoZWlnaHQ6IDEwMDBweDt9XFxuICAgIC5zZWFyY2hCb3gge3dpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7fVxcbiAgICBidXR0b24ge3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAzNXB4OyBtYXJnaW4tdG9wOiA1cHg7fVxcbiAgICAuY29udGVudCB7d2lkdGg6IDQ1MHB4OyBoZWlnaHQ6IDExMHB4OyBwYWRkaW5nOiAxNXB4O31cXG4gICAgLndlYXRoZXJHaWZ7d2lkdGg6IDUwMHB4O31cXG4gICAgLmhyM0NvbnRhaW5lcnt3aWR0aDogNjAwcHg7IGZvbnQtc2l6ZTogMC43ZW07fVxcbiAgICAuaHJFbGVte3dpZHRoOiA5MHB4OyBwYWRkaW5nOiA1cHg7IGhlaWdodDogMTA1cHg7fVxcbiAgICAuaHJFbGVtIGltZ3t3aWR0aDogNDBweDt9XFxuICAgIC5mb290ZXJ7d2lkdGg6IDcwMHB4OyBoZWlnaHQ6IDQwcHg7fVxcbiAgICAuZm9vdGVyIGRpdntwYWRkaW5nOiAxMHB4O31cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLm1haW5Db250YWluZXIge3dpZHRoOiAxMDAwcHg7IGhlaWdodDogNzUwcHg7fVxcbiAgICAuc2VhcmNoQm94IHt3aWR0aDogNTBweDsgaGVpZ2h0OiA1MHB4O31cXG4gICAgYnV0dG9uIHt3aWR0aDogMTAwcHg7IGhlaWdodDogMzVweDsgbWFyZ2luLXRvcDogNXB4O31cXG4gICAgLmNvbnRlbnQge3dpZHRoOiA0NTBweDsgaGVpZ2h0OiAxMDBweDsgcGFkZGluZzogMTVweDt9XFxuICAgIC53ZWF0aGVyR2lme3dpZHRoOiA0MDBweDt9XFxuICAgIC5ocjNDb250YWluZXJ7d2lkdGg6IDkwMHB4OyBmb250LXNpemU6IDAuOGVtO31cXG4gICAgLmhyRWxlbXt3aWR0aDogMTUwcHg7IHBhZGRpbmc6IDVweDsgaGVpZ2h0OiAxMDVweDt9XFxuICAgIC5ockVsZW0gaW1ne3dpZHRoOiA1NXB4O31cXG4gICAgLmZvb3Rlcnt3aWR0aDogOTAwcHg7IGhlaWdodDogNDBweDt9XFxuICAgIC5mb290ZXIgZGl2e3BhZGRpbmc6IDEwcHg7fVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xcbiAgICAubWFpbkNvbnRhaW5lciB7d2lkdGg6IDE0MDBweDsgaGVpZ2h0OiA3NTBweDt9XFxuICAgIC5zZWFyY2hCb3gge3dpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7fVxcbiAgICBidXR0b24ge3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAzNXB4OyBtYXJnaW4tdG9wOiA1cHg7fVxcbiAgICAuY29udGVudCB7d2lkdGg6IDQ1MHB4OyBoZWlnaHQ6IDEwMHB4OyBwYWRkaW5nOiAxNXB4O31cXG4gICAgLndlYXRoZXJHaWZ7d2lkdGg6IDQwMHB4O31cXG4gICAgLmhyM0NvbnRhaW5lcnt3aWR0aDogOTAwcHg7IGZvbnQtc2l6ZTogMC44ZW07fVxcbiAgICAuaHJFbGVte3dpZHRoOiAxNTBweDsgcGFkZGluZzogNXB4OyBoZWlnaHQ6IDEwNXB4O31cXG4gICAgLmhyRWxlbSBpbWd7d2lkdGg6IDU1cHg7fVxcbiAgICAuZm9vdGVye3dpZHRoOiA5MDBweDsgaGVpZ2h0OiA0MHB4O31cXG4gICAgLmZvb3RlciBkaXZ7cGFkZGluZzogMTBweDt9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjU2MHB4KSB7XFxuICAgIC5tYWluQ29udGFpbmVyIHt3aWR0aDogMjUwMHB4OyBoZWlnaHQ6IDc1MHB4O31cXG4gICAgLnNlYXJjaEJveCB7d2lkdGg6IDUwcHg7IGhlaWdodDogNTBweDt9XFxuICAgIGJ1dHRvbiB7d2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDM1cHg7IG1hcmdpbi10b3A6IDVweDt9XFxuICAgIC5jb250ZW50IHt3aWR0aDogNDUwcHg7IGhlaWdodDogMTAwcHg7IHBhZGRpbmc6IDE1cHg7fVxcbiAgICAud2VhdGhlckdpZnt3aWR0aDogNDAwcHg7fVxcbiAgICAuaHIzQ29udGFpbmVye3dpZHRoOiA5MDBweDsgZm9udC1zaXplOiAwLjhlbTt9XFxuICAgIC5ockVsZW17d2lkdGg6IDE1MHB4OyBwYWRkaW5nOiA1cHg7IGhlaWdodDogMTA1cHg7fVxcbiAgICAuaHJFbGVtIGltZ3t3aWR0aDogNTVweDt9XFxuICAgIC5mb290ZXJ7d2lkdGg6IDkwMHB4OyBoZWlnaHQ6IDQwcHg7fVxcbiAgICAuZm9vdGVyIGRpdntwYWRkaW5nOiAxMHB4O31cXG59XFxuXFxuLm1haW5Db250YWluZXIge1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuXFxufVxcblxcbi5zZWFyY2hCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4jbG9jYXRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLmxvY05hbWUge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlckdpZiB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIGRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4uaHIzQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4uaHJFbGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuXFxuXFxuLmhyRWxlbSA6Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ockVsZW0gaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxufVxcblxcbi5pbmxpbmVJY29uIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBtYXJnaW46IDAgMC4xMjVlbTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgICBoZWlnaHQ6IDAuOGVtO1xcbiAgICB3aWR0aDogMC44ZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImxldCBrZXkgPSAnZjMxMWFjYmRlNTA4NGQ5NDg1MDFlZDU4NzRiOWIyMGUnO1xubGV0IHVuaXQgPSAnbWV0cmljJztcblxuLy9BUEkgY2FsbHNcblxuYXN5bmMgZnVuY3Rpb24gZ2V0TG9jRGF0YShsb2MpIHtcbi8vZ2V0cyBsb25naXR1ZGUgYW5kIGxhdGl0dWRlIG9mIHN0cmluZyBuYW1lICAgXG4gICAgY29uc3QgbG9jVVJMID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jfSZsaW1pdD0xJmFwcGlkPSR7a2V5fWA7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsb2NVUkwsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgY29uc3QgbG9jRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGxvY0RhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cblxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsYXQsIGxvbikge1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgd2VhdGhlclVSTCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mdW5pdHM9JHt1bml0fSZhcHBpZD0ke2tleX1gXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2VhdGhlclVSTCwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJHaWYod2VhdGhlcikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGdpcGh5S2V5ID0gJ21Qa3M3eE9xbVVoM2hiMDJTU3VmWXEwdlk2RU92ME9BJztcbiAgICAgICAgY29uc3QgZ2lwaHlVUkwgPSBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvc2VhcmNoP2tleT0ke2dpcGh5S2V5fSZxPSR7d2VhdGhlcn0mbGltaXQ9MSZvZmZzZXQ9MCZyYXRpbmc9ZyZsYW5nPWVuYDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChnaXBoeVVSTCwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICBjb25zdCB3ZWF0aGVyR2lmID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gd2VhdGhlckdpZi5kYXRhWzBdLmltYWdlcy5vcmlnaW5hbC51cmw7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRIb3VybHlGb3JlY2FzdChsYXQsIGxvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGhvdXJseVVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPSR7a2V5fSZ1bml0cz0ke3VuaXR9JmNudD01YDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChob3VybHlVcmwsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgY29uc3QgaG91cmx5V2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGhvdXJseVdlYXRoZXI7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxufVxuXG4vL2RhdGEgcHJvY2Vzc2luZ1xuZnVuY3Rpb24gd2VhdGhlclByb2Nlc3Mod2VhdGhlckRhdGEpIHtcbiAgICBsZXQgbmFtZSA9IHdlYXRoZXJEYXRhLm5hbWU7XG4gICAgbGV0IHRlbXAgPSB3ZWF0aGVyRGF0YS5tYWluLnRlbXA7XG4gICAgbGV0IGZlZWxzTGlrZSA9IHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZTtcbiAgICBsZXQgd2VhdGhlclR5cGUgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gICAgbGV0IHdpbmRTcGVlZCA9IHdlYXRoZXJEYXRhLndpbmQuc3BlZWQ7XG5cbiAgICByZXR1cm4geyBuYW1lLCB0ZW1wLCBmZWVsc0xpa2UsIHdlYXRoZXJUeXBlLCB3aW5kU3BlZWQgfTtcbn1cblxuZnVuY3Rpb24gbG9jUHJvY2Vzcyhsb2MpIHtcbiAgICBsZXQgbGF0ID0gbG9jWzBdLmxhdDtcbiAgICBsZXQgbG9uID0gbG9jWzBdLmxvbjtcbiAgICByZXR1cm4geyBsYXQsIGxvbiB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBob3VybHlQcm9jZXNzKGhyM0RhdGEpIHtcbiAgICBsZXQgaHIzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaHIzRGF0YS5saXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGhyM0RhdGEubGlzdFtpXTtcbiAgICAgICAgY29uc3QgdGltZSA9IGVsZW1lbnQuZHRfdHh0LnNsaWNlKDExKTtcbiAgICAgICAgY29uc3QgdGVtcCA9IGVsZW1lbnQubWFpbi50ZW1wO1xuICAgICAgICBjb25zdCBmZWVsc0xpa2UgPSBlbGVtZW50Lm1haW4uZmVlbHNfbGlrZTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckljb24gPSBlbGVtZW50LndlYXRoZXJbMF0uaWNvbjtcblxuICAgICAgICBjb25zdCB3ZWF0aGVyT2JqID0ge3RpbWUsIHRlbXAsIGZlZWxzTGlrZSwgd2VhdGhlckljb259O1xuICAgICAgICBocjNBcnJheS5wdXNoKHdlYXRoZXJPYmopO1xuICAgIH1cbnJldHVybiBocjNBcnJheTtcbn1cblxuXG4vLyBpbml0XG5hc3luYyBmdW5jdGlvbiBjcmVhdGVXZWF0aGVyKGxvY05hbWUpIHtcbiAgICBjb25zdCBsb2NEYXRhID0gYXdhaXQgZ2V0TG9jRGF0YShsb2NOYW1lKTtcbiAgICBsZXQgbG9jID0gIGxvY1Byb2Nlc3MobG9jRGF0YSk7XG4gICAgbGV0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jLmxhdCwgbG9jLmxvbik7XG4gICAgY29uc3Qgd2VhdGhlclByb2Nlc3NlZCA9IHdlYXRoZXJQcm9jZXNzKHdlYXRoZXJEYXRhKTtcbiAgICByZXR1cm4gd2VhdGhlclByb2Nlc3NlZDtcbiAgICB9XG5cbiBcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2VhdGhlckhvdXJseShsb2NOYW1lKSB7XG4gICAgY29uc3QgbG9jID0gYXdhaXQgZ2V0TG9jRGF0YShsb2NOYW1lKTtcbiAgICBjb25zdCBsYXRsb24gPSBsb2NQcm9jZXNzKGxvYyk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRIb3VybHlGb3JlY2FzdChsYXRsb24ubGF0LCBsYXRsb24ubG9uKTtcbiAgICBjb25zdCBwcm9jZXNzZWRIb3VybHkgPSBhd2FpdCBob3VybHlQcm9jZXNzKHJlc3BvbnNlKTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgcmV0dXJuIHByb2Nlc3NlZEhvdXJseTtcbn1cbmV4cG9ydCB7Y3JlYXRlV2VhdGhlciwgZ2V0V2VhdGhlckdpZiwgZ2V0V2VhdGhlckRhdGEsIGdldExvY0RhdGEsIHdlYXRoZXJQcm9jZXNzLCBjcmVhdGVXZWF0aGVySG91cmx5fTsiLCJpbXBvcnQgVGVtcEljb25VcmwgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2RldmljZV90aGVybW9zdGF0X0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Zyc7XG5pbXBvcnQgRmVlbHNMaWtlSWNvblVybCBmcm9tICcuLi9hc3NldHMvaWNvbnMvZGV3X3BvaW50X0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Zyc7XG5pbXBvcnQgd2VhdGhlclVybCBmcm9tICcuLi9hc3NldHMvaWNvbnMvY2xlYXJfZGF5X0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2ZydcbmltcG9ydCB3aW5kU3BlZWRVcmwgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2Fpcl9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnXG5cblxuXG5mdW5jdGlvbiBpbml0RG9jdW1lbnQoKSB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250YWluZXIuY2xhc3NOYW1lID0gJ21haW5Db250YWluZXInO1xuICAgIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlYXJjaEJveC5jbGFzc05hbWUgPSAnc2VhcmNoQm94JztcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5jbGFzc05hbWUgPSAnY29udGVudCc7XG4gICAgY29uc3Qgd2VhdGhlckdpZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHdlYXRoZXJHaWYuY2xhc3NOYW1lID0gJ3dlYXRoZXJHaWYnO1xuICAgIGNvbnN0IGhyM0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhyM0NvbnRhaW5lci5jbGFzc05hbWUgPSAnaHIzQ29udGFpbmVyJztcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgIGZvb3Rlci5jbGFzc05hbWUgPSAnZm9vdGVyJztcbiAgICBcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQm94KTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckdpZik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChocjNDb250YWluZXIpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuXG4gICAgY29uc3QgbG9jSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxvY0lucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgbG9jSW5wdXQubmFtZSA9ICdsb2NhdGlvbic7XG4gICAgbG9jSW5wdXQuaWQgPSAnbG9jYXRpb24nO1xuXG4gICAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2VhcmNoQnRuLmlkID0gJ3NlYXJjaEJ0bic7XG4gICAgc2VhcmNoQnRuLnRleHRDb250ZW50ID0gJ1NlYXJjaCc7XG5cbiAgICBzZWFyY2hCb3guYXBwZW5kQ2hpbGQobG9jSW5wdXQpO1xuICAgIHNlYXJjaEJveC5hcHBlbmRDaGlsZChzZWFyY2hCdG4pO1xuXG4gICAgY29uc3QgbG9jTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY05hbWUuY2xhc3NOYW1lID0gJ2xvY05hbWUnO1xuXG4gICAgY29uc3QgbG9jVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY1RlbXAuY2xhc3NOYW1lID0gJ2xvY1RlbXAnO1xuXG4gICAgY29uc3Qgd2VhdGhlclR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWF0aGVyVHlwZS5jbGFzc05hbWUgPSAnd2VhdGhlclR5cGUnO1xuXG4gICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmVlbHNMaWtlLmNsYXNzTmFtZSA9ICdmZWVsc0xpa2UnO1xuXG4gICAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2luZFNwZWVkLmNsYXNzTmFtZSA9ICd3aW5kU3BlZWQnO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb2NOYW1lKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxvY1RlbXApO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VhdGhlclR5cGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XG5cbiAgICBjb25zdCBsb2NUZW1wSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxvY1RlbXBJY29uLmNsYXNzTmFtZSA9ICdpbmxpbmVJY29uJztcbiAgICBsb2NUZW1wSWNvbi5zcmMgPSBUZW1wSWNvblVybDtcbiAgICBjb25zdCBsb2NUZW1wVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBsb2NUZW1wVGV4dC5jbGFzc05hbWUgPSAnbG9jVGVtcFRleHQnO1xuICAgIGxvY1RlbXAuYXBwZW5kQ2hpbGQobG9jVGVtcEljb24pO1xuICAgIGxvY1RlbXAuYXBwZW5kQ2hpbGQobG9jVGVtcFRleHQpO1xuXG4gICAgY29uc3QgZmVlbHNMaWtlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGZlZWxzTGlrZUljb24uY2xhc3NOYW1lID0gJ2lubGluZUljb24nO1xuICAgIGZlZWxzTGlrZUljb24uc3JjID0gRmVlbHNMaWtlSWNvblVybDtcbiAgICBjb25zdCBmZWVsc0xpa2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGZlZWxzTGlrZVRleHQuY2xhc3NOYW1lID0gJ2ZlZWxzTGlrZVRleHQnO1xuICAgIGZlZWxzTGlrZS5hcHBlbmRDaGlsZChmZWVsc0xpa2VJY29uKTtcbiAgICBmZWVsc0xpa2UuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlVGV4dCk7XG5cbiAgICBjb25zdCB3ZWF0aGVyVHlwZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB3ZWF0aGVyVHlwZUljb24uY2xhc3NOYW1lID0gJ2lubGluZUljb24nO1xuICAgIHdlYXRoZXJUeXBlSWNvbi5zcmMgPSB3ZWF0aGVyVXJsO1xuICAgIGNvbnN0IHdlYXRoZXJUeXBlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB3ZWF0aGVyVHlwZVRleHQuY2xhc3NOYW1lID0gJ3dlYXRoZXJUeXBlVGV4dCc7XG4gICAgd2VhdGhlclR5cGUuYXBwZW5kQ2hpbGQod2VhdGhlclR5cGVJY29uKTtcbiAgICB3ZWF0aGVyVHlwZS5hcHBlbmRDaGlsZCh3ZWF0aGVyVHlwZVRleHQpO1xuXG4gICAgY29uc3Qgd2luZFNwZWVkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHdpbmRTcGVlZEljb24uY2xhc3NOYW1lID0gJ2lubGluZUljb24nO1xuICAgIHdpbmRTcGVlZEljb24uc3JjID0gd2luZFNwZWVkVXJsO1xuICAgIGNvbnN0IHdpbmRTcGVlZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgd2luZFNwZWVkVGV4dC5jbGFzc05hbWUgPSAnd2luZFNwZWVkVGV4dCc7XG4gICAgd2luZFNwZWVkLmFwcGVuZENoaWxkKHdpbmRTcGVlZEljb24pO1xuICAgIHdpbmRTcGVlZC5hcHBlbmRDaGlsZCh3aW5kU3BlZWRUZXh0KTtcblxuXG5cbiAgICBjb25zdCBjaXR5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNpdHkxLmNsYXNzTmFtZSA9ICdjaXR5MSc7XG5cbiAgICBjb25zdCBjaXR5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNpdHkyLmNsYXNzTmFtZSA9ICdjaXR5Mic7XG5cbiAgICBjb25zdCBjaXR5MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNpdHkzLmNsYXNzTmFtZSA9ICdjaXR5Myc7XG5cbiAgICBjb25zdCBjaXR5NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNpdHk0LmNsYXNzTmFtZSA9ICdjaXR5NCc7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY2l0eTEpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjaXR5Mik7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNpdHkzKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY2l0eTQpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlM0hyRWxlbShob3VybHlXZWF0aGVyT2JqKSB7XG4gICAgY29uc29sZS5sb2coaG91cmx5V2VhdGhlck9iaik7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhyM0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhyRWxlbS5jbGFzc05hbWUgPSAnaHJFbGVtJztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaHJFbGVtKTtcblxuICAgIGNvbnN0IGxvY05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NOYW1lLnRleHRDb250ZW50ID0gaG91cmx5V2VhdGhlck9iai50aW1lO1xuXG4gICAgY29uc3QgbG9jVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY1RlbXAudGV4dENvbnRlbnQgPSAnVGVtcGVyYXR1cmU6ICcgKyBob3VybHlXZWF0aGVyT2JqLnRlbXA7XG5cbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSAnRmVlbHMgbGlrZTogJyArIGhvdXJseVdlYXRoZXJPYmouZmVlbHNMaWtlO1xuXG4gICAgY29uc3Qgd2VhdGhlclR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB3ZWF0aGVyVHlwZS5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8ke2hvdXJseVdlYXRoZXJPYmoud2VhdGhlckljb259LnBuZ2A7XG5cbiAgICBockVsZW0uYXBwZW5kQ2hpbGQobG9jTmFtZSk7XG4gICAgaHJFbGVtLmFwcGVuZENoaWxkKGxvY1RlbXApO1xuICAgIGhyRWxlbS5hcHBlbmRDaGlsZChmZWVsc0xpa2UpO1xuICAgIGhyRWxlbS5hcHBlbmRDaGlsZCh3ZWF0aGVyVHlwZSk7XG59XG5cbmZ1bmN0aW9uIHNldFdlYXRoZXJHaWYoZ2lmVXJsKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJHaWYnKS5zcmMgPSBnaWZVcmw7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkRWxlbWVudHNoM2UoKSB7XG4gICAgY29uc3QgaDNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhyM0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGxlbmd0aCA9IGgzZS5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGgzZS5yZW1vdmVDaGlsZChoM2UuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRDb250ZW50KHdlYXRoZXJPYmopIHtcblxuICAgIGNvbnN0IGxvY05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jTmFtZScpO1xuICAgIGNvbnN0IGxvY1RlbXBUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY1RlbXBUZXh0Jyk7XG4gICAgY29uc3QgZmVlbHNMaWtlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVsc0xpa2VUZXh0JylcbiAgICBjb25zdCB3ZWF0aGVyVHlwZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlclR5cGVUZXh0Jyk7XG4gICAgY29uc3Qgd2luZFNwZWVkVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kU3BlZWRUZXh0Jyk7XG5cbiAgICBsb2NOYW1lLnRleHRDb250ZW50ID0gd2VhdGhlck9iai5uYW1lO1xuICAgIGxvY1RlbXBUZXh0LnRleHRDb250ZW50ID0gJ1RlbXBlcmF0dXJlOiAnICsgd2VhdGhlck9iai50ZW1wICsgJyDCsEMnO1xuICAgIGZlZWxzTGlrZVRleHQudGV4dENvbnRlbnQgPSAnRmVlbHMgbGlrZTogJyArIHdlYXRoZXJPYmouZmVlbHNMaWtlICsgJyDCsEMnO1xuICAgIHdlYXRoZXJUeXBlVGV4dC50ZXh0Q29udGVudCA9ICdXZWF0aGVyOiAnICsgd2VhdGhlck9iai53ZWF0aGVyVHlwZTtcbiAgICB3aW5kU3BlZWRUZXh0LnRleHRDb250ZW50ID0gd2VhdGhlck9iai53aW5kU3BlZWQgKyAnIG0vcyc7XG5cblxuXG5cbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVGb290ZXIoY2l0eTEsIGNpdHkyLCBjaXR5MywgY2l0eTQpIHtcbiAgICBjb25zdCBlbGVtQ2l0eTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eTEnKTtcbiAgICBjb25zdCBlbGVtQ2l0eTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eTInKTtcbiAgICBjb25zdCBlbGVtQ2l0eTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eTMnKTtcbiAgICBjb25zdCBlbGVtQ2l0eTQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eTQnKTtcblxuICAgIGVsZW1DaXR5MS50ZXh0Q29udGVudCA9IGNpdHkxLm5hbWUgKyAnOiAnICsgY2l0eTEudGVtcCArICfCsEMnO1xuICAgIGVsZW1DaXR5MS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByZXR1cm5Db2xvcihjaXR5MS50ZW1wKTtcblxuICAgIGVsZW1DaXR5Mi50ZXh0Q29udGVudCA9IGNpdHkyLm5hbWUgKyAnOiAnICsgY2l0eTIudGVtcCArICfCsEMnO1xuICAgIGVsZW1DaXR5Mi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByZXR1cm5Db2xvcihjaXR5Mi50ZW1wKTtcblxuICAgIGVsZW1DaXR5My50ZXh0Q29udGVudCA9IGNpdHkzLm5hbWUgKyAnOiAnICsgY2l0eTMudGVtcCArICfCsEMnO1xuICAgIGVsZW1DaXR5My5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByZXR1cm5Db2xvcihjaXR5My50ZW1wKTtcblxuICAgIGVsZW1DaXR5NC50ZXh0Q29udGVudCA9IGNpdHk0Lm5hbWUgKyAnOiAnICsgY2l0eTQudGVtcCArICfCsEMnO1xuICAgIGVsZW1DaXR5NC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByZXR1cm5Db2xvcihjaXR5NC50ZW1wKTtcbn1cblxuZnVuY3Rpb24gcmV0dXJuQ29sb3IodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPD0gLTEpIHtcbiAgICAgICAgcmV0dXJuICdza3libHVlJztcbiAgICB9IGVsc2UgaWYgKHZhbHVlID49IDEgJiYgdmFsdWUgPD0gMTApIHtcbiAgICAgICAgcmV0dXJuICdncmVlbnllbGxvdyc7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA+PSAxMSAmJiB2YWx1ZSA8PSAyOSkge1xuICAgICAgICByZXR1cm4gJ3llbGxvdyc7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA+PSAzMCkge1xuICAgICAgICByZXR1cm4gJ3JlZCc7XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7IGNyZWF0ZUN1cnJlbnRDb250ZW50LCBwb3B1bGF0ZUZvb3RlciwgaW5pdERvY3VtZW50LCBzZXRXZWF0aGVyR2lmLCBjcmVhdGUzSHJFbGVtLCByZW1vdmVDaGlsZEVsZW1lbnRzaDNlIH07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVXZWF0aGVyLCBnZXRXZWF0aGVyR2lmLCBnZXRXZWF0aGVyRGF0YSwgZ2V0TG9jRGF0YSwgd2VhdGhlclByb2Nlc3MsIGNyZWF0ZVdlYXRoZXJIb3VybHkgfSBmcm9tIFwiLi9BUEkgY2FsbHMvZ2V0V2VhdGhlclwiO1xuaW1wb3J0IHsgY3JlYXRlQ3VycmVudENvbnRlbnQsIHBvcHVsYXRlRm9vdGVyLCBpbml0RG9jdW1lbnQsIHNldFdlYXRoZXJHaWYsIGNyZWF0ZTNIckVsZW0sIHJlbW92ZUNoaWxkRWxlbWVudHNoM2UgfSBmcm9tIFwiLi9nZW5lcmF0ZURPTWVsZW0vY3JlYXRlRG9tXCI7XG5cbmxldCBjaXR5TmFtZSA9ICdvc2xvJztcblxuZnVuY3Rpb24gYWRkRXZlbnRzKCkge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hCdG4nKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbicpO1xuXG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2l0eU5hbWUgPSBpbnB1dC52YWx1ZTtcbiAgICBwb3B1bGF0ZURvbShjaXR5TmFtZSk7XG59KTtcblxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBidG4uY2xpY2soKTtcbiAgICB9XG59KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVEb20oY2l0eU5hbWUpIHtcbiAgICBjb25zdCB3ZWF0aGVyT2JqID0gYXdhaXQgY3JlYXRlV2VhdGhlcihjaXR5TmFtZSk7XG4gICAgY3JlYXRlQ3VycmVudENvbnRlbnQod2VhdGhlck9iaik7XG4gICAgY29uc3Qgd2VhdGhlckdpZiA9IGF3YWl0IGdldFdlYXRoZXJHaWYod2VhdGhlck9iai53ZWF0aGVyVHlwZSk7XG4gICAgc2V0V2VhdGhlckdpZih3ZWF0aGVyR2lmKTtcbiAgICByZW1vdmVDaGlsZEVsZW1lbnRzaDNlKCk7XG4gICAgY29uc3QgaG91cmx5V2VhdGhlciA9IGF3YWl0IGNyZWF0ZVdlYXRoZXJIb3VybHkoY2l0eU5hbWUpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBob3VybHlXZWF0aGVyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gaG91cmx5V2VhdGhlcltpbmRleF07XG4gICAgY3JlYXRlM0hyRWxlbShlbGVtZW50KTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coaG91cmx5V2VhdGhlcik7XG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gZm9vdGVyRGF0YSgpIHtcbiAgICB0cnkge1xuICAgIGxldCBsb2MgPSBhd2FpdCBnZXRMb2NEYXRhKCdPc2xvJyk7XG4gICAgbGV0IGNpdHlEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jWzBdLmxhdCwgbG9jWzBdLmxvbik7XG4gICAgY29uc3QgY2l0eTEgPSB3ZWF0aGVyUHJvY2VzcyhjaXR5RGF0YSk7XG5cbiAgICAgbG9jID0gYXdhaXQgZ2V0TG9jRGF0YSgnTG9uZG9uJyk7XG4gICAgIGNpdHlEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jWzBdLmxhdCwgbG9jWzBdLmxvbik7XG4gICAgY29uc3QgY2l0eTIgPSB3ZWF0aGVyUHJvY2VzcyhjaXR5RGF0YSk7XG5cbiAgICAgbG9jID0gYXdhaXQgZ2V0TG9jRGF0YSgnTWFkcmlkJyk7XG4gICAgIGNpdHlEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jWzBdLmxhdCwgbG9jWzBdLmxvbik7XG4gICAgY29uc3QgY2l0eTMgPSB3ZWF0aGVyUHJvY2VzcyhjaXR5RGF0YSk7XG5cbiAgICAgbG9jID0gYXdhaXQgZ2V0TG9jRGF0YSgnT3JsYW5kbycpO1xuICAgICBjaXR5RGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY1swXS5sYXQsIGxvY1swXS5sb24pO1xuICAgIGNvbnN0IGNpdHk0ID0gd2VhdGhlclByb2Nlc3MoY2l0eURhdGEpO1xuXG4gICAgcG9wdWxhdGVGb290ZXIoY2l0eTEsIGNpdHkyLCBjaXR5MywgY2l0eTQpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgICBcbn1cblxuXG5pbml0RG9jdW1lbnQoKTtcbnBvcHVsYXRlRG9tKGNpdHlOYW1lKTtcbmZvb3RlckRhdGEoKTtcbmFkZEV2ZW50cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9