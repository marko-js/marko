"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $renderer = $interopDefault(require("./tags/test-body-function/renderer.js"));
var $rendertag = $interopDefault(require("marko/src/runtime/helpers/render-tag.js"));
var $renderer2 = $interopDefault(require("marko/src/runtime/components/renderer.js"));
function $interopDefault(m) {
  return m && m.__esModule ? m : {
    default: m
  };
}
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, $index.t)(_marko_componentType);
exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, $renderer2.default)(function (input, out, _componentDef, _component, state, $global) {
  (0, $rendertag.default)($renderer.default, {
    "name": "World",
    "renderBody": out => {
      out.w("This is the body content");
    }
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);