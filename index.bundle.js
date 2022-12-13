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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    width: 100vw;\n    height: 100vh;\n    background-image: url('https://ugc.berkeley.edu/wp-content/uploads/2016/01/thunderstorm-3625405_1920-1536x864.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-color: #142354;\n    display: flex;\n    justify-content: center;\n    overflow: hidden;\n}\n\n@media only screen and (max-width: 750px) {\n    .mainContainer {width: 100vw; height: 90vh;}\n    .searchBox {width: 50px; height: 100px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .contentContainer{padding: 2px;}\n    .content {width: 320px; height: 110px; }\n    .weatherGif{width: 320px;}\n    .hr3Container{width: 330px; font-size: 0.6em;}\n    .hrElem{width: 50px; padding: 5px; height: 105px;}\n    .hrElem img{width: 35px;}\n    .footer{width: 320px; height: 50px;}\n}\n\n@media only screen and (min-width: 750px) {\n    .mainContainer {width: 100vw; height: 95vh;}\n    .searchBox {width: 50px; height: 100px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .contentContainer{padding: 15px;}\n    .content {width: 450px; height: 110px;}\n    .weatherGif{width: 500px;}\n    .hr3Container{width: 600px; font-size: 0.7em;}\n    .hrElem{width: 90px; padding: 5px; height: 105px;}\n    .hrElem img{width: 40px;}\n    .footer{width: 700px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n\n@media only screen and (min-width: 1000px) {\n    .mainContainer {width: 100vw; height: 95vh;}\n    .searchBox {width: 50px; height: 100px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .contentContainer{padding: 15px;}\n    .content {width: 450px; height: 110px;}\n    .weatherGif{width: 400px;}\n    .hr3Container{width: 900px; font-size: 0.8em;}\n    .hrElem{width: 150px; padding: 5px; height: 105px;}\n    .hrElem img{width: 55px;}\n    .footer{width: 900px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n@media only screen and (min-width: 1400px) {\n    .mainContainer {width: 100vw; height: 95vh;}\n    .searchBox {width: 50px; height: 100px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .contentContainer{padding: 15px;}\n    .content {width: 450px; height: 110px;}\n    .weatherGif{width: 400px;}\n    .hr3Container{width: 900px; font-size: 0.8em;}\n    .hrElem{width: 150px; padding: 5px; height: 105px;}\n    .hrElem img{width: 55px;}\n    .footer{width: 900px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n@media only screen and (min-width: 2560px) {\n    .mainContainer {width: 100vw; height: 95vh;}\n    .searchBox {width: 50px; height: 100px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .contentContainer{padding: 15px;}\n    .content {width: 450px; height: 110px;}\n    .weatherGif{width: 400px;}\n    .hr3Container{width: 900px; font-size: 0.8em;}\n    .hrElem{width: 150px; padding: 5px; height: 105px;}\n    .hrElem img{width: 55px;}\n    .footer{width: 900px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n\n.mainContainer {\n    font-family: 'Courier New', Courier, monospace;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n\n\n}\n\n.searchBox {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.dropdownContainer {\n    display: none;\n    margin-top: 5px;\n    width: 300px;\n    height: 300px;\n}\n.dropdownElements {\n    display: flex;\n    flex-wrap: wrap;\n    width: 300px;\n    justify-content: space-between;\n    position: absolute;\n\n}\n\n.menuBtn {\n    background-color: aliceblue;\n    border: 2px solid black;\n    border-radius: 5px;\n    text-align: center;\n    margin-top: 1px;\n}\n\n.menuBtn:hover {\n    cursor: pointer;\n}\n\n#location {\n    text-align: center;\n    border: 2px solid black;\n    border-radius: 5px;\n}\n\n.content {\n    display: grid;\n    justify-content: space-between;\n    align-items: flex-start;\n    \n}\n.contentContainer {\n    background-color: aliceblue;\n    border: 2px solid black;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.locName {\n    grid-column: 1 / 3;\n    font-size: 2em;\n    font-weight: bold;\n    text-align: center;\n}\n\n.weatherGif {\n    border: 5px solid black;\n    border-radius: 15px;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nfooter div {\n    background-color: aliceblue;\n    border: 2px solid black;\n    border-radius: 5px;\n    text-align: center;\n\n}\n\n.hr3Container {\n    display: flex;\n    justify-content: center;\n    \n}\n\n.hrElem {\n    background-color: aliceblue;\n    border: 2px solid black;\n    border-radius: 10px;\n}\n\n\n\n.hrElem :first-child {\n    font-weight: bold;\n    text-align: center;\n    border-bottom: 2px solid black;\n}\n\n.hrElem img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border: 2px solid black;\n    border-radius: 50px;\n    background-color: steelblue;\n}\n\n.inlineIcon {\n    display: inline;\n    margin: 0 0.125em;\n    padding: 0;\n    vertical-align: baseline;\n    height: 0.8em;\n    width: 0.8em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    width: 100vw;\n    height: 100vh;\n    background-image: url('https://ugc.berkeley.edu/wp-content/uploads/2016/01/thunderstorm-3625405_1920-1536x864.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-color: #142354;\n    display: flex;\n    justify-content: center;\n    overflow: hidden;\n}\n\n@media only screen and (max-width: 750px) {\n    .mainContainer {width: 100vw; height: 90vh;}\n    .searchBox {width: 50px; height: 100px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .contentContainer{padding: 2px;}\n    .content {width: 320px; height: 110px; }\n    .weatherGif{width: 320px;}\n    .hr3Container{width: 330px; font-size: 0.6em;}\n    .hrElem{width: 50px; padding: 5px; height: 105px;}\n    .hrElem img{width: 35px;}\n    .footer{width: 320px; height: 50px;}\n}\n\n@media only screen and (min-width: 750px) {\n    .mainContainer {width: 100vw; height: 95vh;}\n    .searchBox {width: 50px; height: 100px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .contentContainer{padding: 15px;}\n    .content {width: 450px; height: 110px;}\n    .weatherGif{width: 500px;}\n    .hr3Container{width: 600px; font-size: 0.7em;}\n    .hrElem{width: 90px; padding: 5px; height: 105px;}\n    .hrElem img{width: 40px;}\n    .footer{width: 700px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n\n@media only screen and (min-width: 1000px) {\n    .mainContainer {width: 100vw; height: 95vh;}\n    .searchBox {width: 50px; height: 100px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .contentContainer{padding: 15px;}\n    .content {width: 450px; height: 110px;}\n    .weatherGif{width: 400px;}\n    .hr3Container{width: 900px; font-size: 0.8em;}\n    .hrElem{width: 150px; padding: 5px; height: 105px;}\n    .hrElem img{width: 55px;}\n    .footer{width: 900px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n@media only screen and (min-width: 1400px) {\n    .mainContainer {width: 100vw; height: 95vh;}\n    .searchBox {width: 50px; height: 100px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .contentContainer{padding: 15px;}\n    .content {width: 450px; height: 110px;}\n    .weatherGif{width: 400px;}\n    .hr3Container{width: 900px; font-size: 0.8em;}\n    .hrElem{width: 150px; padding: 5px; height: 105px;}\n    .hrElem img{width: 55px;}\n    .footer{width: 900px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n@media only screen and (min-width: 2560px) {\n    .mainContainer {width: 100vw; height: 95vh;}\n    .searchBox {width: 50px; height: 100px;}\n    button {width: 100px; height: 35px; margin-top: 5px;}\n    .contentContainer{padding: 15px;}\n    .content {width: 450px; height: 110px;}\n    .weatherGif{width: 400px;}\n    .hr3Container{width: 900px; font-size: 0.8em;}\n    .hrElem{width: 150px; padding: 5px; height: 105px;}\n    .hrElem img{width: 55px;}\n    .footer{width: 900px; height: 40px;}\n    .footer div{padding: 10px;}\n}\n\n.mainContainer {\n    font-family: 'Courier New', Courier, monospace;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n\n\n}\n\n.searchBox {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.dropdownContainer {\n    display: none;\n    margin-top: 5px;\n    width: 300px;\n    height: 300px;\n}\n.dropdownElements {\n    display: flex;\n    flex-wrap: wrap;\n    width: 300px;\n    justify-content: space-between;\n    position: absolute;\n\n}\n\n.menuBtn {\n    background-color: aliceblue;\n    border: 2px solid black;\n    border-radius: 5px;\n    text-align: center;\n    margin-top: 1px;\n}\n\n.menuBtn:hover {\n    cursor: pointer;\n}\n\n#location {\n    text-align: center;\n    border: 2px solid black;\n    border-radius: 5px;\n}\n\n.content {\n    display: grid;\n    justify-content: space-between;\n    align-items: flex-start;\n    \n}\n.contentContainer {\n    background-color: aliceblue;\n    border: 2px solid black;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.locName {\n    grid-column: 1 / 3;\n    font-size: 2em;\n    font-weight: bold;\n    text-align: center;\n}\n\n.weatherGif {\n    border: 5px solid black;\n    border-radius: 15px;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nfooter div {\n    background-color: aliceblue;\n    border: 2px solid black;\n    border-radius: 5px;\n    text-align: center;\n\n}\n\n.hr3Container {\n    display: flex;\n    justify-content: center;\n    \n}\n\n.hrElem {\n    background-color: aliceblue;\n    border: 2px solid black;\n    border-radius: 10px;\n}\n\n\n\n.hrElem :first-child {\n    font-weight: bold;\n    text-align: center;\n    border-bottom: 2px solid black;\n}\n\n.hrElem img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border: 2px solid black;\n    border-radius: 50px;\n    background-color: steelblue;\n}\n\n.inlineIcon {\n    display: inline;\n    margin: 0 0.125em;\n    padding: 0;\n    vertical-align: baseline;\n    height: 0.8em;\n    width: 0.8em;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "getHourlyForecast": () => (/* binding */ getHourlyForecast),
/* harmony export */   "getLocData": () => (/* binding */ getLocData),
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData),
/* harmony export */   "getWeatherGif": () => (/* binding */ getWeatherGif),
/* harmony export */   "hourlyProcess": () => (/* binding */ hourlyProcess),
/* harmony export */   "weatherProcess": () => (/* binding */ weatherProcess)
/* harmony export */ });
let key = 'f311acbde5084d948501ed5874b9b20e';
let unit = 'metric';

