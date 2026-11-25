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
  out.w("<div>");
  out.w("<div>");
  out.w("Hello ");
  out.w("<div>");
  out.w(" ");
  out.w("</div>");
  out.w(" World");
  out.w("</div>");
  out.w("<div>");
  out.w(" Hello");
  out.w("</div>");
  out.w("<pre>");
  out.w("\n    This should  \n      be preserved\n    ");
  out.w("<textarea>");
  out.w("nested");
  out.w("</textarea>");
  out.w("\n    still   preserved\n  ");
  out.w("</pre>");
  out.w("<div>");
  out.w("<div>");
  out.w("Hello ");
  out.w("</div>");
  out.w("</div>");
  out.w("</div>");
  out.w("<div>");
  scriptletA();
  scriptletB();
  out.w("Hello ");
  scriptletC();
  out.w("World");
  scriptletD();
  out.w("</div>");
  out.w(" Hello World! ");
  out.w((0, $escapexml.x)(a));
  out.w((0, $escapexml.x)(b));
  out.w("<div></div>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);