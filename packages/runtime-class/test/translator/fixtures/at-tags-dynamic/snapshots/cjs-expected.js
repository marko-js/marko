"use strict";

exports.__esModule = true;
var $index = require("marko/src/runtime/html/index.js");
var $attrtag = require("marko/src/runtime/helpers/attr-tag.js");
var $offallback = $interopDefault(require("marko/src/runtime/helpers/of-fallback.js"));
var $escapexml = require("marko/src/runtime/html/helpers/escape-xml.js");
var $index2 = $interopDefault(require("./components/hello/index.marko"));
var $rendertag = $interopDefault(require("marko/src/runtime/helpers/render-tag.js"));
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
  (0, $rendertag.default)($index2.default, (0, $attrtag.i)(() => {
    (0, $attrtag.a)("list", (0, $attrtag.i)(() => {
      for (const color of (0, $offallback.default)(input.colors)) {
        if (x) {
          (0, $attrtag.r)("items", {
            "style": {
              color
            },
            "renderBody": out => {
              out.w("foo");
            }
          });
        } else if (y) {
          (0, $attrtag.r)("items", {
            "style": {
              color
            },
            "renderBody": out => {
              out.w("bar");
            }
          });
        } else {
          (0, $attrtag.r)("items", {
            "style": {
              color
            },
            "renderBody": out => {
              out.w("baz");
            }
          });
        }
      }
      let i = 10;
      while (i--) {
        (0, $attrtag.r)("items", {
          "renderBody": out => {
            out.w((0, $escapexml.x)(i));
          }
        });
      }
    }));
    for (const col of (0, $offallback.default)(input.table)) {
      (0, $attrtag.r)("cols", (0, $attrtag.i)(() => {
        for (const row of (0, $offallback.default)(col)) {
          (0, $attrtag.r)("rows", {
            "row": row,
            "renderBody": out => {
              out.w((0, $escapexml.x)(row));
            }
          });
        }
      }, {
        "x": y
      }));
    }
    (0, $attrtag.r)("cols", (0, $attrtag.i)(() => {
      (0, $attrtag.r)("rows", {
        "row": -1,
        "renderBody": out => {
          out.w("Outside");
        }
      });
    }, {
      "outside": true
    }));
  }), out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);