"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _selfIterator = _interopRequireDefault(require("marko/src/runtime/helpers/self-iterator.js"));
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
  (0, _renderTag.default)(_index2.default, {
    "list": {
      "items": _items,
      [Symbol.iterator]: _selfIterator.default
    },
    "renderBody": out => {
      const _items = [];
      for (const color of input.colors || []) {
        if (x) {
          _items.push({
            "renderBody": out => {
              out.w("foo");
            },
            [Symbol.iterator]: _selfIterator.default
          });
        } else if (y) {
          _items.push({
            "renderBody": out => {
              out.w("bar");
            },
            [Symbol.iterator]: _selfIterator.default
          });
        } else {
          _items.push({
            "renderBody": out => {
              out.w("baz");
            },
            [Symbol.iterator]: _selfIterator.default
          });
        }
      }
      let i = 10;
      while (i--) {
        _items.push({
          "renderBody": out => {
            out.w((0, _escapeXml.x)(i));
          },
          [Symbol.iterator]: _selfIterator.default
        });
      }
    }
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);