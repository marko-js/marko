"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $classvalue = $interopDefault(require("marko/src/runtime/helpers/class-value.js"));
var $attr = $interopDefault(require("marko/src/runtime/html/helpers/attr.js"));
var $renderer = $interopDefault(require("marko/src/runtime/components/renderer.js"));
function $interopDefault(m) {
  return m && m.__esModule ? m : {
    default: m
  };
}
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, $index.t)(_marko_componentType);
exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, $renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  out.w("<div class=shorthand></div>");
  out.w("<div class=\"shorthand1 shorthand2\"></div>");
  out.w("<div class=\"shorthand1 shorthand2 inline\"></div>");
  out.w(`<div${(0, $attr.default)("class", (0, $classvalue.default)(["shorthand1 shorthand2", dynamic1]))}></div>`);
  out.w(`<div${(0, $attr.default)("class", (0, $classvalue.default)([dynamic1, "inline"]))}></div>`);
  out.w(`<div${(0, $attr.default)("class", (0, $classvalue.default)([dynamic1, "shorthand2", "inline"]))}></div>`);
  out.w(`<div${(0, $attr.default)("class", (0, $classvalue.default)([dynamic1, "shorthand2", dynamic2]))}></div>`);
  out.w(`<div${(0, $attr.default)("class", (0, $classvalue.default)([dynamic1, "shorthand2", dynamic2, dynamic3]))}></div>`);
  out.w(`<div${(0, $attr.default)("class", (0, $classvalue.default)(["shorthand", dynamic1, dynamic2]))}></div>`);
  out.w(`<div${(0, $attr.default)("class", (0, $classvalue.default)([`partially-${dynamic1}`, "shorthand2", dynamic2]))}></div>`);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);