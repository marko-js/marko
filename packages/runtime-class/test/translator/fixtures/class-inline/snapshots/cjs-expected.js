"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $renderer = $interopDefault(require("marko/src/runtime/components/renderer.js"));
function $interopDefault(m) {
  return m && m.__esModule ? m : {
    default: m
  };
}
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, $index.t)(_marko_componentType);
exports.default = _marko_template;
const _marko_component = {
  onCreate() {
    this.x = 1
    this.y = 2
    this.stuff();
  }
};
_marko_template._ = (0, $renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  out.w("<div></div>");
}, {
  t: _marko_componentType,
  d: true
}, _marko_component);