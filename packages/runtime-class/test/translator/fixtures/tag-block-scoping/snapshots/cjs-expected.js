"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _attr = _interopRequireDefault(require("marko/src/runtime/html/helpers/attr.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  var b = thing;
  let c = thing;
  out.w(`<div${(0, _attr.default)("b", b)}${(0, _attr.default)("c", c)}>`);
  (() => {
    var d = thing;
    let e = thing;
    out.w(`<div${(0, _attr.default)("d", d)}${(0, _attr.default)("e", e)}></div>`);
  })();
  out.w("</div>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);