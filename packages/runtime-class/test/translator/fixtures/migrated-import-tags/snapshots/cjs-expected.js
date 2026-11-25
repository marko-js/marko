"use strict";

exports.__esModule = true;
require("marko/src/runtime/helpers/tags-compat/html-debug.js");
var $index = require("marko/src/runtime/html/index.js");
var $foo = $interopDefault(require("./foo.marko"));
var $card = require("./card");
var $tagschild = $interopDefault(require("./tags-child.marko"));
var $rendertag = $interopDefault(require("marko/src/runtime/helpers/render-tag.js"));
var $dynamictag = $interopDefault(require("marko/src/runtime/helpers/dynamic-tag.js"));
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
  (0, $rendertag.default)($foo.default, {}, out, _componentDef, "0");
  (0, $dynamictag.default)(out, $card.Card, null, null, null, null, _componentDef, "1");
  (0, $dynamictag.default)(out, $tagschild.default, null, null, null, null, _componentDef, "2");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);