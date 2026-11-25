"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $initcomponentstag = $interopDefault(require("marko/src/core-tags/components/init-components-tag.js"));
var $rendertag = $interopDefault(require("marko/src/runtime/helpers/render-tag.js"));
var $reordererrenderer = $interopDefault(require("marko/src/core-tags/core/await/reorderer-renderer.js"));
var $preferredscriptlocationtag = $interopDefault(require("marko/src/core-tags/components/preferred-script-location-tag.js"));
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
  out.w("<!DOCTYPE html>");
  out.w("<html>");
  out.w("<head>");
  out.w("<title>");
  out.w("Title of the document");
  out.w("</title>");
  out.w("</head>");
  out.w("<body>");
  out.w("The content of the document......");
  (0, $rendertag.default)($initcomponentstag.default, {}, out, _componentDef, "4");
  (0, $rendertag.default)($reordererrenderer.default, {}, out, _componentDef, "5");
  (0, $rendertag.default)($preferredscriptlocationtag.default, {}, out, _componentDef, "6");
  out.w("</body>");
  out.w("</html>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);