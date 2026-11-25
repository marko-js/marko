"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $attrtag = require("marko/src/runtime/helpers/attr-tag.js");
var $dynamictag = $interopDefault(require("marko/src/runtime/helpers/dynamic-tag.js"));
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
  (0, $dynamictag.default)(out, input.x, () => (0, $attrtag.i)(() => {
    (0, $attrtag.a)("header", {
      "class": "my-header",
      "renderBody": out => {
        out.w("Header content");
      }
    });
    (0, $attrtag.a)("footer", {
      "class": "my-footer",
      "renderBody": out => {
        out.w("Footer content");
      }
    });
    return out => {
      out.w("Body content");
    };
  }), null, null, null, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);