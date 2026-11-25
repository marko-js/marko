"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $escapexml = require("marko/src/runtime/html/helpers/escape-xml.js");
var $attrtag = require("marko/src/runtime/helpers/attr-tag.js");
var $renderer = $interopDefault(require("marko/src/core-tags/core/await/renderer.js"));
var $rendertag = $interopDefault(require("marko/src/runtime/helpers/render-tag.js"));
var $renderer2 = $interopDefault(require("marko/src/runtime/components/renderer.js"));
function $interopDefault(m) {
  return m && m.__esModule ? m : {
    default: m
  };
}
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, $index.t)(_marko_componentType);
exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, $renderer2.default)(function (input, out, _componentDef, _component, state, $global) {
  (0, $rendertag.default)($renderer.default, (0, $attrtag.i)(() => {
    (0, $attrtag.a)("then", {
      "renderBody": (out, result) => {
        out.w((0, $escapexml.x)(result));
      }
    });
  }, {
    "_provider": promise,
    "_name": "promise"
  }), out, _componentDef, "0");
  (0, $rendertag.default)($renderer.default, (0, $attrtag.i)(() => {
    const prefix = "Result: ";
    if (input.show) {
      (0, $attrtag.a)("then", {
        "renderBody": (out, result) => {
          out.w((0, $escapexml.x)(prefix));
          out.w((0, $escapexml.x)(result));
        }
      });
    } else {
      (0, $attrtag.a)("then", {
        "renderBody": (out, result) => {
          out.w("<span>");
          out.w((0, $escapexml.x)(result));
          out.w("</span>");
        }
      });
    }
    (0, $attrtag.a)("catch", {
      "renderBody": (out, error) => {
        out.w((0, $escapexml.x)(error.message));
      }
    });
    (0, $attrtag.a)("placeholder", {
      "renderBody": out => {
        out.w("Loading");
      }
    });
  }, {
    "_provider": promise,
    "_name": "promise"
  }), out, _componentDef, "1");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);