//API calls

async function getLocData(loc) {
    //gets longitude and latitude of string name   
    const locURL = `https://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=5&appid=${key}`;
    try {
        const response = await fetch(locURL, { mode: 'cors' });
        const locData = await response.json();
        return locData;
    } catch (error) {
        console.log(error);
    }

}

async function getWeatherData(lat, lon) {

    try {
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`
        const response = await fetch(weatherURL, { mode: 'cors' });
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
        const response = await fetch(giphyURL, { mode: 'cors' });
        const weatherGif = await response.json();
        return weatherGif.data[0].images.original.url;
    } catch (error) {
        console.log(error)
    }
}

async function getHourlyForecast(lat, lon) {
    try {
        const hourlyUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${unit}&cnt=5`;
        const response = await fetch(hourlyUrl, { mode: 'cors' });
        const hourlyWeather = await response.json();
        return hourlyWeather;
    } catch (error) {
        console.log(error)
    }
}

//data processing
function weatherProcess(weatherData) {
    let name = weatherData.name;
    let country = weatherData.sys.country
    let temp = weatherData.main.temp;
    let feelsLike = weatherData.main.feels_like;
    let weatherType = weatherData.weather[0].main;
    let windSpeed = weatherData.wind.speed;

    return { name, country, temp, feelsLike, weatherType, windSpeed };
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
        const weatherObj = { time, temp, feelsLike, weatherIcon };
        hr3Array.push(weatherObj);
    }
    return hr3Array;
}


// init
async function createWeather(locName) {
    const locData = await getLocData(locName);
    let loc = locProcess(locData);
    let weatherData = await getWeatherData(loc.lat, loc.lon);
    const weatherProcessed = weatherProcess(weatherData);
    return weatherProcessed;
}



async function createWeatherHourly(locName) {
    const loc = await getLocData(locName);
    const latlon = locProcess(loc);
    const response = await getHourlyForecast(latlon.lat, latlon.lon);
    const processedHourly = await hourlyProcess(response);
    return processedHourly;
}


/***/ }),

/***/ "./src/Events/dropdownMenu.js":
/*!************************************!*\
  !*** ./src/Events/dropdownMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDropDownMenu": () => (/* binding */ createDropDownMenu),
/* harmony export */   "dropdownToggle": () => (/* binding */ dropdownToggle)
/* harmony export */ });
function createDropDownMenu (btn, dropdownElements) {
    btn.addEventListener('click', (e) => {

        if(e.target !== e.currentTarget) {
            return;
        }
        dropdownToggle(dropdownElements);
    });
}
   //function to toggle display style between 'block' and 'none' on a DOM element
function dropdownToggle(toggleElement) {
    if(toggleElement.style.display !== 'block') {
        toggleElement.style.display = 'block';
    }
    else {
        return;
        //toggleElement.style.display = 'none';
    }
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
/* harmony export */   "createDropDownOptions": () => (/* binding */ createDropDownOptions),
/* harmony export */   "initDocument": () => (/* binding */ initDocument),
/* harmony export */   "populateFooter": () => (/* binding */ populateFooter),
/* harmony export */   "removeAllChildElement": () => (/* binding */ removeAllChildElement),
/* harmony export */   "setWeatherGif": () => (/* binding */ setWeatherGif)
/* harmony export */ });
/* harmony import */ var _assets_icons_device_thermostat_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/device_thermostat_FILL0_wght400_GRAD0_opsz48.svg */ "./src/assets/icons/device_thermostat_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _assets_icons_dew_point_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/dew_point_FILL0_wght400_GRAD0_opsz48.svg */ "./src/assets/icons/dew_point_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _assets_icons_clear_day_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/clear_day_FILL0_wght400_GRAD0_opsz48.svg */ "./src/assets/icons/clear_day_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _assets_icons_air_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/air_FILL0_wght400_GRAD0_opsz48.svg */ "./src/assets/icons/air_FILL0_wght400_GRAD0_opsz48.svg");





