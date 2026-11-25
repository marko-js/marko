"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $stylevalue = $interopDefault(require("marko/src/runtime/helpers/style-value.js"));
var $attr = $interopDefault(require("marko/src/runtime/html/helpers/attr.js"));
var $customtag = $interopDefault(require("./components/custom-tag.marko"));
var $rendertag = $interopDefault(require("marko/src/runtime/helpers/render-tag.js"));
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
  out.w(`<div${(0, $attr.default)("style", (0, $stylevalue.default)({
    color: input.color
  }))}></div>`);
  out.w("<div style=width:100px></div>");
  out.w("<div style=\"color: green\"></div>");
  (0, $rendertag.default)($customtag.default, {
    "style": {
      color: input.color
    }
  }, out, _componentDef, "3");
  (0, $rendertag.default)($customtag.default, {
    "style": {
      width: 100
    }
  }, out, _componentDef, "4");
  (0, $rendertag.default)($customtag.default, {
    "style": "color: green"
  }, out, _componentDef, "5");
  (0, $dynamictag.default)(out, input.test, () => (0, $attrtag.i)(() => {
    (0, $attrtag.a)("test", {
      "style": {
        color: "green"
      },
      "renderBody": out => {
        out.w("Hello");
      }
    });
  }, {
    "style": {
      color: "green"
    }
  }), null, null, null, _componentDef, "6");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);