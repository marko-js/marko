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
  var foo = 123;
  function bar() {}
  var baz = 456;
  out.w("<div>");
  console.log('foo');
  out.w("Hello there ");
  out.w((0, $escapexml.x)(name));
  out.w("</div>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);