//DOM init functions
function createContainers() {
    const mainContainer = document.createElement('div');
    mainContainer.className = 'mainContainer';
    const searchBox = document.createElement('div');
    searchBox.className = 'searchBox';
    const content = document.createElement('div');
    content.className = 'content';
    const contentContainer = document.createElement('div');
    contentContainer.className = 'contentContainer';
    const weatherGif = document.createElement('img');
    weatherGif.className = 'weatherGif';
    const hr3Container = document.createElement('div');
    hr3Container.className = 'hr3Container';
    const footer = document.createElement('footer')
    footer.className = 'footer';

    mainContainer.appendChild(searchBox);
    mainContainer.appendChild(contentContainer);
    contentContainer.appendChild(content);
    contentContainer.appendChild(weatherGif);
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
    searchBox.appendChild(locInput);


    const searchBtn = document.createElement('button');
    searchBtn.id = 'searchBtn';
    searchBtn.textContent = 'Search';
    searchBox.appendChild(searchBtn);

    const dropdownContainer = document.createElement('div');
    dropdownContainer.className = 'dropdownContainer';
    const dropdownElements = document.createElement('div');
    dropdownElements.className = 'dropdownElements';
    dropdownContainer.appendChild(dropdownElements);

    searchBox.appendChild(dropdownContainer);

    
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

//Dynamic Element functions
function createDropDownOptions(responseAmount) {
    const dropdownElements = document.querySelector('.dropdownElements');
    removeAllChildElement('dropdownElements');
    for (let index = 1; index <= responseAmount; index++) {
        const element = document.createElement('div');
        element.className = 'menuBtn';
        element.id = `item${index}`;
        dropdownElements.appendChild(element);
    }
}
function create3HrElem(hourlyWeatherObj) {
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



function createCurrentContent(weatherObj) {
    const locName = document.querySelector('.locName');
    const locTempText = document.querySelector('.locTempText');
    const feelsLikeText = document.querySelector('.feelsLikeText')
    const weatherTypeText = document.querySelector('.weatherTypeText');
    const windSpeedText = document.querySelector('.windSpeedText');

    locName.textContent = `${weatherObj.name}, ${weatherObj.country}`;
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

// utility
function removeAllChildElement(classname) {
    const parent = document.querySelector(`.${classname}`);
    const length = parent.children.length;
    for (let index = 0; index < length; index++) {
        parent.removeChild(parent.firstChild);
    }
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
/* harmony import */ var _Events_dropdownMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Events/dropdownMenu */ "./src/Events/dropdownMenu.js");





let cityName = 'oslo';

function addEvents() {
    const btn = document.querySelector('#searchBtn');
    const input = document.querySelector('#location');
    (0,_Events_dropdownMenu__WEBPACK_IMPORTED_MODULE_3__.createDropDownMenu)(btn, document.querySelector('.dropdownContainer'));

    btn.addEventListener('click', async () => {
        cityName = input.value;
        const cities = await getLocations(cityName);
        (0,_generateDOMelem_createDom__WEBPACK_IMPORTED_MODULE_2__.createDropDownOptions)(cities.length);
        for (let index = 0; index < cities.length; index++) {
            const element = cities[index];
            const DomElement = document.querySelector(`#item${index + 1}`);
            DomElement.textContent = `${element.name}, ${element.country}`;
            DomElement.addEventListener('click', async (e) => {
                const weatherData = await (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(element.lat, element.lon);
                const weatherProcessed = (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.weatherProcess)(weatherData);
                (0,_Events_dropdownMenu__WEBPACK_IMPORTED_MODULE_3__.dropdownToggle)(document.querySelector('.dropdownContainer'));
                (0,_generateDOMelem_createDom__WEBPACK_IMPORTED_MODULE_2__.createCurrentContent)(weatherProcessed);
                const weatherGif = await (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.getWeatherGif)(weatherProcessed.weatherType);
                (0,_generateDOMelem_createDom__WEBPACK_IMPORTED_MODULE_2__.setWeatherGif)(weatherGif);
                (0,_generateDOMelem_createDom__WEBPACK_IMPORTED_MODULE_2__.removeAllChildElement)('hr3Container');
                const hourlyWeather = await (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.getHourlyForecast)(element.lat, element.lon);
                const hourlyWeatherProcessed = await (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.hourlyProcess)(hourlyWeather);
                for (let index = 0; index < hourlyWeatherProcessed.length; index++) {
                    const element = hourlyWeatherProcessed[index];
                    (0,_generateDOMelem_createDom__WEBPACK_IMPORTED_MODULE_2__.create3HrElem)(element);
                }

            });

        }
        //populateDom(cityName);
    });

    input.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
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
    (0,_generateDOMelem_createDom__WEBPACK_IMPORTED_MODULE_2__.removeAllChildElement)('hr3Container');
    const hourlyWeather = await (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.createWeatherHourly)(cityName);
    for (let index = 0; index < hourlyWeather.length; index++) {
        const element = hourlyWeather[index];
        (0,_generateDOMelem_createDom__WEBPACK_IMPORTED_MODULE_2__.create3HrElem)(element);
    }
}

async function getLocations(cityName) {
    const locObj = await (0,_API_calls_getWeather__WEBPACK_IMPORTED_MODULE_1__.getLocData)(cityName);
    return locObj;

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
getLocations(cityName);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvQVBJIGNhbGxzL2dldFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9FdmVudHMvZHJvcGRvd25NZW51LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2VuZXJhdGVET01lbGVtL2NyZWF0ZURvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3VnYy5iZXJrZWxleS5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDEvdGh1bmRlcnN0b3JtLTM2MjU0MDVfMTkyMC0xNTM2eDg2NC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjM1NDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgLm1haW5Db250YWluZXIge3dpZHRoOiAxMDB2dzsgaGVpZ2h0OiA5MHZoO31cXG4gICAgLnNlYXJjaEJveCB7d2lkdGg6IDUwcHg7IGhlaWdodDogMTAwcHg7fVxcbiAgICBidXR0b24ge3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAzNXB4OyBtYXJnaW4tdG9wOiA1cHg7fVxcbiAgICAuY29udGVudENvbnRhaW5lcntwYWRkaW5nOiAycHg7fVxcbiAgICAuY29udGVudCB7d2lkdGg6IDMyMHB4OyBoZWlnaHQ6IDExMHB4OyB9XFxuICAgIC53ZWF0aGVyR2lme3dpZHRoOiAzMjBweDt9XFxuICAgIC5ocjNDb250YWluZXJ7d2lkdGg6IDMzMHB4OyBmb250LXNpemU6IDAuNmVtO31cXG4gICAgLmhyRWxlbXt3aWR0aDogNTBweDsgcGFkZGluZzogNXB4OyBoZWlnaHQ6IDEwNXB4O31cXG4gICAgLmhyRWxlbSBpbWd7d2lkdGg6IDM1cHg7fVxcbiAgICAuZm9vdGVye3dpZHRoOiAzMjBweDsgaGVpZ2h0OiA1MHB4O31cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xcbiAgICAubWFpbkNvbnRhaW5lciB7d2lkdGg6IDEwMHZ3OyBoZWlnaHQ6IDk1dmg7fVxcbiAgICAuc2VhcmNoQm94IHt3aWR0aDogNTBweDsgaGVpZ2h0OiAxMDBweDt9XFxuICAgIGJ1dHRvbiB7d2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDM1cHg7IG1hcmdpbi10b3A6IDVweDt9XFxuICAgIC5jb250ZW50Q29udGFpbmVye3BhZGRpbmc6IDE1cHg7fVxcbiAgICAuY29udGVudCB7d2lkdGg6IDQ1MHB4OyBoZWlnaHQ6IDExMHB4O31cXG4gICAgLndlYXRoZXJHaWZ7d2lkdGg6IDUwMHB4O31cXG4gICAgLmhyM0NvbnRhaW5lcnt3aWR0aDogNjAwcHg7IGZvbnQtc2l6ZTogMC43ZW07fVxcbiAgICAuaHJFbGVte3dpZHRoOiA5MHB4OyBwYWRkaW5nOiA1cHg7IGhlaWdodDogMTA1cHg7fVxcbiAgICAuaHJFbGVtIGltZ3t3aWR0aDogNDBweDt9XFxuICAgIC5mb290ZXJ7d2lkdGg6IDcwMHB4OyBoZWlnaHQ6IDQwcHg7fVxcbiAgICAuZm9vdGVyIGRpdntwYWRkaW5nOiAxMHB4O31cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLm1haW5Db250YWluZXIge3dpZHRoOiAxMDB2dzsgaGVpZ2h0OiA5NXZoO31cXG4gICAgLnNlYXJjaEJveCB7d2lkdGg6IDUwcHg7IGhlaWdodDogMTAwcHg7fVxcbiAgICBidXR0b24ge3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAzNXB4OyBtYXJnaW4tdG9wOiA1cHg7fVxcbiAgICAuY29udGVudENvbnRhaW5lcntwYWRkaW5nOiAxNXB4O31cXG4gICAgLmNvbnRlbnQge3dpZHRoOiA0NTBweDsgaGVpZ2h0OiAxMTBweDt9XFxuICAgIC53ZWF0aGVyR2lme3dpZHRoOiA0MDBweDt9XFxuICAgIC5ocjNDb250YWluZXJ7d2lkdGg6IDkwMHB4OyBmb250LXNpemU6IDAuOGVtO31cXG4gICAgLmhyRWxlbXt3aWR0aDogMTUwcHg7IHBhZGRpbmc6IDVweDsgaGVpZ2h0OiAxMDVweDt9XFxuICAgIC5ockVsZW0gaW1ne3dpZHRoOiA1NXB4O31cXG4gICAgLmZvb3Rlcnt3aWR0aDogOTAwcHg7IGhlaWdodDogNDBweDt9XFxuICAgIC5mb290ZXIgZGl2e3BhZGRpbmc6IDEwcHg7fVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xcbiAgICAubWFpbkNvbnRhaW5lciB7d2lkdGg6IDEwMHZ3OyBoZWlnaHQ6IDk1dmg7fVxcbiAgICAuc2VhcmNoQm94IHt3aWR0aDogNTBweDsgaGVpZ2h0OiAxMDBweDt9XFxuICAgIGJ1dHRvbiB7d2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDM1cHg7IG1hcmdpbi10b3A6IDVweDt9XFxuICAgIC5jb250ZW50Q29udGFpbmVye3BhZGRpbmc6IDE1cHg7fVxcbiAgICAuY29udGVudCB7d2lkdGg6IDQ1MHB4OyBoZWlnaHQ6IDExMHB4O31cXG4gICAgLndlYXRoZXJHaWZ7d2lkdGg6IDQwMHB4O31cXG4gICAgLmhyM0NvbnRhaW5lcnt3aWR0aDogOTAwcHg7IGZvbnQtc2l6ZTogMC44ZW07fVxcbiAgICAuaHJFbGVte3dpZHRoOiAxNTBweDsgcGFkZGluZzogNXB4OyBoZWlnaHQ6IDEwNXB4O31cXG4gICAgLmhyRWxlbSBpbWd7d2lkdGg6IDU1cHg7fVxcbiAgICAuZm9vdGVye3dpZHRoOiA5MDBweDsgaGVpZ2h0OiA0MHB4O31cXG4gICAgLmZvb3RlciBkaXZ7cGFkZGluZzogMTBweDt9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjU2MHB4KSB7XFxuICAgIC5tYWluQ29udGFpbmVyIHt3aWR0aDogMTAwdnc7IGhlaWdodDogOTV2aDt9XFxuICAgIC5zZWFyY2hCb3gge3dpZHRoOiA1MHB4OyBoZWlnaHQ6IDEwMHB4O31cXG4gICAgYnV0dG9uIHt3aWR0aDogMTAwcHg7IGhlaWdodDogMzVweDsgbWFyZ2luLXRvcDogNXB4O31cXG4gICAgLmNvbnRlbnRDb250YWluZXJ7cGFkZGluZzogMTVweDt9XFxuICAgIC5jb250ZW50IHt3aWR0aDogNDUwcHg7IGhlaWdodDogMTEwcHg7fVxcbiAgICAud2VhdGhlckdpZnt3aWR0aDogNDAwcHg7fVxcbiAgICAuaHIzQ29udGFpbmVye3dpZHRoOiA5MDBweDsgZm9udC1zaXplOiAwLjhlbTt9XFxuICAgIC5ockVsZW17d2lkdGg6IDE1MHB4OyBwYWRkaW5nOiA1cHg7IGhlaWdodDogMTA1cHg7fVxcbiAgICAuaHJFbGVtIGltZ3t3aWR0aDogNTVweDt9XFxuICAgIC5mb290ZXJ7d2lkdGg6IDkwMHB4OyBoZWlnaHQ6IDQwcHg7fVxcbiAgICAuZm9vdGVyIGRpdntwYWRkaW5nOiAxMHB4O31cXG59XFxuXFxuLm1haW5Db250YWluZXIge1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuXFxufVxcblxcbi5zZWFyY2hCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZHJvcGRvd25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG59XFxuLmRyb3Bkb3duRWxlbWVudHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxufVxcblxcbi5tZW51QnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDFweDtcXG59XFxuXFxuLm1lbnVCdG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNsb2NhdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBcXG59XFxuLmNvbnRlbnRDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9jTmFtZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyR2lmIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5ocjNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5ockVsZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cXG5cXG4uaHJFbGVtIDpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmhyRWxlbSBpbWcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG59XFxuXFxuLmlubGluZUljb24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIG1hcmdpbjogMCAwLjEyNWVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAgIGhlaWdodDogMC44ZW07XFxuICAgIHdpZHRoOiAwLjhlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUhBQW1IO0lBQ25ILDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCLFlBQVksRUFBRSxZQUFZLENBQUM7SUFDM0MsWUFBWSxXQUFXLEVBQUUsYUFBYSxDQUFDO0lBQ3ZDLFFBQVEsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUM7SUFDcEQsa0JBQWtCLFlBQVksQ0FBQztJQUMvQixVQUFVLFlBQVksRUFBRSxhQUFhLEVBQUU7SUFDdkMsWUFBWSxZQUFZLENBQUM7SUFDekIsY0FBYyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7SUFDN0MsUUFBUSxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQztJQUNqRCxZQUFZLFdBQVcsQ0FBQztJQUN4QixRQUFRLFlBQVksRUFBRSxZQUFZLENBQUM7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LDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7Ozs7QUFJQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3VnYy5iZXJrZWxleS5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDEvdGh1bmRlcnN0b3JtLTM2MjU0MDVfMTkyMC0xNTM2eDg2NC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjM1NDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgLm1haW5Db250YWluZXIge3dpZHRoOiAxMDB2dzsgaGVpZ2h0OiA5MHZoO31cXG4gICAgLnNlYXJjaEJveCB7d2lkdGg6IDUwcHg7IGhlaWdodDogMTAwcHg7fVxcbiAgICBidXR0b24ge3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAzNXB4OyBtYXJnaW4tdG9wOiA1cHg7fVxcbiAgICAuY29udGVudENvbnRhaW5lcntwYWRkaW5nOiAycHg7fVxcbiAgICAuY29udGVudCB7d2lkdGg6IDMyMHB4OyBoZWlnaHQ6IDExMHB4OyB9XFxuICAgIC53ZWF0aGVyR2lme3dpZHRoOiAzMjBweDt9XFxuICAgIC5ocjNDb250YWluZXJ7d2lkdGg6IDMzMHB4OyBmb250LXNpemU6IDAuNmVtO31cXG4gICAgLmhyRWxlbXt3aWR0aDogNTBweDsgcGFkZGluZzogNXB4OyBoZWlnaHQ6IDEwNXB4O31cXG4gICAgLmhyRWxlbSBpbWd7d2lkdGg6IDM1cHg7fVxcbiAgICAuZm9vdGVye3dpZHRoOiAzMjBweDsgaGVpZ2h0OiA1MHB4O31cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xcbiAgICAubWFpbkNvbnRhaW5lciB7d2lkdGg6IDEwMHZ3OyBoZWlnaHQ6IDk1dmg7fVxcbiAgICAuc2VhcmNoQm94IHt3aWR0aDogNTBweDsgaGVpZ2h0OiAxMDBweDt9XFxuICAgIGJ1dHRvbiB7d2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDM1cHg7IG1hcmdpbi10b3A6IDVweDt9XFxuICAgIC5jb250ZW50Q29udGFpbmVye3BhZGRpbmc6IDE1cHg7fVxcbiAgICAuY29udGVudCB7d2lkdGg6IDQ1MHB4OyBoZWlnaHQ6IDExMHB4O31cXG4gICAgLndlYXRoZXJHaWZ7d2lkdGg6IDUwMHB4O31cXG4gICAgLmhyM0NvbnRhaW5lcnt3aWR0aDogNjAwcHg7IGZvbnQtc2l6ZTogMC43ZW07fVxcbiAgICAuaHJFbGVte3dpZHRoOiA5MHB4OyBwYWRkaW5nOiA1cHg7IGhlaWdodDogMTA1cHg7fVxcbiAgICAuaHJFbGVtIGltZ3t3aWR0aDogNDBweDt9XFxuICAgIC5mb290ZXJ7d2lkdGg6IDcwMHB4OyBoZWlnaHQ6IDQwcHg7fVxcbiAgICAuZm9vdGVyIGRpdntwYWRkaW5nOiAxMHB4O31cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLm1haW5Db250YWluZXIge3dpZHRoOiAxMDB2dzsgaGVpZ2h0OiA5NXZoO31cXG4gICAgLnNlYXJjaEJveCB7d2lkdGg6IDUwcHg7IGhlaWdodDogMTAwcHg7fVxcbiAgICBidXR0b24ge3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAzNXB4OyBtYXJnaW4tdG9wOiA1cHg7fVxcbiAgICAuY29udGVudENvbnRhaW5lcntwYWRkaW5nOiAxNXB4O31cXG4gICAgLmNvbnRlbnQge3dpZHRoOiA0NTBweDsgaGVpZ2h0OiAxMTBweDt9XFxuICAgIC53ZWF0aGVyR2lme3dpZHRoOiA0MDBweDt9XFxuICAgIC5ocjNDb250YWluZXJ7d2lkdGg6IDkwMHB4OyBmb250LXNpemU6IDAuOGVtO31cXG4gICAgLmhyRWxlbXt3aWR0aDogMTUwcHg7IHBhZGRpbmc6IDVweDsgaGVpZ2h0OiAxMDVweDt9XFxuICAgIC5ockVsZW0gaW1ne3dpZHRoOiA1NXB4O31cXG4gICAgLmZvb3Rlcnt3aWR0aDogOTAwcHg7IGhlaWdodDogNDBweDt9XFxuICAgIC5mb290ZXIgZGl2e3BhZGRpbmc6IDEwcHg7fVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xcbiAgICAubWFpbkNvbnRhaW5lciB7d2lkdGg6IDEwMHZ3OyBoZWlnaHQ6IDk1dmg7fVxcbiAgICAuc2VhcmNoQm94IHt3aWR0aDogNTBweDsgaGVpZ2h0OiAxMDBweDt9XFxuICAgIGJ1dHRvbiB7d2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDM1cHg7IG1hcmdpbi10b3A6IDVweDt9XFxuICAgIC5jb250ZW50Q29udGFpbmVye3BhZGRpbmc6IDE1cHg7fVxcbiAgICAuY29udGVudCB7d2lkdGg6IDQ1MHB4OyBoZWlnaHQ6IDExMHB4O31cXG4gICAgLndlYXRoZXJHaWZ7d2lkdGg6IDQwMHB4O31cXG4gICAgLmhyM0NvbnRhaW5lcnt3aWR0aDogOTAwcHg7IGZvbnQtc2l6ZTogMC44ZW07fVxcbiAgICAuaHJFbGVte3dpZHRoOiAxNTBweDsgcGFkZGluZzogNXB4OyBoZWlnaHQ6IDEwNXB4O31cXG4gICAgLmhyRWxlbSBpbWd7d2lkdGg6IDU1cHg7fVxcbiAgICAuZm9vdGVye3dpZHRoOiA5MDBweDsgaGVpZ2h0OiA0MHB4O31cXG4gICAgLmZvb3RlciBkaXZ7cGFkZGluZzogMTBweDt9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjU2MHB4KSB7XFxuICAgIC5tYWluQ29udGFpbmVyIHt3aWR0aDogMTAwdnc7IGhlaWdodDogOTV2aDt9XFxuICAgIC5zZWFyY2hCb3gge3dpZHRoOiA1MHB4OyBoZWlnaHQ6IDEwMHB4O31cXG4gICAgYnV0dG9uIHt3aWR0aDogMTAwcHg7IGhlaWdodDogMzVweDsgbWFyZ2luLXRvcDogNXB4O31cXG4gICAgLmNvbnRlbnRDb250YWluZXJ7cGFkZGluZzogMTVweDt9XFxuICAgIC5jb250ZW50IHt3aWR0aDogNDUwcHg7IGhlaWdodDogMTEwcHg7fVxcbiAgICAud2VhdGhlckdpZnt3aWR0aDogNDAwcHg7fVxcbiAgICAuaHIzQ29udGFpbmVye3dpZHRoOiA5MDBweDsgZm9udC1zaXplOiAwLjhlbTt9XFxuICAgIC5ockVsZW17d2lkdGg6IDE1MHB4OyBwYWRkaW5nOiA1cHg7IGhlaWdodDogMTA1cHg7fVxcbiAgICAuaHJFbGVtIGltZ3t3aWR0aDogNTVweDt9XFxuICAgIC5mb290ZXJ7d2lkdGg6IDkwMHB4OyBoZWlnaHQ6IDQwcHg7fVxcbiAgICAuZm9vdGVyIGRpdntwYWRkaW5nOiAxMHB4O31cXG59XFxuXFxuLm1haW5Db250YWluZXIge1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuXFxufVxcblxcbi5zZWFyY2hCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZHJvcGRvd25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG59XFxuLmRyb3Bkb3duRWxlbWVudHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxufVxcblxcbi5tZW51QnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDFweDtcXG59XFxuXFxuLm1lbnVCdG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNsb2NhdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBcXG59XFxuLmNvbnRlbnRDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9jTmFtZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyR2lmIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5ocjNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5ockVsZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cXG5cXG4uaHJFbGVtIDpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmhyRWxlbSBpbWcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG59XFxuXFxuLmlubGluZUljb24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIG1hcmdpbjogMCAwLjEyNWVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAgIGhlaWdodDogMC44ZW07XFxuICAgIHdpZHRoOiAwLjhlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibGV0IGtleSA9ICdmMzExYWNiZGU1MDg0ZDk0ODUwMWVkNTg3NGI5YjIwZSc7XG5sZXQgdW5pdCA9ICdtZXRyaWMnO1xuXG4vL0FQSSBjYWxsc1xuXG5hc3luYyBmdW5jdGlvbiBnZXRMb2NEYXRhKGxvYykge1xuICAgIC8vZ2V0cyBsb25naXR1ZGUgYW5kIGxhdGl0dWRlIG9mIHN0cmluZyBuYW1lICAgXG4gICAgY29uc3QgbG9jVVJMID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jfSZsaW1pdD01JmFwcGlkPSR7a2V5fWA7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsb2NVUkwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgICBjb25zdCBsb2NEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gbG9jRGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxhdCwgbG9uKSB7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB3ZWF0aGVyVVJMID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZ1bml0cz0ke3VuaXR9JmFwcGlkPSR7a2V5fWBcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyVVJMLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyR2lmKHdlYXRoZXIpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBnaXBoeUtleSA9ICdtUGtzN3hPcW1VaDNoYjAyU1N1ZllxMHZZNkVPdjBPQSc7XG4gICAgICAgIGNvbnN0IGdpcGh5VVJMID0gYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3NlYXJjaD9rZXk9JHtnaXBoeUtleX0mcT0ke3dlYXRoZXJ9JmxpbWl0PTEmb2Zmc2V0PTAmcmF0aW5nPWcmbGFuZz1lbmA7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2lwaHlVUkwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgICBjb25zdCB3ZWF0aGVyR2lmID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gd2VhdGhlckdpZi5kYXRhWzBdLmltYWdlcy5vcmlnaW5hbC51cmw7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRIb3VybHlGb3JlY2FzdChsYXQsIGxvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGhvdXJseVVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPSR7a2V5fSZ1bml0cz0ke3VuaXR9JmNudD01YDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChob3VybHlVcmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgICBjb25zdCBob3VybHlXZWF0aGVyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gaG91cmx5V2VhdGhlcjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG59XG5cbi8vZGF0YSBwcm9jZXNzaW5nXG5mdW5jdGlvbiB3ZWF0aGVyUHJvY2Vzcyh3ZWF0aGVyRGF0YSkge1xuICAgIGxldCBuYW1lID0gd2VhdGhlckRhdGEubmFtZTtcbiAgICBsZXQgY291bnRyeSA9IHdlYXRoZXJEYXRhLnN5cy5jb3VudHJ5XG4gICAgbGV0IHRlbXAgPSB3ZWF0aGVyRGF0YS5tYWluLnRlbXA7XG4gICAgbGV0IGZlZWxzTGlrZSA9IHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZTtcbiAgICBsZXQgd2VhdGhlclR5cGUgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gICAgbGV0IHdpbmRTcGVlZCA9IHdlYXRoZXJEYXRhLndpbmQuc3BlZWQ7XG5cbiAgICByZXR1cm4geyBuYW1lLCBjb3VudHJ5LCB0ZW1wLCBmZWVsc0xpa2UsIHdlYXRoZXJUeXBlLCB3aW5kU3BlZWQgfTtcbn1cblxuZnVuY3Rpb24gbG9jUHJvY2Vzcyhsb2MpIHtcbiAgICBsZXQgbGF0ID0gbG9jWzBdLmxhdDtcbiAgICBsZXQgbG9uID0gbG9jWzBdLmxvbjtcbiAgICByZXR1cm4geyBsYXQsIGxvbiB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBob3VybHlQcm9jZXNzKGhyM0RhdGEpIHtcbiAgICBsZXQgaHIzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaHIzRGF0YS5saXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGhyM0RhdGEubGlzdFtpXTtcbiAgICAgICAgY29uc3QgdGltZSA9IGVsZW1lbnQuZHRfdHh0LnNsaWNlKDExKTtcbiAgICAgICAgY29uc3QgdGVtcCA9IGVsZW1lbnQubWFpbi50ZW1wO1xuICAgICAgICBjb25zdCBmZWVsc0xpa2UgPSBlbGVtZW50Lm1haW4uZmVlbHNfbGlrZTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckljb24gPSBlbGVtZW50LndlYXRoZXJbMF0uaWNvbjtcbiAgICAgICAgY29uc3Qgd2VhdGhlck9iaiA9IHsgdGltZSwgdGVtcCwgZmVlbHNMaWtlLCB3ZWF0aGVySWNvbiB9O1xuICAgICAgICBocjNBcnJheS5wdXNoKHdlYXRoZXJPYmopO1xuICAgIH1cbiAgICByZXR1cm4gaHIzQXJyYXk7XG59XG5cblxuLy8gaW5pdFxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2VhdGhlcihsb2NOYW1lKSB7XG4gICAgY29uc3QgbG9jRGF0YSA9IGF3YWl0IGdldExvY0RhdGEobG9jTmFtZSk7XG4gICAgbGV0IGxvYyA9IGxvY1Byb2Nlc3MobG9jRGF0YSk7XG4gICAgbGV0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jLmxhdCwgbG9jLmxvbik7XG4gICAgY29uc3Qgd2VhdGhlclByb2Nlc3NlZCA9IHdlYXRoZXJQcm9jZXNzKHdlYXRoZXJEYXRhKTtcbiAgICByZXR1cm4gd2VhdGhlclByb2Nlc3NlZDtcbn1cblxuXG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJIb3VybHkobG9jTmFtZSkge1xuICAgIGNvbnN0IGxvYyA9IGF3YWl0IGdldExvY0RhdGEobG9jTmFtZSk7XG4gICAgY29uc3QgbGF0bG9uID0gbG9jUHJvY2Vzcyhsb2MpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0SG91cmx5Rm9yZWNhc3QobGF0bG9uLmxhdCwgbGF0bG9uLmxvbik7XG4gICAgY29uc3QgcHJvY2Vzc2VkSG91cmx5ID0gYXdhaXQgaG91cmx5UHJvY2VzcyhyZXNwb25zZSk7XG4gICAgcmV0dXJuIHByb2Nlc3NlZEhvdXJseTtcbn1cbmV4cG9ydCB7IGNyZWF0ZVdlYXRoZXIsIGdldFdlYXRoZXJHaWYsIGdldFdlYXRoZXJEYXRhLCBnZXRMb2NEYXRhLCB3ZWF0aGVyUHJvY2VzcywgY3JlYXRlV2VhdGhlckhvdXJseSwgZ2V0SG91cmx5Rm9yZWNhc3QsIGhvdXJseVByb2Nlc3MgfTsiLCJmdW5jdGlvbiBjcmVhdGVEcm9wRG93bk1lbnUgKGJ0biwgZHJvcGRvd25FbGVtZW50cykge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAgICAgaWYoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRyb3Bkb3duVG9nZ2xlKGRyb3Bkb3duRWxlbWVudHMpO1xuICAgIH0pO1xufVxuICAgLy9mdW5jdGlvbiB0byB0b2dnbGUgZGlzcGxheSBzdHlsZSBiZXR3ZWVuICdibG9jaycgYW5kICdub25lJyBvbiBhIERPTSBlbGVtZW50XG5mdW5jdGlvbiBkcm9wZG93blRvZ2dsZSh0b2dnbGVFbGVtZW50KSB7XG4gICAgaWYodG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ICE9PSAnYmxvY2snKSB7XG4gICAgICAgIHRvZ2dsZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICAgIC8vdG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbn1cblxuXG5leHBvcnQge2NyZWF0ZURyb3BEb3duTWVudSwgZHJvcGRvd25Ub2dnbGV9OyIsImltcG9ydCBUZW1wSWNvblVybCBmcm9tICcuLi9hc3NldHMvaWNvbnMvZGV2aWNlX3RoZXJtb3N0YXRfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJztcbmltcG9ydCBGZWVsc0xpa2VJY29uVXJsIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9kZXdfcG9pbnRfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJztcbmltcG9ydCB3ZWF0aGVyVXJsIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9jbGVhcl9kYXlfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJ1xuaW1wb3J0IHdpbmRTcGVlZFVybCBmcm9tICcuLi9hc3NldHMvaWNvbnMvYWlyX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2ZydcblxuLy9ET00gaW5pdCBmdW5jdGlvbnNcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcnMoKSB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250YWluZXIuY2xhc3NOYW1lID0gJ21haW5Db250YWluZXInO1xuICAgIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlYXJjaEJveC5jbGFzc05hbWUgPSAnc2VhcmNoQm94JztcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5jbGFzc05hbWUgPSAnY29udGVudCc7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRlbnRDb250YWluZXInO1xuICAgIGNvbnN0IHdlYXRoZXJHaWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB3ZWF0aGVyR2lmLmNsYXNzTmFtZSA9ICd3ZWF0aGVyR2lmJztcbiAgICBjb25zdCBocjNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBocjNDb250YWluZXIuY2xhc3NOYW1lID0gJ2hyM0NvbnRhaW5lcic7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbiAgICBmb290ZXIuY2xhc3NOYW1lID0gJ2Zvb3Rlcic7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEJveCk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckdpZik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChocjNDb250YWluZXIpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hCb3goKSB7XG4gICAgY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaEJveCcpO1xuICAgIGNvbnN0IGxvY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsb2NJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGxvY0lucHV0Lm5hbWUgPSAnbG9jYXRpb24nO1xuICAgIGxvY0lucHV0LmlkID0gJ2xvY2F0aW9uJztcbiAgICBzZWFyY2hCb3guYXBwZW5kQ2hpbGQobG9jSW5wdXQpO1xuXG5cbiAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzZWFyY2hCdG4uaWQgPSAnc2VhcmNoQnRuJztcbiAgICBzZWFyY2hCdG4udGV4dENvbnRlbnQgPSAnU2VhcmNoJztcbiAgICBzZWFyY2hCb3guYXBwZW5kQ2hpbGQoc2VhcmNoQnRuKTtcblxuICAgIGNvbnN0IGRyb3Bkb3duQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJvcGRvd25Db250YWluZXIuY2xhc3NOYW1lID0gJ2Ryb3Bkb3duQ29udGFpbmVyJztcbiAgICBjb25zdCBkcm9wZG93bkVsZW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJvcGRvd25FbGVtZW50cy5jbGFzc05hbWUgPSAnZHJvcGRvd25FbGVtZW50cyc7XG4gICAgZHJvcGRvd25Db250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25FbGVtZW50cyk7XG5cbiAgICBzZWFyY2hCb3guYXBwZW5kQ2hpbGQoZHJvcGRvd25Db250YWluZXIpO1xuXG4gICAgXG59XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGxvY05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NOYW1lLmNsYXNzTmFtZSA9ICdsb2NOYW1lJztcbiAgICBjb25zdCBsb2NUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jVGVtcC5jbGFzc05hbWUgPSAnbG9jVGVtcCc7XG4gICAgY29uc3Qgd2VhdGhlclR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWF0aGVyVHlwZS5jbGFzc05hbWUgPSAnd2VhdGhlclR5cGUnO1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlZWxzTGlrZS5jbGFzc05hbWUgPSAnZmVlbHNMaWtlJztcbiAgICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aW5kU3BlZWQuY2xhc3NOYW1lID0gJ3dpbmRTcGVlZCc7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxvY05hbWUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9jVGVtcCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3ZWF0aGVyVHlwZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmZWVsc0xpa2UpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcblxuICAgIGNvbnN0IGxvY1RlbXBJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbG9jVGVtcEljb24uY2xhc3NOYW1lID0gJ2lubGluZUljb24nO1xuICAgIGxvY1RlbXBJY29uLnNyYyA9IFRlbXBJY29uVXJsO1xuICAgIGNvbnN0IGxvY1RlbXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGxvY1RlbXBUZXh0LmNsYXNzTmFtZSA9ICdsb2NUZW1wVGV4dCc7XG4gICAgbG9jVGVtcC5hcHBlbmRDaGlsZChsb2NUZW1wSWNvbik7XG4gICAgbG9jVGVtcC5hcHBlbmRDaGlsZChsb2NUZW1wVGV4dCk7XG5cbiAgICBjb25zdCBmZWVsc0xpa2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZmVlbHNMaWtlSWNvbi5jbGFzc05hbWUgPSAnaW5saW5lSWNvbic7XG4gICAgZmVlbHNMaWtlSWNvbi5zcmMgPSBGZWVsc0xpa2VJY29uVXJsO1xuICAgIGNvbnN0IGZlZWxzTGlrZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZmVlbHNMaWtlVGV4dC5jbGFzc05hbWUgPSAnZmVlbHNMaWtlVGV4dCc7XG4gICAgZmVlbHNMaWtlLmFwcGVuZENoaWxkKGZlZWxzTGlrZUljb24pO1xuICAgIGZlZWxzTGlrZS5hcHBlbmRDaGlsZChmZWVsc0xpa2VUZXh0KTtcblxuICAgIGNvbnN0IHdlYXRoZXJUeXBlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHdlYXRoZXJUeXBlSWNvbi5jbGFzc05hbWUgPSAnaW5saW5lSWNvbic7XG4gICAgd2VhdGhlclR5cGVJY29uLnNyYyA9IHdlYXRoZXJVcmw7XG4gICAgY29uc3Qgd2VhdGhlclR5cGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHdlYXRoZXJUeXBlVGV4dC5jbGFzc05hbWUgPSAnd2VhdGhlclR5cGVUZXh0JztcbiAgICB3ZWF0aGVyVHlwZS5hcHBlbmRDaGlsZCh3ZWF0aGVyVHlwZUljb24pO1xuICAgIHdlYXRoZXJUeXBlLmFwcGVuZENoaWxkKHdlYXRoZXJUeXBlVGV4dCk7XG5cbiAgICBjb25zdCB3aW5kU3BlZWRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgd2luZFNwZWVkSWNvbi5jbGFzc05hbWUgPSAnaW5saW5lSWNvbic7XG4gICAgd2luZFNwZWVkSWNvbi5zcmMgPSB3aW5kU3BlZWRVcmw7XG4gICAgY29uc3Qgd2luZFNwZWVkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB3aW5kU3BlZWRUZXh0LmNsYXNzTmFtZSA9ICd3aW5kU3BlZWRUZXh0JztcbiAgICB3aW5kU3BlZWQuYXBwZW5kQ2hpbGQod2luZFNwZWVkSWNvbik7XG4gICAgd2luZFNwZWVkLmFwcGVuZENoaWxkKHdpbmRTcGVlZFRleHQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXJFbGVtcygpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XG4gICAgY29uc3QgY2l0eTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaXR5MS5jbGFzc05hbWUgPSAnY2l0eTEnO1xuICAgIGNvbnN0IGNpdHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2l0eTIuY2xhc3NOYW1lID0gJ2NpdHkyJztcbiAgICBjb25zdCBjaXR5MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNpdHkzLmNsYXNzTmFtZSA9ICdjaXR5Myc7XG4gICAgY29uc3QgY2l0eTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaXR5NC5jbGFzc05hbWUgPSAnY2l0eTQnO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNpdHkxKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY2l0eTIpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjaXR5Myk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNpdHk0KTtcbn1cblxuZnVuY3Rpb24gaW5pdERvY3VtZW50KCkge1xuICAgIGNyZWF0ZUNvbnRhaW5lcnMoKTtcbiAgICBjcmVhdGVTZWFyY2hCb3goKTtcbiAgICBjcmVhdGVDb250ZW50KCk7XG4gICAgY3JlYXRlRm9vdGVyRWxlbXMoKTtcbn07XG5cbi8vRHluYW1pYyBFbGVtZW50IGZ1bmN0aW9uc1xuZnVuY3Rpb24gY3JlYXRlRHJvcERvd25PcHRpb25zKHJlc3BvbnNlQW1vdW50KSB7XG4gICAgY29uc3QgZHJvcGRvd25FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bkVsZW1lbnRzJyk7XG4gICAgcmVtb3ZlQWxsQ2hpbGRFbGVtZW50KCdkcm9wZG93bkVsZW1lbnRzJyk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSByZXNwb25zZUFtb3VudDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVCdG4nO1xuICAgICAgICBlbGVtZW50LmlkID0gYGl0ZW0ke2luZGV4fWA7XG4gICAgICAgIGRyb3Bkb3duRWxlbWVudHMuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlM0hyRWxlbShob3VybHlXZWF0aGVyT2JqKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhyM0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhyRWxlbS5jbGFzc05hbWUgPSAnaHJFbGVtJztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaHJFbGVtKTtcblxuICAgIGNvbnN0IGxvY05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NOYW1lLnRleHRDb250ZW50ID0gaG91cmx5V2VhdGhlck9iai50aW1lO1xuXG4gICAgY29uc3QgbG9jVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY1RlbXAudGV4dENvbnRlbnQgPSAnVGVtcGVyYXR1cmU6ICcgKyBob3VybHlXZWF0aGVyT2JqLnRlbXA7XG5cbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSAnRmVlbHMgbGlrZTogJyArIGhvdXJseVdlYXRoZXJPYmouZmVlbHNMaWtlO1xuXG4gICAgY29uc3Qgd2VhdGhlclR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB3ZWF0aGVyVHlwZS5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8ke2hvdXJseVdlYXRoZXJPYmoud2VhdGhlckljb259LnBuZ2A7XG5cbiAgICBockVsZW0uYXBwZW5kQ2hpbGQobG9jTmFtZSk7XG4gICAgaHJFbGVtLmFwcGVuZENoaWxkKGxvY1RlbXApO1xuICAgIGhyRWxlbS5hcHBlbmRDaGlsZChmZWVsc0xpa2UpO1xuICAgIGhyRWxlbS5hcHBlbmRDaGlsZCh3ZWF0aGVyVHlwZSk7XG59XG5cbmZ1bmN0aW9uIHNldFdlYXRoZXJHaWYoZ2lmVXJsKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJHaWYnKS5zcmMgPSBnaWZVcmw7XG59XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50Q29udGVudCh3ZWF0aGVyT2JqKSB7XG4gICAgY29uc3QgbG9jTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NOYW1lJyk7XG4gICAgY29uc3QgbG9jVGVtcFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jVGVtcFRleHQnKTtcbiAgICBjb25zdCBmZWVsc0xpa2VUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzTGlrZVRleHQnKVxuICAgIGNvbnN0IHdlYXRoZXJUeXBlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyVHlwZVRleHQnKTtcbiAgICBjb25zdCB3aW5kU3BlZWRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmRTcGVlZFRleHQnKTtcblxuICAgIGxvY05hbWUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLm5hbWV9LCAke3dlYXRoZXJPYmouY291bnRyeX1gO1xuICAgIGxvY1RlbXBUZXh0LnRleHRDb250ZW50ID0gJ1RlbXBlcmF0dXJlOiAnICsgd2VhdGhlck9iai50ZW1wICsgJyDCsEMnO1xuICAgIGZlZWxzTGlrZVRleHQudGV4dENvbnRlbnQgPSAnRmVlbHMgbGlrZTogJyArIHdlYXRoZXJPYmouZmVlbHNMaWtlICsgJyDCsEMnO1xuICAgIHdlYXRoZXJUeXBlVGV4dC50ZXh0Q29udGVudCA9ICdXZWF0aGVyOiAnICsgd2VhdGhlck9iai53ZWF0aGVyVHlwZTtcbiAgICB3aW5kU3BlZWRUZXh0LnRleHRDb250ZW50ID0gd2VhdGhlck9iai53aW5kU3BlZWQgKyAnIG0vcyc7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRm9vdGVyKGNpdHkxLCBjaXR5MiwgY2l0eTMsIGNpdHk0KSB7XG4gICAgY29uc3QgZWxlbUNpdHkxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHkxJyk7XG4gICAgY29uc3QgZWxlbUNpdHkyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHkyJyk7XG4gICAgY29uc3QgZWxlbUNpdHkzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHkzJyk7XG4gICAgY29uc3QgZWxlbUNpdHk0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHk0Jyk7XG5cbiAgICBlbGVtQ2l0eTEudGV4dENvbnRlbnQgPSBjaXR5MS5uYW1lICsgJzogJyArIGNpdHkxLnRlbXAgKyAnwrBDJztcbiAgICBlbGVtQ2l0eTEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmV0dXJuQ29sb3IoY2l0eTEudGVtcCk7XG5cbiAgICBlbGVtQ2l0eTIudGV4dENvbnRlbnQgPSBjaXR5Mi5uYW1lICsgJzogJyArIGNpdHkyLnRlbXAgKyAnwrBDJztcbiAgICBlbGVtQ2l0eTIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmV0dXJuQ29sb3IoY2l0eTIudGVtcCk7XG5cbiAgICBlbGVtQ2l0eTMudGV4dENvbnRlbnQgPSBjaXR5My5uYW1lICsgJzogJyArIGNpdHkzLnRlbXAgKyAnwrBDJztcbiAgICBlbGVtQ2l0eTMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmV0dXJuQ29sb3IoY2l0eTMudGVtcCk7XG5cbiAgICBlbGVtQ2l0eTQudGV4dENvbnRlbnQgPSBjaXR5NC5uYW1lICsgJzogJyArIGNpdHk0LnRlbXAgKyAnwrBDJztcbiAgICBlbGVtQ2l0eTQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmV0dXJuQ29sb3IoY2l0eTQudGVtcCk7XG59XG5cbi8vIHV0aWxpdHlcbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkRWxlbWVudChjbGFzc25hbWUpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc25hbWV9YCk7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyZW50LmNoaWxkcmVuLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXR1cm5Db2xvcih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA8PSAtMSkge1xuICAgICAgICByZXR1cm4gJ3NreWJsdWUnO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSAxMCkge1xuICAgICAgICByZXR1cm4gJ2dyZWVueWVsbG93JztcbiAgICB9IGVsc2UgaWYgKHZhbHVlID49IDExICYmIHZhbHVlIDw9IDI5KSB7XG4gICAgICAgIHJldHVybiAneWVsbG93JztcbiAgICB9IGVsc2UgaWYgKHZhbHVlID49IDMwKSB7XG4gICAgICAgIHJldHVybiAncmVkJztcbiAgICB9XG59XG5cblxuZXhwb3J0IHsgY3JlYXRlQ3VycmVudENvbnRlbnQsIHBvcHVsYXRlRm9vdGVyLCBpbml0RG9jdW1lbnQsIHNldFdlYXRoZXJHaWYsIGNyZWF0ZTNIckVsZW0sIHJlbW92ZUFsbENoaWxkRWxlbWVudCwgY3JlYXRlRHJvcERvd25PcHRpb25zIH07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBnZXRIb3VybHlGb3JlY2FzdCwgaG91cmx5UHJvY2VzcyxjcmVhdGVXZWF0aGVyLCBnZXRXZWF0aGVyR2lmLCBnZXRXZWF0aGVyRGF0YSwgZ2V0TG9jRGF0YSwgd2VhdGhlclByb2Nlc3MsIGNyZWF0ZVdlYXRoZXJIb3VybHkgfSBmcm9tIFwiLi9BUEkgY2FsbHMvZ2V0V2VhdGhlclwiO1xuaW1wb3J0IHsgY3JlYXRlQ3VycmVudENvbnRlbnQsIHBvcHVsYXRlRm9vdGVyLCBpbml0RG9jdW1lbnQsIHNldFdlYXRoZXJHaWYsIGNyZWF0ZTNIckVsZW0sIHJlbW92ZUFsbENoaWxkRWxlbWVudCwgY3JlYXRlRHJvcERvd25PcHRpb25zIH0gZnJvbSBcIi4vZ2VuZXJhdGVET01lbGVtL2NyZWF0ZURvbVwiO1xuaW1wb3J0IHsgY3JlYXRlRHJvcERvd25NZW51LCBkcm9wZG93blRvZ2dsZSB9IGZyb20gXCIuL0V2ZW50cy9kcm9wZG93bk1lbnVcIjtcblxubGV0IGNpdHlOYW1lID0gJ29zbG8nO1xuXG5mdW5jdGlvbiBhZGRFdmVudHMoKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaEJ0bicpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uJyk7XG4gICAgY3JlYXRlRHJvcERvd25NZW51KGJ0biwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duQ29udGFpbmVyJykpO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjaXR5TmFtZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCBjaXRpZXMgPSBhd2FpdCBnZXRMb2NhdGlvbnMoY2l0eU5hbWUpO1xuICAgICAgICBjcmVhdGVEcm9wRG93bk9wdGlvbnMoY2l0aWVzLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaXRpZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY2l0aWVzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IERvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjaXRlbSR7aW5kZXggKyAxfWApO1xuICAgICAgICAgICAgRG9tRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2VsZW1lbnQubmFtZX0sICR7ZWxlbWVudC5jb3VudHJ5fWA7XG4gICAgICAgICAgICBEb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGVsZW1lbnQubGF0LCBlbGVtZW50Lmxvbik7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2VhdGhlclByb2Nlc3NlZCA9IHdlYXRoZXJQcm9jZXNzKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgICAgICAgICBkcm9wZG93blRvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25Db250YWluZXInKSk7XG4gICAgICAgICAgICAgICAgY3JlYXRlQ3VycmVudENvbnRlbnQod2VhdGhlclByb2Nlc3NlZCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2VhdGhlckdpZiA9IGF3YWl0IGdldFdlYXRoZXJHaWYod2VhdGhlclByb2Nlc3NlZC53ZWF0aGVyVHlwZSk7XG4gICAgICAgICAgICAgICAgc2V0V2VhdGhlckdpZih3ZWF0aGVyR2lmKTtcbiAgICAgICAgICAgICAgICByZW1vdmVBbGxDaGlsZEVsZW1lbnQoJ2hyM0NvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJseVdlYXRoZXIgPSBhd2FpdCBnZXRIb3VybHlGb3JlY2FzdChlbGVtZW50LmxhdCwgZWxlbWVudC5sb24pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJseVdlYXRoZXJQcm9jZXNzZWQgPSBhd2FpdCBob3VybHlQcm9jZXNzKGhvdXJseVdlYXRoZXIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBob3VybHlXZWF0aGVyUHJvY2Vzc2VkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gaG91cmx5V2VhdGhlclByb2Nlc3NlZFtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZTNIckVsZW0oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgICAgIC8vcG9wdWxhdGVEb20oY2l0eU5hbWUpO1xuICAgIH0pO1xuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnRuLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVEb20oY2l0eU5hbWUpIHtcbiAgICBjb25zdCB3ZWF0aGVyT2JqID0gYXdhaXQgY3JlYXRlV2VhdGhlcihjaXR5TmFtZSk7XG4gICAgY3JlYXRlQ3VycmVudENvbnRlbnQod2VhdGhlck9iaik7XG4gICAgY29uc3Qgd2VhdGhlckdpZiA9IGF3YWl0IGdldFdlYXRoZXJHaWYod2VhdGhlck9iai53ZWF0aGVyVHlwZSk7XG4gICAgc2V0V2VhdGhlckdpZih3ZWF0aGVyR2lmKTtcbiAgICByZW1vdmVBbGxDaGlsZEVsZW1lbnQoJ2hyM0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhvdXJseVdlYXRoZXIgPSBhd2FpdCBjcmVhdGVXZWF0aGVySG91cmx5KGNpdHlOYW1lKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaG91cmx5V2VhdGhlci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGhvdXJseVdlYXRoZXJbaW5kZXhdO1xuICAgICAgICBjcmVhdGUzSHJFbGVtKGVsZW1lbnQpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25zKGNpdHlOYW1lKSB7XG4gICAgY29uc3QgbG9jT2JqID0gYXdhaXQgZ2V0TG9jRGF0YShjaXR5TmFtZSk7XG4gICAgcmV0dXJuIGxvY09iajtcblxufVxuXG5hc3luYyBmdW5jdGlvbiBmb290ZXJEYXRhKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBsb2MgPSBhd2FpdCBnZXRMb2NEYXRhKCdPc2xvJyk7XG4gICAgICAgIGxldCBjaXR5RGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY1swXS5sYXQsIGxvY1swXS5sb24pO1xuICAgICAgICBjb25zdCBjaXR5MSA9IHdlYXRoZXJQcm9jZXNzKGNpdHlEYXRhKTtcblxuICAgICAgICBsb2MgPSBhd2FpdCBnZXRMb2NEYXRhKCdMb25kb24nKTtcbiAgICAgICAgY2l0eURhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NbMF0ubGF0LCBsb2NbMF0ubG9uKTtcbiAgICAgICAgY29uc3QgY2l0eTIgPSB3ZWF0aGVyUHJvY2VzcyhjaXR5RGF0YSk7XG5cbiAgICAgICAgbG9jID0gYXdhaXQgZ2V0TG9jRGF0YSgnTWFkcmlkJyk7XG4gICAgICAgIGNpdHlEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jWzBdLmxhdCwgbG9jWzBdLmxvbik7XG4gICAgICAgIGNvbnN0IGNpdHkzID0gd2VhdGhlclByb2Nlc3MoY2l0eURhdGEpO1xuXG4gICAgICAgIGxvYyA9IGF3YWl0IGdldExvY0RhdGEoJ09ybGFuZG8nKTtcbiAgICAgICAgY2l0eURhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NbMF0ubGF0LCBsb2NbMF0ubG9uKTtcbiAgICAgICAgY29uc3QgY2l0eTQgPSB3ZWF0aGVyUHJvY2VzcyhjaXR5RGF0YSk7XG5cbiAgICAgICAgcG9wdWxhdGVGb290ZXIoY2l0eTEsIGNpdHkyLCBjaXR5MywgY2l0eTQpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cblxufVxuXG5cbmluaXREb2N1bWVudCgpO1xucG9wdWxhdGVEb20oY2l0eU5hbWUpO1xuZm9vdGVyRGF0YSgpO1xuYWRkRXZlbnRzKCk7XG5nZXRMb2NhdGlvbnMoY2l0eU5hbWUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9