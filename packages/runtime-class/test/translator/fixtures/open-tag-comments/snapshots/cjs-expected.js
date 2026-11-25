"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $escapexml = require("marko/src/runtime/html/helpers/escape-xml.js");
var $offallback = $interopDefault(require("marko/src/runtime/helpers/of-fallback.js"));
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
  out.w("<div class=card></div>");
  out.w("<input name=email type=email>");
  out.w("<input hidden type=text>");
  out.w("<section>");
  out.w("Content");
  out.w("</section>");
  for (const item of (0, $offallback.default)(input.items)) {
    out.w((0, $escapexml.x)(item));
  }
  out.w("<form action=/search method=get>");
  out.w("Search");
  out.w("</form>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);