"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $escapexml = require("marko/src/runtime/html/helpers/escape-xml.js");
var $foo = $interopDefault(require("./foo.marko"));
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
  (0, $rendertag.default)($foo.default, {
    "class": input.class,
    "renderBody": (out, data) => {
      out.w("Hello ");
      out.w((0, $escapexml.x)(data.name));
    }
  }, out, _componentDef, "0");
  out.w("<div>");
  out.w("Hello ");
  out.w((0, $escapexml.x)(input.name));
  out.w("<span>");
  () => {
    data;
    const data = "foo";
    console.log(data);
  };
  out.w("Hello ");
  out.w((0, $escapexml.x)(input));
  out.w("</span>");
  if (true) {
    const data = "bar";
    out.w("Hello ");
    out.w((0, $escapexml.x)(data));
  }
  out.w("</div>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);