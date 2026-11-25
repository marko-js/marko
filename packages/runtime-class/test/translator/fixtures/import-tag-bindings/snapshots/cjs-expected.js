"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $named = require("./named");
var $mixed = $interopNamespace(require("./mixed"));
var Namespace = $interopNamespace(require("./namespace"));
var $dynamictag = $interopDefault(require("marko/src/runtime/helpers/dynamic-tag.js"));
var $rendertag = $interopDefault(require("marko/src/runtime/helpers/render-tag.js"));
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
_marko_template._ = (0, $renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  (0, $dynamictag.default)(out, $named.Card, null, null, null, null, _componentDef, "0");
  (0, $dynamictag.default)(out, $mixed.Card, null, null, null, null, _componentDef, "1");
  (0, $dynamictag.default)(out, $mixed.Card, null, null, null, null, _componentDef, "2");
  (0, $dynamictag.default)(out, $mixed.Card, null, null, null, null, _componentDef, "3");
  (0, $dynamictag.default)(out, Namespace, null, null, null, null, _componentDef, "4");
  (0, $dynamictag.default)(out, $mixed.default, null, null, null, null, _componentDef, "5");
  (0, $rendertag.default)($mixed.default, {}, out, _componentDef, "6");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);