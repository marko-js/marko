"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $bar = $interopNamespace(require("./bar"));
require("./foo");
var $baz = $interopDefault(require("./components/baz.marko"));
var $renderer = $interopDefault(require("marko/src/runtime/components/renderer.js"));
function $interopNamespace(m) {
  if (m && m.__esModule) return m;
  var ns = {
    __proto__: null,
    default: m
  };
  if (typeof m !== "string") for (var k in m) if (k !== "default" && Object.prototype.hasOwnProperty.call(m, k)) Object.defineProperty(ns, k, Object.getOwnPropertyDescriptor(m, k));
  return ns;
}
function $interopDefault(m) {
  return m && m.__esModule ? m : {
    default: m
  };
}
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, $index.t)(_marko_componentType);
exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, $renderer.default)(function (input, out, _componentDef, _component, state, $global) {}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);