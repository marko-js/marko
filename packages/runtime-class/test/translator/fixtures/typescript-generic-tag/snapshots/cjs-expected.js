"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $typearg = $interopDefault(require("./components/type-arg.marko"));
var $rendertag = $interopDefault(require("marko/src/runtime/helpers/render-tag.js"));
var $escapexml = require("marko/src/runtime/html/helpers/escape-xml.js");
var $typeparam = $interopDefault(require("./components/type-param.marko"));
var $typeargandparam = $interopDefault(require("./components/type-arg-and-param.marko"));
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
  (0, $rendertag.default)($typearg.default, {}, out, _componentDef, "0");
  (0, $rendertag.default)($typeparam.default, {
    "renderBody": (out, x) => {
      out.w((0, $escapexml.x)(x));
    }
  }, out, _componentDef, "1");
  (0, $rendertag.default)($typeargandparam.default, {
    "arg": "hello",
    "renderBody": (out, x) => {
      out.w((0, $escapexml.x)(x));
    }
  }, out, _componentDef, "2");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);