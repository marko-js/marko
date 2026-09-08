"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _named = require("./named");
var _mixed = _interopRequireWildcard(require("./mixed"));
var Namespace = _interopRequireWildcard(require("./namespace"));
var _dynamicTag = _interopRequireDefault(require("marko/src/runtime/helpers/dynamic-tag.js"));
var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  (0, _dynamicTag.default)(out, _named.Card, null, null, null, null, _componentDef, "0");
  (0, _dynamicTag.default)(out, _mixed.Card, null, null, null, null, _componentDef, "1");
  (0, _dynamicTag.default)(out, _mixed.Card, null, null, null, null, _componentDef, "2");
  (0, _dynamicTag.default)(out, _mixed.Card, null, null, null, null, _componentDef, "3");
  (0, _dynamicTag.default)(out, Namespace, null, null, null, null, _componentDef, "4");
  (0, _dynamicTag.default)(out, _mixed.default, null, null, null, null, _componentDef, "5");
  (0, _renderTag.default)(_mixed.default, {}, out, _componentDef, "6");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);