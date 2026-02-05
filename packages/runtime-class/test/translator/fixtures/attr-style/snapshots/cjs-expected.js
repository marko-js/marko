"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _styleValue = _interopRequireDefault(require("marko/src/runtime/helpers/style-value.js"));
var _attr = _interopRequireDefault(require("marko/src/runtime/html/helpers/attr.js"));
var _customTag2 = _interopRequireDefault(require("./components/custom-tag.marko"));
var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag.js"));
var _attrTag = require("marko/src/runtime/helpers/attr-tag.js");
var _dynamicTag = _interopRequireDefault(require("marko/src/runtime/helpers/dynamic-tag.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(e) { return (e && e.__esModule ? e : { default: e }); }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  out.w(`<div${(0, _attr.default)("style", (0, _styleValue.default)({
    color: input.color
  }))}></div>`);
  out.w("<div style=width:100px></div>");
  out.w("<div style=\"color: green\"></div>");
  (0, _renderTag.default)(_customTag2.default, {
    "style": {
      color: input.color
    }
  }, out, _componentDef, "3");
  (0, _renderTag.default)(_customTag2.default, {
    "style": {
      width: 100
    }
  }, out, _componentDef, "4");
  (0, _renderTag.default)(_customTag2.default, {
    "style": "color: green"
  }, out, _componentDef, "5");
  (0, _dynamicTag.default)(out, input.test, () => (0, _attrTag.i)(() => {
    (0, _attrTag.a)("test", {
      "style": {
        color: "green"
      },
      "renderBody": out => {
        out.w("Hello");
      }
    });
  }, {
    "style": {
      color: "green"
    }
  }), null, null, null, _componentDef, "6");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);