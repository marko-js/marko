"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _classValue = _interopRequireDefault(require("marko/src/runtime/helpers/class-value.js"));
var _attr = _interopRequireDefault(require("marko/src/runtime/html/helpers/attr.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(e) { return (e && e.__esModule ? e : { default: e }); }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  out.w(`<div${(0, _attr.default)("class", (0, _classValue.default)(input.className))}${(0, _attr.default)("foo", ('a' + input.foo + 'b'))} bar="a ${_attr.default.d(input.foo)} b"></div>`);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);