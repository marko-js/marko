"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _attrTag = require("marko/src/runtime/helpers/attr-tag.js");
var _escapeXml = require("marko/src/runtime/html/helpers/escape-xml.js");
var _index2 = _interopRequireDefault(require("./components/hello/index.marko"));
var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const _marko_componentType = "packages/translator-default/test/fixtures/at-tags-repeated-longhand/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  (0, _renderTag.default)(_index2.default, (0, _attrTag.i)(() => {
    (0, _attrTag.a)("list", (0, _attrTag.i)(() => {
      for (const color of input.colors || []) {
        if (x) {
          (0, _attrTag.r)("items", {
            "renderBody": out => {
              out.w("foo");
            }
          });
        } else if (y) {
          (0, _attrTag.r)("items", {
            "renderBody": out => {
              out.w("bar");
            }
          });
        } else {
          (0, _attrTag.r)("items", {
            "renderBody": out => {
              out.w("baz");
            }
          });
        }
      }
      let i = 10;
      while (i--) {
        (0, _attrTag.r)("items", {
          "renderBody": out => {
            out.w((0, _escapeXml.x)(i));
          }
        });
      }
    }));
  }), out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);