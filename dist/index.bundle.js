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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    width: 100vw;\n    height: 100vh;\n    background-image: url('https://ugc.berkeley.edu/wp-content/uploads/2016/01/thunderstorm-3625405_1920-1536x864.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-color: #142354;\n    display: flex;\n    justify-content: center;\n    overflow: hidden;\n}\n\n@media only screen and (max-width: 750px) {\n    .mainContainer {width: 100vw; height: 90vh;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 320px; height: 110px; padding: 2px;}\n    .weatherGif{width: 320px;}\n    .hr3Container{width: 330px; font-size: 0.6em;}\n    .hrElem{width: 50px; padding: 5px; height: 105px;}\n    .hrElem img{width: 35px;}\n    .footer{width: 320px; height: 50px;}\n}\n\n@media only screen and (min-width: 750px) {\n    .mainContainer {width: 100vw; height: 95vh;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 450px; height: 110px; padding: 15px;}\n    .weatherGif{width: 500px;}\n    .hr3Container{width: 600px; font-size: 0.7em;}\n    .hrElem{width: 90px; padding: 5px; height: 105px;}\n    .hrElem img{width: 40px;}\n    .footer{width: 700px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n\n@media only screen and (min-width: 1000px) {\n    .mainContainer {width: 100vw; height: 95vh;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 450px; height: 100px; padding: 15px;}\n    .weatherGif{width: 400px;}\n    .hr3Container{width: 900px; font-size: 0.8em;}\n    .hrElem{width: 150px; padding: 5px; height: 105px;}\n    .hrElem img{width: 55px;}\n    .footer{width: 900px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n@media only screen and (min-width: 1400px) {\n    .mainContainer {width: 100vw; height: 95vh;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 450px; height: 100px; padding: 15px;}\n    .weatherGif{width: 400px;}\n    .hr3Container{width: 900px; font-size: 0.8em;}\n    .hrElem{width: 150px; padding: 5px; height: 105px;}\n    .hrElem img{width: 55px;}\n    .footer{width: 900px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n@media only screen and (min-width: 2560px) {\n    .mainContainer {width: 100vw; height: 95vh;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 450px; height: 100px; padding: 15px;}\n    .weatherGif{width: 400px;}\n    .hr3Container{width: 900px; font-size: 0.8em;}\n    .hrElem{width: 150px; padding: 5px; height: 105px;}\n    .hrElem img{width: 55px;}\n    .footer{width: 900px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n\n.mainContainer {\n    font-family: 'Courier New', Courier, monospace;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n\n\n}\n\n.searchBox {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n#location {\n    text-align: center;\n    border: 2px solid black;\n    border-radius: 5px;\n}\n\n.content {\n    display: grid;\n    background-color: aliceblue;\n    justify-content: space-between;\n    align-items: flex-start;\n    border: 2px solid black;\n    border-radius: 15px;\n}\n\n.locName {\n    grid-column: 1 / 3;\n    font-size: 2em;\n    font-weight: bold;\n    text-align: center;\n}\n\n.weatherGif {\n    border: 5px solid black;\n    border-radius: 15px;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nfooter div {\n    background-color: aliceblue;\n    border: 2px solid black;\n    border-radius: 5px;\n    text-align: center;\n\n}\n\n.hr3Container {\n    display: flex;\n    justify-content: center;\n    \n}\n\n.hrElem {\n    background-color: aliceblue;\n    border: 2px solid black;\n    border-radius: 10px;\n}\n\n\n\n.hrElem :first-child {\n    font-weight: bold;\n    text-align: center;\n    border-bottom: 2px solid black;\n}\n\n.hrElem img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border: 2px solid black;\n    border-radius: 50px;\n    background-color: steelblue;\n}\n\n.inlineIcon {\n    display: inline;\n    margin: 0 0.125em;\n    padding: 0;\n    vertical-align: baseline;\n    height: 0.8em;\n    width: 0.8em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    width: 100vw;\n    height: 100vh;\n    background-image: url('https://ugc.berkeley.edu/wp-content/uploads/2016/01/thunderstorm-3625405_1920-1536x864.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-color: #142354;\n    display: flex;\n    justify-content: center;\n    overflow: hidden;\n}\n\n@media only screen and (max-width: 750px) {\n    .mainContainer {width: 100vw; height: 90vh;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 320px; height: 110px; padding: 2px;}\n    .weatherGif{width: 320px;}\n    .hr3Container{width: 330px; font-size: 0.6em;}\n    .hrElem{width: 50px; padding: 5px; height: 105px;}\n    .hrElem img{width: 35px;}\n    .footer{width: 320px; height: 50px;}\n}\n\n@media only screen and (min-width: 750px) {\n    .mainContainer {width: 100vw; height: 95vh;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 450px; height: 110px; padding: 15px;}\n    .weatherGif{width: 500px;}\n    .hr3Container{width: 600px; font-size: 0.7em;}\n    .hrElem{width: 90px; padding: 5px; height: 105px;}\n    .hrElem img{width: 40px;}\n    .footer{width: 700px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n\n@media only screen and (min-width: 1000px) {\n    .mainContainer {width: 100vw; height: 95vh;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 450px; height: 100px; padding: 15px;}\n    .weatherGif{width: 400px;}\n    .hr3Container{width: 900px; font-size: 0.8em;}\n    .hrElem{width: 150px; padding: 5px; height: 105px;}\n    .hrElem img{width: 55px;}\n    .footer{width: 900px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n@media only screen and (min-width: 1400px) {\n    .mainContainer {width: 100vw; height: 95vh;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 450px; height: 100px; padding: 15px;}\n    .weatherGif{width: 400px;}\n    .hr3Container{width: 900px; font-size: 0.8em;}\n    .hrElem{width: 150px; padding: 5px; height: 105px;}\n    .hrElem img{width: 55px;}\n    .footer{width: 900px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n@media only screen and (min-width: 2560px) {\n    .mainContainer {width: 100vw; height: 95vh;}\n    .searchBox {width: 50px; height: 50px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .content {width: 450px; height: 100px; padding: 15px;}\n    .weatherGif{width: 400px;}\n    .hr3Container{width: 900px; font-size: 0.8em;}\n    .hrElem{width: 150px; padding: 5px; height: 105px;}\n    .hrElem img{width: 55px;}\n    .footer{width: 900px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n\n.mainContainer {\n    font-family: 'Courier New', Courier, monospace;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n\n\n}\n\n.searchBox {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n#location {\n    text-align: center;\n    border: 2px solid black;\n    border-radius: 5px;\n}\n\n.content {\n    display: grid;\n    background-color: aliceblue;\n    justify-content: space-between;\n    align-items: flex-start;\n    border: 2px solid black;\n    border-radius: 15px;\n}\n\n.locName {\n    grid-column: 1 / 3;\n    font-size: 2em;\n    font-weight: bold;\n    text-align: center;\n}\n\n.weatherGif {\n    border: 5px solid black;\n    border-radius: 15px;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nfooter div {\n    background-color: aliceblue;\n    border: 2px solid black;\n    border-radius: 5px;\n    text-align: center;\n\n}\n\n.hr3Container {\n    display: flex;\n    justify-content: center;\n    \n}\n\n.hrElem {\n    background-color: aliceblue;\n    border: 2px solid black;\n    border-radius: 10px;\n}\n\n\n\n.hrElem :first-child {\n    font-weight: bold;\n    text-align: center;\n    border-bottom: 2px solid black;\n}\n\n.hrElem img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border: 2px solid black;\n    border-radius: 50px;\n    background-color: steelblue;\n}\n\n.inlineIcon {\n    display: inline;\n    margin: 0 0.125em;\n    padding: 0;\n    vertical-align: baseline;\n    height: 0.8em;\n    width: 0.8em;\n}"],"sourceRoot":""}]);
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





function createContainers() {
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
}

function createSearchBox() {
    const searchBox = document.querySelector('.searchBox');

    const locInput = document.createElement('input');
    locInput.type = 'text';
    locInput.name = 'location';
    locInput.id = 'location';

    const searchBtn = document.createElement('button');
    searchBtn.id = 'searchBtn';
    searchBtn.textContent = 'Search';

    searchBox.appendChild(locInput);
    searchBox.appendChild(searchBtn);
}

function createContent() {
    const content = document.querySelector('.content');

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
}

function createFooterElems() {
    const footer = document.querySelector('.footer');
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
}

function initDocument() {
    createContainers();
    createSearchBox();
    createContent();
    createFooterElems();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN4Qiw2QkFBNkIsb0VBQWE7QUFDMUMsSUFBSSx5RUFBYTtBQUNqQixJQUFJLGtGQUFzQjtBQUMxQixnQ0FBZ0MsMEVBQW1CO0FBQ25ELHdCQUF3Qiw4QkFBOEI7QUFDdEQ7QUFDQSxJQUFJLHlFQUFhO0FBQ2pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixpRUFBVTtBQUM5Qix5QkFBeUIscUVBQWM7QUFDdkMsa0JBQWtCLHFFQUFjOztBQUVoQyxpQkFBaUIsaUVBQVU7QUFDM0Isc0JBQXNCLHFFQUFjO0FBQ3BDLGtCQUFrQixxRUFBYzs7QUFFaEMsaUJBQWlCLGlFQUFVO0FBQzNCLHNCQUFzQixxRUFBYztBQUNwQyxrQkFBa0IscUVBQWM7O0FBRWhDLGlCQUFpQixpRUFBVTtBQUMzQixzQkFBc0IscUVBQWM7QUFDcEMsa0JBQWtCLHFFQUFjOztBQUVoQyxJQUFJLDBFQUFjOztBQUVsQixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHdFQUFZO0FBQ1o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL0FQSSBjYWxscy9nZXRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2VuZXJhdGVET01lbGVtL2NyZWF0ZURvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3VnYy5iZXJrZWxleS5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDEvdGh1bmRlcnN0b3JtLTM2MjU0MDVfMTkyMC0xNTM2eDg2NC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjM1NDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgLm1haW5Db250YWluZXIge3dpZHRoOiAxMDB2dzsgaGVpZ2h0OiA5MHZoO31cXG4gICAgLnNlYXJjaEJveCB7d2lkdGg6IDUwcHg7IGhlaWdodDogNTBweDt9XFxuICAgIGJ1dHRvbiB7d2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDM1cHg7IG1hcmdpbi10b3A6IDVweDt9XFxuICAgIC5jb250ZW50IHt3aWR0aDogMzIwcHg7IGhlaWdodDogMTEwcHg7IHBhZGRpbmc6IDJweDt9XFxuICAgIC53ZWF0aGVyR2lme3dpZHRoOiAzMjBweDt9XFxuICAgIC5ocjNDb250YWluZXJ7d2lkdGg6IDMzMHB4OyBmb250LXNpemU6IDAuNmVtO31cXG4gICAgLmhyRWxlbXt3aWR0aDogNTBweDsgcGFkZGluZzogNXB4OyBoZWlnaHQ6IDEwNXB4O31cXG4gICAgLmhyRWxlbSBpbWd7d2lkdGg6IDM1cHg7fVxcbiAgICAuZm9vdGVye3dpZHRoOiAzMjBweDsgaGVpZ2h0OiA1MHB4O31cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xcbiAgICAubWFpbkNvbnRhaW5lciB7d2lkdGg6IDEwMHZ3OyBoZWlnaHQ6IDk1dmg7fVxcbiAgICAuc2VhcmNoQm94IHt3aWR0aDogNTBweDsgaGVpZ2h0OiA1MHB4O31cXG4gICAgYnV0dG9uIHt3aWR0aDogMTAwcHg7IGhlaWdodDogMzVweDsgbWFyZ2luLXRvcDogNXB4O31cXG4gICAgLmNvbnRlbnQge3dpZHRoOiA0NTBweDsgaGVpZ2h0OiAxMTBweDsgcGFkZGluZzogMTVweDt9XFxuICAgIC53ZWF0aGVyR2lme3dpZHRoOiA1MDBweDt9XFxuICAgIC5ocjNDb250YWluZXJ7d2lkdGg6IDYwMHB4OyBmb250LXNpemU6IDAuN2VtO31cXG4gICAgLmhyRWxlbXt3aWR0aDogOTBweDsgcGFkZGluZzogNXB4OyBoZWlnaHQ6IDEwNXB4O31cXG4gICAgLmhyRWxlbSBpbWd7d2lkdGg6IDQwcHg7fVxcbiAgICAuZm9vdGVye3dpZHRoOiA3MDBweDsgaGVpZ2h0OiA0MHB4O31cXG4gICAgLmZvb3RlciBkaXZ7cGFkZGluZzogMTBweDt9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5tYWluQ29udGFpbmVyIHt3aWR0aDogMTAwdnc7IGhlaWdodDogOTV2aDt9XFxuICAgIC5zZWFyY2hCb3gge3dpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7fVxcbiAgICBidXR0b24ge3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAzNXB4OyBtYXJnaW4tdG9wOiA1cHg7fVxcbiAgICAuY29udGVudCB7d2lkdGg6IDQ1MHB4OyBoZWlnaHQ6IDEwMHB4OyBwYWRkaW5nOiAxNXB4O31cXG4gICAgLndlYXRoZXJHaWZ7d2lkdGg6IDQwMHB4O31cXG4gICAgLmhyM0NvbnRhaW5lcnt3aWR0aDogOTAwcHg7IGZvbnQtc2l6ZTogMC44ZW07fVxcbiAgICAuaHJFbGVte3dpZHRoOiAxNTBweDsgcGFkZGluZzogNXB4OyBoZWlnaHQ6IDEwNXB4O31cXG4gICAgLmhyRWxlbSBpbWd7d2lkdGg6IDU1cHg7fVxcbiAgICAuZm9vdGVye3dpZHRoOiA5MDBweDsgaGVpZ2h0OiA0MHB4O31cXG4gICAgLmZvb3RlciBkaXZ7cGFkZGluZzogMTBweDt9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XFxuICAgIC5tYWluQ29udGFpbmVyIHt3aWR0aDogMTAwdnc7IGhlaWdodDogOTV2aDt9XFxuICAgIC5zZWFyY2hCb3gge3dpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7fVxcbiAgICBidXR0b24ge3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAzNXB4OyBtYXJnaW4tdG9wOiA1cHg7fVxcbiAgICAuY29udGVudCB7d2lkdGg6IDQ1MHB4OyBoZWlnaHQ6IDEwMHB4OyBwYWRkaW5nOiAxNXB4O31cXG4gICAgLndlYXRoZXJHaWZ7d2lkdGg6IDQwMHB4O31cXG4gICAgLmhyM0NvbnRhaW5lcnt3aWR0aDogOTAwcHg7IGZvbnQtc2l6ZTogMC44ZW07fVxcbiAgICAuaHJFbGVte3dpZHRoOiAxNTBweDsgcGFkZGluZzogNXB4OyBoZWlnaHQ6IDEwNXB4O31cXG4gICAgLmhyRWxlbSBpbWd7d2lkdGg6IDU1cHg7fVxcbiAgICAuZm9vdGVye3dpZHRoOiA5MDBweDsgaGVpZ2h0OiA0MHB4O31cXG4gICAgLmZvb3RlciBkaXZ7cGFkZGluZzogMTBweDt9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjU2MHB4KSB7XFxuICAgIC5tYWluQ29udGFpbmVyIHt3aWR0aDogMTAwdnc7IGhlaWdodDogOTV2aDt9XFxuICAgIC5zZWFyY2hCb3gge3dpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7fVxcbiAgICBidXR0b24ge3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAzNXB4OyBtYXJnaW4tdG9wOiA1cHg7fVxcbiAgICAuY29udGVudCB7d2lkdGg6IDQ1MHB4OyBoZWlnaHQ6IDEwMHB4OyBwYWRkaW5nOiAxNXB4O31cXG4gICAgLndlYXRoZXJHaWZ7d2lkdGg6IDQwMHB4O31cXG4gICAgLmhyM0NvbnRhaW5lcnt3aWR0aDogOTAwcHg7IGZvbnQtc2l6ZTogMC44ZW07fVxcbiAgICAuaHJFbGVte3dpZHRoOiAxNTBweDsgcGFkZGluZzogNXB4OyBoZWlnaHQ6IDEwNXB4O31cXG4gICAgLmhyRWxlbSBpbWd7d2lkdGg6IDU1cHg7fVxcbiAgICAuZm9vdGVye3dpZHRoOiA5MDBweDsgaGVpZ2h0OiA0MHB4O31cXG4gICAgLmZvb3RlciBkaXZ7cGFkZGluZzogMTBweDt9XFxufVxcblxcbi5tYWluQ29udGFpbmVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcblxcbn1cXG5cXG4uc2VhcmNoQm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuI2xvY2F0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5sb2NOYW1lIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXJHaWYge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuLmhyM0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLmhyRWxlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcblxcblxcbi5ockVsZW0gOmZpcnN0LWNoaWxkIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaHJFbGVtIGltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcbn1cXG5cXG4uaW5saW5lSWNvbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgbWFyZ2luOiAwIDAuMTI1ZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gICAgaGVpZ2h0OiAwLjhlbTtcXG4gICAgd2lkdGg6IDAuOGVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtSEFBbUg7SUFDbkgsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0IsWUFBWSxFQUFFLFlBQVksQ0FBQztJQUMzQyxZQUFZLFdBQVcsRUFBRSxZQUFZLENBQUM7SUFDdEMsUUFBUSxZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQztJQUNwRCxVQUFVLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDO0lBQ3BELFlBQVksWUFBWSxDQUFDO0lBQ3pCLGNBQWMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO0lBQzdDLFFBQVEsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUM7SUFDakQsWUFBWSxXQUFXLENBQUM7SUFDeEIsUUFBUSxZQUFZLEVBQUUsWUFBWSxDQUFDO0FBQ3ZDOztBQUVBO0lBQ0ksZ0JBQWdCLFlBQVksRUFBRSxZQUFZLENBQUM7SUFDM0MsWUFBWSxXQUFXLEVBQUUsWUFBWSxDQUFDO0lBQ3RDLFFBQVEsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUM7SUFDcEQsVUFBVSxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztJQUNyRCxZQUFZLFlBQVksQ0FBQztJQUN6QixjQUFjLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztJQUM3QyxRQUFRLFdBQVcsRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDO0lBQ2pELFlBQVksV0FBVyxDQUFDO0lBQ3hCLFFB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ZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3VnYy5iZXJrZWxleS5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDEvdGh1bmRlcnN0b3JtLTM2MjU0MDVfMTkyMC0xNTM2eDg2NC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjM1NDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgLm1haW5Db250YWluZXIge3dpZHRoOiAxMDB2dzsgaGVpZ2h0OiA5MHZoO31cXG4gICAgLnNlYXJjaEJveCB7d2lkdGg6IDUwcHg7IGhlaWdodDogNTBweDt9XFxuICAgIGJ1dHRvbiB7d2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDM1cHg7IG1hcmdpbi10b3A6IDVweDt9XFxuICAgIC5jb250ZW50IHt3aWR0aDogMzIwcHg7IGhlaWdodDogMTEwcHg7IHBhZGRpbmc6IDJweDt9XFxuICAgIC53ZWF0aGVyR2lme3dpZHRoOiAzMjBweDt9XFxuICAgIC5ocjNDb250YWluZXJ7d2lkdGg6IDMzMHB4OyBmb250LXNpemU6IDAuNmVtO31cXG4gICAgLmhyRWxlbXt3aWR0aDogNTBweDsgcGFkZGluZzogNXB4OyBoZWlnaHQ6IDEwNXB4O31cXG4gICAgLmhyRWxlbSBpbWd7d2lkdGg6IDM1cHg7fVxcbiAgICAuZm9vdGVye3dpZHRoOiAzMjBweDsgaGVpZ2h0OiA1MHB4O31cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xcbiAgICAubWFpbkNvbnRhaW5lciB7d2lkdGg6IDEwMHZ3OyBoZWlnaHQ6IDk1dmg7fVxcbiAgICAuc2VhcmNoQm94IHt3aWR0aDogNTBweDsgaGVpZ2h0OiA1MHB4O31cXG4gICAgYnV0dG9uIHt3aWR0aDogMTAwcHg7IGhlaWdodDogMzVweDsgbWFyZ2luLXRvcDogNXB4O31cXG4gICAgLmNvbnRlbnQge3dpZHRoOiA0NTBweDsgaGVpZ2h0OiAxMTBweDsgcGFkZGluZzogMTVweDt9XFxuICAgIC53ZWF0aGVyR2lme3dpZHRoOiA1MDBweDt9XFxuICAgIC5ocjNDb250YWluZXJ7d2lkdGg6IDYwMHB4OyBmb250LXNpemU6IDAuN2VtO31cXG4gICAgLmhyRWxlbXt3aWR0aDogOTBweDsgcGFkZGluZzogNXB4OyBoZWlnaHQ6IDEwNXB4O31cXG4gICAgLmhyRWxlbSBpbWd7d2lkdGg6IDQwcHg7fVxcbiAgICAuZm9vdGVye3dpZHRoOiA3MDBweDsgaGVpZ2h0OiA0MHB4O31cXG4gICAgLmZvb3RlciBkaXZ7cGFkZGluZzogMTBweDt9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5tYWluQ29udGFpbmVyIHt3aWR0aDogMTAwdnc7IGhlaWdodDogOTV2aDt9XFxuICAgIC5zZWFyY2hCb3gge3dpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7fVxcbiAgICBidXR0b24ge3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAzNXB4OyBtYXJnaW4tdG9wOiA1cHg7fVxcbiAgICAuY29udGVudCB7d2lkdGg6IDQ1MHB4OyBoZWlnaHQ6IDEwMHB4OyBwYWRkaW5nOiAxNXB4O31cXG4gICAgLndlYXRoZXJHaWZ7d2lkdGg6IDQwMHB4O31cXG4gICAgLmhyM0NvbnRhaW5lcnt3aWR0aDogOTAwcHg7IGZvbnQtc2l6ZTogMC44ZW07fVxcbiAgICAuaHJFbGVte3dpZHRoOiAxNTBweDsgcGFkZGluZzogNXB4OyBoZWlnaHQ6IDEwNXB4O31cXG4gICAgLmhyRWxlbSBpbWd7d2lkdGg6IDU1cHg7fVxcbiAgICAuZm9vdGVye3dpZHRoOiA5MDBweDsgaGVpZ2h0OiA0MHB4O31cXG4gICAgLmZvb3RlciBkaXZ7cGFkZGluZzogMTBweDt9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XFxuICAgIC5tYWluQ29udGFpbmVyIHt3aWR0aDogMTAwdnc7IGhlaWdodDogOTV2aDt9XFxuICAgIC5zZWFyY2hCb3gge3dpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7fVxcbiAgICBidXR0b24ge3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAzNXB4OyBtYXJnaW4tdG9wOiA1cHg7fVxcbiAgICAuY29udGVudCB7d2lkdGg6IDQ1MHB4OyBoZWlnaHQ6IDEwMHB4OyBwYWRkaW5nOiAxNXB4O31cXG4gICAgLndlYXRoZXJHaWZ7d2lkdGg6IDQwMHB4O31cXG4gICAgLmhyM0NvbnRhaW5lcnt3aWR0aDogOTAwcHg7IGZvbnQtc2l6ZTogMC44ZW07fVxcbiAgICAuaHJFbGVte3dpZHRoOiAxNTBweDsgcGFkZGluZzogNXB4OyBoZWlnaHQ6IDEwNXB4O31cXG4gICAgLmhyRWxlbSBpbWd7d2lkdGg6IDU1cHg7fVxcbiAgICAuZm9vdGVye3dpZHRoOiA5MDBweDsgaGVpZ2h0OiA0MHB4O31cXG4gICAgLmZvb3RlciBkaXZ7cGFkZGluZzogMTBweDt9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjU2MHB4KSB7XFxuICAgIC5tYWluQ29udGFpbmVyIHt3aWR0aDogMTAwdnc7IGhlaWdodDogOTV2aDt9XFxuICAgIC5zZWFyY2hCb3gge3dpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7fVxcbiAgICBidXR0b24ge3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAzNXB4OyBtYXJnaW4tdG9wOiA1cHg7fVxcbiAgICAuY29udGVudCB7d2lkdGg6IDQ1MHB4OyBoZWlnaHQ6IDEwMHB4OyBwYWRkaW5nOiAxNXB4O31cXG4gICAgLndlYXRoZXJHaWZ7d2lkdGg6IDQwMHB4O31cXG4gICAgLmhyM0NvbnRhaW5lcnt3aWR0aDogOTAwcHg7IGZvbnQtc2l6ZTogMC44ZW07fVxcbiAgICAuaHJFbGVte3dpZHRoOiAxNTBweDsgcGFkZGluZzogNXB4OyBoZWlnaHQ6IDEwNXB4O31cXG4gICAgLmhyRWxlbSBpbWd7d2lkdGg6IDU1cHg7fVxcbiAgICAuZm9vdGVye3dpZHRoOiA5MDBweDsgaGVpZ2h0OiA0MHB4O31cXG4gICAgLmZvb3RlciBkaXZ7cGFkZGluZzogMTBweDt9XFxufVxcblxcbi5tYWluQ29udGFpbmVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcblxcbn1cXG5cXG4uc2VhcmNoQm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuI2xvY2F0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5sb2NOYW1lIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXJHaWYge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuLmhyM0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLmhyRWxlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcblxcblxcbi5ockVsZW0gOmZpcnN0LWNoaWxkIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaHJFbGVtIGltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcbn1cXG5cXG4uaW5saW5lSWNvbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgbWFyZ2luOiAwIDAuMTI1ZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gICAgaGVpZ2h0OiAwLjhlbTtcXG4gICAgd2lkdGg6IDAuOGVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQga2V5ID0gJ2YzMTFhY2JkZTUwODRkOTQ4NTAxZWQ1ODc0YjliMjBlJztcbmxldCB1bml0ID0gJ21ldHJpYyc7XG5cbi8vQVBJIGNhbGxzXG5cbmFzeW5jIGZ1bmN0aW9uIGdldExvY0RhdGEobG9jKSB7XG4vL2dldHMgbG9uZ2l0dWRlIGFuZCBsYXRpdHVkZSBvZiBzdHJpbmcgbmFtZSAgIFxuICAgIGNvbnN0IGxvY1VSTCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY30mbGltaXQ9MSZhcHBpZD0ke2tleX1gO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobG9jVVJMLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGNvbnN0IGxvY0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBsb2NEYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobGF0LCBsb24pIHtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJVUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JnVuaXRzPSR7dW5pdH0mYXBwaWQ9JHtrZXl9YFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdlYXRoZXJVUkwsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyR2lmKHdlYXRoZXIpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBnaXBoeUtleSA9ICdtUGtzN3hPcW1VaDNoYjAyU1N1ZllxMHZZNkVPdjBPQSc7XG4gICAgICAgIGNvbnN0IGdpcGh5VVJMID0gYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3NlYXJjaD9rZXk9JHtnaXBoeUtleX0mcT0ke3dlYXRoZXJ9JmxpbWl0PTEmb2Zmc2V0PTAmcmF0aW5nPWcmbGFuZz1lbmA7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2lwaHlVUkwsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckdpZiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHdlYXRoZXJHaWYuZGF0YVswXS5pbWFnZXMub3JpZ2luYWwudXJsO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0SG91cmx5Rm9yZWNhc3QobGF0LCBsb24pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBob3VybHlVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD0ke2tleX0mdW5pdHM9JHt1bml0fSZjbnQ9NWA7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaG91cmx5VXJsLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGNvbnN0IGhvdXJseVdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBob3VybHlXZWF0aGVyO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbn1cblxuLy9kYXRhIHByb2Nlc3NpbmdcbmZ1bmN0aW9uIHdlYXRoZXJQcm9jZXNzKHdlYXRoZXJEYXRhKSB7XG4gICAgbGV0IG5hbWUgPSB3ZWF0aGVyRGF0YS5uYW1lO1xuICAgIGxldCB0ZW1wID0gd2VhdGhlckRhdGEubWFpbi50ZW1wO1xuICAgIGxldCBmZWVsc0xpa2UgPSB3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2U7XG4gICAgbGV0IHdlYXRoZXJUeXBlID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluO1xuICAgIGxldCB3aW5kU3BlZWQgPSB3ZWF0aGVyRGF0YS53aW5kLnNwZWVkO1xuXG4gICAgcmV0dXJuIHsgbmFtZSwgdGVtcCwgZmVlbHNMaWtlLCB3ZWF0aGVyVHlwZSwgd2luZFNwZWVkIH07XG59XG5cbmZ1bmN0aW9uIGxvY1Byb2Nlc3MobG9jKSB7XG4gICAgbGV0IGxhdCA9IGxvY1swXS5sYXQ7XG4gICAgbGV0IGxvbiA9IGxvY1swXS5sb247XG4gICAgcmV0dXJuIHsgbGF0LCBsb24gfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaG91cmx5UHJvY2VzcyhocjNEYXRhKSB7XG4gICAgbGV0IGhyM0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhyM0RhdGEubGlzdC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBocjNEYXRhLmxpc3RbaV07XG4gICAgICAgIGNvbnN0IHRpbWUgPSBlbGVtZW50LmR0X3R4dC5zbGljZSgxMSk7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBlbGVtZW50Lm1haW4udGVtcDtcbiAgICAgICAgY29uc3QgZmVlbHNMaWtlID0gZWxlbWVudC5tYWluLmZlZWxzX2xpa2U7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJJY29uID0gZWxlbWVudC53ZWF0aGVyWzBdLmljb247XG5cbiAgICAgICAgY29uc3Qgd2VhdGhlck9iaiA9IHt0aW1lLCB0ZW1wLCBmZWVsc0xpa2UsIHdlYXRoZXJJY29ufTtcbiAgICAgICAgaHIzQXJyYXkucHVzaCh3ZWF0aGVyT2JqKTtcbiAgICB9XG5yZXR1cm4gaHIzQXJyYXk7XG59XG5cblxuLy8gaW5pdFxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2VhdGhlcihsb2NOYW1lKSB7XG4gICAgY29uc3QgbG9jRGF0YSA9IGF3YWl0IGdldExvY0RhdGEobG9jTmFtZSk7XG4gICAgbGV0IGxvYyA9ICBsb2NQcm9jZXNzKGxvY0RhdGEpO1xuICAgIGxldCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvYy5sYXQsIGxvYy5sb24pO1xuICAgIGNvbnN0IHdlYXRoZXJQcm9jZXNzZWQgPSB3ZWF0aGVyUHJvY2Vzcyh3ZWF0aGVyRGF0YSk7XG4gICAgcmV0dXJuIHdlYXRoZXJQcm9jZXNzZWQ7XG4gICAgfVxuXG4gXG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJIb3VybHkobG9jTmFtZSkge1xuICAgIGNvbnN0IGxvYyA9IGF3YWl0IGdldExvY0RhdGEobG9jTmFtZSk7XG4gICAgY29uc3QgbGF0bG9uID0gbG9jUHJvY2Vzcyhsb2MpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0SG91cmx5Rm9yZWNhc3QobGF0bG9uLmxhdCwgbGF0bG9uLmxvbik7XG4gICAgY29uc3QgcHJvY2Vzc2VkSG91cmx5ID0gYXdhaXQgaG91cmx5UHJvY2VzcyhyZXNwb25zZSk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIHJldHVybiBwcm9jZXNzZWRIb3VybHk7XG59XG5leHBvcnQge2NyZWF0ZVdlYXRoZXIsIGdldFdlYXRoZXJHaWYsIGdldFdlYXRoZXJEYXRhLCBnZXRMb2NEYXRhLCB3ZWF0aGVyUHJvY2VzcywgY3JlYXRlV2VhdGhlckhvdXJseX07IiwiaW1wb3J0IFRlbXBJY29uVXJsIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9kZXZpY2VfdGhlcm1vc3RhdF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnO1xuaW1wb3J0IEZlZWxzTGlrZUljb25VcmwgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2Rld19wb2ludF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnO1xuaW1wb3J0IHdlYXRoZXJVcmwgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NsZWFyX2RheV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnXG5pbXBvcnQgd2luZFNwZWVkVXJsIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9haXJfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJ1xuXG5mdW5jdGlvbiBjcmVhdGVDb250YWluZXJzKCkge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtYWluQ29udGFpbmVyJztcbiAgICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWFyY2hCb3guY2xhc3NOYW1lID0gJ3NlYXJjaEJveCc7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gJ2NvbnRlbnQnO1xuICAgIGNvbnN0IHdlYXRoZXJHaWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB3ZWF0aGVyR2lmLmNsYXNzTmFtZSA9ICd3ZWF0aGVyR2lmJztcbiAgICBjb25zdCBocjNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBocjNDb250YWluZXIuY2xhc3NOYW1lID0gJ2hyM0NvbnRhaW5lcic7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbiAgICBmb290ZXIuY2xhc3NOYW1lID0gJ2Zvb3Rlcic7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEJveCk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJHaWYpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaHIzQ29udGFpbmVyKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VhcmNoQm94KCkge1xuICAgIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hCb3gnKTtcblxuICAgIGNvbnN0IGxvY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsb2NJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGxvY0lucHV0Lm5hbWUgPSAnbG9jYXRpb24nO1xuICAgIGxvY0lucHV0LmlkID0gJ2xvY2F0aW9uJztcblxuICAgIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNlYXJjaEJ0bi5pZCA9ICdzZWFyY2hCdG4nO1xuICAgIHNlYXJjaEJ0bi50ZXh0Q29udGVudCA9ICdTZWFyY2gnO1xuXG4gICAgc2VhcmNoQm94LmFwcGVuZENoaWxkKGxvY0lucHV0KTtcbiAgICBzZWFyY2hCb3guYXBwZW5kQ2hpbGQoc2VhcmNoQnRuKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICAgIGNvbnN0IGxvY05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NOYW1lLmNsYXNzTmFtZSA9ICdsb2NOYW1lJztcblxuICAgIGNvbnN0IGxvY1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NUZW1wLmNsYXNzTmFtZSA9ICdsb2NUZW1wJztcblxuICAgIGNvbnN0IHdlYXRoZXJUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VhdGhlclR5cGUuY2xhc3NOYW1lID0gJ3dlYXRoZXJUeXBlJztcblxuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlZWxzTGlrZS5jbGFzc05hbWUgPSAnZmVlbHNMaWtlJztcblxuICAgIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdpbmRTcGVlZC5jbGFzc05hbWUgPSAnd2luZFNwZWVkJztcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9jTmFtZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb2NUZW1wKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdlYXRoZXJUeXBlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZlZWxzTGlrZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuXG4gICAgY29uc3QgbG9jVGVtcEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2NUZW1wSWNvbi5jbGFzc05hbWUgPSAnaW5saW5lSWNvbic7XG4gICAgbG9jVGVtcEljb24uc3JjID0gVGVtcEljb25Vcmw7XG4gICAgY29uc3QgbG9jVGVtcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbG9jVGVtcFRleHQuY2xhc3NOYW1lID0gJ2xvY1RlbXBUZXh0JztcbiAgICBsb2NUZW1wLmFwcGVuZENoaWxkKGxvY1RlbXBJY29uKTtcbiAgICBsb2NUZW1wLmFwcGVuZENoaWxkKGxvY1RlbXBUZXh0KTtcblxuICAgIGNvbnN0IGZlZWxzTGlrZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBmZWVsc0xpa2VJY29uLmNsYXNzTmFtZSA9ICdpbmxpbmVJY29uJztcbiAgICBmZWVsc0xpa2VJY29uLnNyYyA9IEZlZWxzTGlrZUljb25Vcmw7XG4gICAgY29uc3QgZmVlbHNMaWtlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBmZWVsc0xpa2VUZXh0LmNsYXNzTmFtZSA9ICdmZWVsc0xpa2VUZXh0JztcbiAgICBmZWVsc0xpa2UuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlSWNvbik7XG4gICAgZmVlbHNMaWtlLmFwcGVuZENoaWxkKGZlZWxzTGlrZVRleHQpO1xuXG4gICAgY29uc3Qgd2VhdGhlclR5cGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgd2VhdGhlclR5cGVJY29uLmNsYXNzTmFtZSA9ICdpbmxpbmVJY29uJztcbiAgICB3ZWF0aGVyVHlwZUljb24uc3JjID0gd2VhdGhlclVybDtcbiAgICBjb25zdCB3ZWF0aGVyVHlwZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgd2VhdGhlclR5cGVUZXh0LmNsYXNzTmFtZSA9ICd3ZWF0aGVyVHlwZVRleHQnO1xuICAgIHdlYXRoZXJUeXBlLmFwcGVuZENoaWxkKHdlYXRoZXJUeXBlSWNvbik7XG4gICAgd2VhdGhlclR5cGUuYXBwZW5kQ2hpbGQod2VhdGhlclR5cGVUZXh0KTtcblxuICAgIGNvbnN0IHdpbmRTcGVlZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB3aW5kU3BlZWRJY29uLmNsYXNzTmFtZSA9ICdpbmxpbmVJY29uJztcbiAgICB3aW5kU3BlZWRJY29uLnNyYyA9IHdpbmRTcGVlZFVybDtcbiAgICBjb25zdCB3aW5kU3BlZWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHdpbmRTcGVlZFRleHQuY2xhc3NOYW1lID0gJ3dpbmRTcGVlZFRleHQnO1xuICAgIHdpbmRTcGVlZC5hcHBlbmRDaGlsZCh3aW5kU3BlZWRJY29uKTtcbiAgICB3aW5kU3BlZWQuYXBwZW5kQ2hpbGQod2luZFNwZWVkVGV4dCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlckVsZW1zKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKTtcbiAgICBjb25zdCBjaXR5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNpdHkxLmNsYXNzTmFtZSA9ICdjaXR5MSc7XG5cbiAgICBjb25zdCBjaXR5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNpdHkyLmNsYXNzTmFtZSA9ICdjaXR5Mic7XG5cbiAgICBjb25zdCBjaXR5MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNpdHkzLmNsYXNzTmFtZSA9ICdjaXR5Myc7XG5cbiAgICBjb25zdCBjaXR5NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNpdHk0LmNsYXNzTmFtZSA9ICdjaXR5NCc7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY2l0eTEpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjaXR5Mik7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNpdHkzKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY2l0eTQpO1xufVxuXG5mdW5jdGlvbiBpbml0RG9jdW1lbnQoKSB7XG4gICAgY3JlYXRlQ29udGFpbmVycygpO1xuICAgIGNyZWF0ZVNlYXJjaEJveCgpO1xuICAgIGNyZWF0ZUNvbnRlbnQoKTtcbiAgICBjcmVhdGVGb290ZXJFbGVtcygpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlM0hyRWxlbShob3VybHlXZWF0aGVyT2JqKSB7XG4gICAgY29uc29sZS5sb2coaG91cmx5V2VhdGhlck9iaik7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhyM0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhyRWxlbS5jbGFzc05hbWUgPSAnaHJFbGVtJztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaHJFbGVtKTtcblxuICAgIGNvbnN0IGxvY05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NOYW1lLnRleHRDb250ZW50ID0gaG91cmx5V2VhdGhlck9iai50aW1lO1xuXG4gICAgY29uc3QgbG9jVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY1RlbXAudGV4dENvbnRlbnQgPSAnVGVtcGVyYXR1cmU6ICcgKyBob3VybHlXZWF0aGVyT2JqLnRlbXA7XG5cbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSAnRmVlbHMgbGlrZTogJyArIGhvdXJseVdlYXRoZXJPYmouZmVlbHNMaWtlO1xuXG4gICAgY29uc3Qgd2VhdGhlclR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB3ZWF0aGVyVHlwZS5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8ke2hvdXJseVdlYXRoZXJPYmoud2VhdGhlckljb259LnBuZ2A7XG5cbiAgICBockVsZW0uYXBwZW5kQ2hpbGQobG9jTmFtZSk7XG4gICAgaHJFbGVtLmFwcGVuZENoaWxkKGxvY1RlbXApO1xuICAgIGhyRWxlbS5hcHBlbmRDaGlsZChmZWVsc0xpa2UpO1xuICAgIGhyRWxlbS5hcHBlbmRDaGlsZCh3ZWF0aGVyVHlwZSk7XG59XG5cbmZ1bmN0aW9uIHNldFdlYXRoZXJHaWYoZ2lmVXJsKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJHaWYnKS5zcmMgPSBnaWZVcmw7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkRWxlbWVudHNoM2UoKSB7XG4gICAgY29uc3QgaDNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhyM0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGxlbmd0aCA9IGgzZS5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGgzZS5yZW1vdmVDaGlsZChoM2UuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRDb250ZW50KHdlYXRoZXJPYmopIHtcbiAgICBjb25zdCBsb2NOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY05hbWUnKTtcbiAgICBjb25zdCBsb2NUZW1wVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NUZW1wVGV4dCcpO1xuICAgIGNvbnN0IGZlZWxzTGlrZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHNMaWtlVGV4dCcpXG4gICAgY29uc3Qgd2VhdGhlclR5cGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJUeXBlVGV4dCcpO1xuICAgIGNvbnN0IHdpbmRTcGVlZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZFNwZWVkVGV4dCcpO1xuXG4gICAgbG9jTmFtZS50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoubmFtZTtcbiAgICBsb2NUZW1wVGV4dC50ZXh0Q29udGVudCA9ICdUZW1wZXJhdHVyZTogJyArIHdlYXRoZXJPYmoudGVtcCArICcgwrBDJztcbiAgICBmZWVsc0xpa2VUZXh0LnRleHRDb250ZW50ID0gJ0ZlZWxzIGxpa2U6ICcgKyB3ZWF0aGVyT2JqLmZlZWxzTGlrZSArICcgwrBDJztcbiAgICB3ZWF0aGVyVHlwZVRleHQudGV4dENvbnRlbnQgPSAnV2VhdGhlcjogJyArIHdlYXRoZXJPYmoud2VhdGhlclR5cGU7XG4gICAgd2luZFNwZWVkVGV4dC50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoud2luZFNwZWVkICsgJyBtL3MnO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUZvb3RlcihjaXR5MSwgY2l0eTIsIGNpdHkzLCBjaXR5NCkge1xuICAgIGNvbnN0IGVsZW1DaXR5MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5MScpO1xuICAgIGNvbnN0IGVsZW1DaXR5MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5MicpO1xuICAgIGNvbnN0IGVsZW1DaXR5MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5MycpO1xuICAgIGNvbnN0IGVsZW1DaXR5NCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5NCcpO1xuXG4gICAgZWxlbUNpdHkxLnRleHRDb250ZW50ID0gY2l0eTEubmFtZSArICc6ICcgKyBjaXR5MS50ZW1wICsgJ8KwQyc7XG4gICAgZWxlbUNpdHkxLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJldHVybkNvbG9yKGNpdHkxLnRlbXApO1xuXG4gICAgZWxlbUNpdHkyLnRleHRDb250ZW50ID0gY2l0eTIubmFtZSArICc6ICcgKyBjaXR5Mi50ZW1wICsgJ8KwQyc7XG4gICAgZWxlbUNpdHkyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJldHVybkNvbG9yKGNpdHkyLnRlbXApO1xuXG4gICAgZWxlbUNpdHkzLnRleHRDb250ZW50ID0gY2l0eTMubmFtZSArICc6ICcgKyBjaXR5My50ZW1wICsgJ8KwQyc7XG4gICAgZWxlbUNpdHkzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJldHVybkNvbG9yKGNpdHkzLnRlbXApO1xuXG4gICAgZWxlbUNpdHk0LnRleHRDb250ZW50ID0gY2l0eTQubmFtZSArICc6ICcgKyBjaXR5NC50ZW1wICsgJ8KwQyc7XG4gICAgZWxlbUNpdHk0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJldHVybkNvbG9yKGNpdHk0LnRlbXApO1xufVxuXG5mdW5jdGlvbiByZXR1cm5Db2xvcih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA8PSAtMSkge1xuICAgICAgICByZXR1cm4gJ3NreWJsdWUnO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSAxMCkge1xuICAgICAgICByZXR1cm4gJ2dyZWVueWVsbG93JztcbiAgICB9IGVsc2UgaWYgKHZhbHVlID49IDExICYmIHZhbHVlIDw9IDI5KSB7XG4gICAgICAgIHJldHVybiAneWVsbG93JztcbiAgICB9IGVsc2UgaWYgKHZhbHVlID49IDMwKSB7XG4gICAgICAgIHJldHVybiAncmVkJztcbiAgICB9XG59XG5cblxuZXhwb3J0IHsgY3JlYXRlQ3VycmVudENvbnRlbnQsIHBvcHVsYXRlRm9vdGVyLCBpbml0RG9jdW1lbnQsIHNldFdlYXRoZXJHaWYsIGNyZWF0ZTNIckVsZW0sIHJlbW92ZUNoaWxkRWxlbWVudHNoM2UgfTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZVdlYXRoZXIsIGdldFdlYXRoZXJHaWYsIGdldFdlYXRoZXJEYXRhLCBnZXRMb2NEYXRhLCB3ZWF0aGVyUHJvY2VzcywgY3JlYXRlV2VhdGhlckhvdXJseSB9IGZyb20gXCIuL0FQSSBjYWxscy9nZXRXZWF0aGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDdXJyZW50Q29udGVudCwgcG9wdWxhdGVGb290ZXIsIGluaXREb2N1bWVudCwgc2V0V2VhdGhlckdpZiwgY3JlYXRlM0hyRWxlbSwgcmVtb3ZlQ2hpbGRFbGVtZW50c2gzZSB9IGZyb20gXCIuL2dlbmVyYXRlRE9NZWxlbS9jcmVhdGVEb21cIjtcblxubGV0IGNpdHlOYW1lID0gJ29zbG8nO1xuXG5mdW5jdGlvbiBhZGRFdmVudHMoKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaEJ0bicpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uJyk7XG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjaXR5TmFtZSA9IGlucHV0LnZhbHVlO1xuICAgIHBvcHVsYXRlRG9tKGNpdHlOYW1lKTtcbn0pO1xuXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJ0bi5jbGljaygpO1xuICAgIH1cbn0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwb3B1bGF0ZURvbShjaXR5TmFtZSkge1xuICAgIGNvbnN0IHdlYXRoZXJPYmogPSBhd2FpdCBjcmVhdGVXZWF0aGVyKGNpdHlOYW1lKTtcbiAgICBjcmVhdGVDdXJyZW50Q29udGVudCh3ZWF0aGVyT2JqKTtcbiAgICBjb25zdCB3ZWF0aGVyR2lmID0gYXdhaXQgZ2V0V2VhdGhlckdpZih3ZWF0aGVyT2JqLndlYXRoZXJUeXBlKTtcbiAgICBzZXRXZWF0aGVyR2lmKHdlYXRoZXJHaWYpO1xuICAgIHJlbW92ZUNoaWxkRWxlbWVudHNoM2UoKTtcbiAgICBjb25zdCBob3VybHlXZWF0aGVyID0gYXdhaXQgY3JlYXRlV2VhdGhlckhvdXJseShjaXR5TmFtZSk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGhvdXJseVdlYXRoZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBob3VybHlXZWF0aGVyW2luZGV4XTtcbiAgICBjcmVhdGUzSHJFbGVtKGVsZW1lbnQpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhob3VybHlXZWF0aGVyKTtcblxufVxuXG5hc3luYyBmdW5jdGlvbiBmb290ZXJEYXRhKCkge1xuICAgIHRyeSB7XG4gICAgbGV0IGxvYyA9IGF3YWl0IGdldExvY0RhdGEoJ09zbG8nKTtcbiAgICBsZXQgY2l0eURhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NbMF0ubGF0LCBsb2NbMF0ubG9uKTtcbiAgICBjb25zdCBjaXR5MSA9IHdlYXRoZXJQcm9jZXNzKGNpdHlEYXRhKTtcblxuICAgICBsb2MgPSBhd2FpdCBnZXRMb2NEYXRhKCdMb25kb24nKTtcbiAgICAgY2l0eURhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NbMF0ubGF0LCBsb2NbMF0ubG9uKTtcbiAgICBjb25zdCBjaXR5MiA9IHdlYXRoZXJQcm9jZXNzKGNpdHlEYXRhKTtcblxuICAgICBsb2MgPSBhd2FpdCBnZXRMb2NEYXRhKCdNYWRyaWQnKTtcbiAgICAgY2l0eURhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NbMF0ubGF0LCBsb2NbMF0ubG9uKTtcbiAgICBjb25zdCBjaXR5MyA9IHdlYXRoZXJQcm9jZXNzKGNpdHlEYXRhKTtcblxuICAgICBsb2MgPSBhd2FpdCBnZXRMb2NEYXRhKCdPcmxhbmRvJyk7XG4gICAgIGNpdHlEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jWzBdLmxhdCwgbG9jWzBdLmxvbik7XG4gICAgY29uc3QgY2l0eTQgPSB3ZWF0aGVyUHJvY2VzcyhjaXR5RGF0YSk7XG5cbiAgICBwb3B1bGF0ZUZvb3RlcihjaXR5MSwgY2l0eTIsIGNpdHkzLCBjaXR5NCk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICAgIFxufVxuXG5cbmluaXREb2N1bWVudCgpO1xucG9wdWxhdGVEb20oY2l0eU5hbWUpO1xuZm9vdGVyRGF0YSgpO1xuYWRkRXZlbnRzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=