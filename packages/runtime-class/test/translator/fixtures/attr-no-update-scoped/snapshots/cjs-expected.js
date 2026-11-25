"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $datamarko = $interopDefault(require("marko/src/runtime/html/helpers/data-marko.js"));
var $attr = $interopDefault(require("marko/src/runtime/html/helpers/attr.js"));
var $preservetag = $interopDefault(require("marko/src/core-tags/components/preserve-tag.js"));
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
  (0, $rendertag.default)($preservetag.default, {
    "n": true,
    "renderBody": out => {
      out.w(`<input${(0, $datamarko.default)(out, _componentDef, 0, "0")}${(0, $attr.default)("id", _componentDef.elId("input1"))}>`);
    }
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);