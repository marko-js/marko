"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _customTag2 = _interopRequireDefault(require("./components/custom-tag.marko"));
var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  (0, _renderTag.default)(_customTag2.default, {
    "someMethod": function () {
      console.log("hello");
    }
  }, out, _componentDef, "0");
  (0, _renderTag.default)(_customTag2.default, {
    "value": function () {
      console.log("again");
    }
  }, out, _componentDef, "1");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);