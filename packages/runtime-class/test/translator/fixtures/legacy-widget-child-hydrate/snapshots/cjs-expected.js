"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $legacyparent = $interopDefault(require("./components/legacy-parent.marko"));
var $rendertag = $interopDefault(require("marko/src/runtime/helpers/render-tag.js"));
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
  out.w("<div>");
  (0, $rendertag.default)($legacyparent.default, {}, out, _componentDef, "1");
  out.w("</div>");
}, {
  t: _marko_componentType,
  s: true,
  d: true
}, _marko_component);