"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $escapexml = require("marko/src/runtime/html/helpers/escape-xml.js");
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
  out.w("<p>");
  out.w("A literal ");
  out.w("${placeholder} and a live ");
  out.w((0, $escapexml.x)(input.name));
  out.w("</p>");
  out.w("<p>");
  out.w("A slash before a placeholder\\");
  out.w((0, $escapexml.x)(input.name));
  out.w("</p>");
  out.w("<p>");
  out.w("A slash and literal ");
  out.w("\\${text}");
  out.w("</p>");
  out.w("<p>");
  out.w("A path C:\\Users\\dev");
  out.w("</p>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);