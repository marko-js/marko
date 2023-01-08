"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _escapeXml = require("marko/src/runtime/html/helpers/escape-xml.js");
var _index2 = _interopRequireDefault(require("./components/hello/index.marko"));
var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const _marko_componentType = "packages/translator-default/test/fixtures/at-tags-dynamic/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = _marko_template;
exports.default = _default;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state) {
  const _cols = [];
  const _items = [];
  for (const color of input.colors) {
    if (x) {
      _items.push({
        "style": {
          color
        },
        "renderBody": out => {
          out.w("foo");
        }
      });
    } else if (y) {
      _items.push({
        "style": {
          color
        },
        "renderBody": out => {
          out.w("bar");
        }
      });
    } else {
      _items.push({
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
    _items.push({
      "renderBody": out => {
        out.w((0, _escapeXml.x)(i));
      }
    });
  }
  for (const col of input.table) {
    const _rows = [];
    for (const row of col) {
      _rows.push({
        "row": row,
        "renderBody": out => {
          out.w((0, _escapeXml.x)(row));
        }
      });
    }
    _cols.push({
      "x": y,
      "rows": _rows
    });
  }
  const _rows2 = [];
  _rows2.push({
    "row": -1,
    "renderBody": out => {
      out.w("Outside");
    }
  });
  _cols.push({
    "outside": true,
    "rows": _rows2
  });
  (0, _renderTag.default)(_index2.default, {
    "list": {
      "items": _items
    },
    "cols": _cols
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);