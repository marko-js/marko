"use strict";

exports.__esModule = true;
exports.default = void 0;

var _escapeXml = require("marko/src/runtime/html/helpers/escape-xml");

var _index = _interopRequireDefault(require("./components/hello/index.marko"));

var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

var _html = require("marko/src/runtime/html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_template = (0, _html.t)(__filename);

var _default = _marko_template;
exports.default = _default;
const _marko_componentType = "packages/translator-default/test/fixtures/at-tags-dynamic/template.marko",
      _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {
  const _cols = [];
  const _items = [];
  let _keyValue = 0;

  for (const color of input.colors) {
    const _keyScope = `[${_keyValue++}]`;

    if (x) {
      _items.push({
        "style": {
          color
        },
        "renderBody": out => {
          out.w("foo");
        }
      });
    } else {
      _items.push({
        "style": {
          color
        },
        "renderBody": out => {
          out.w("bar");
        }
      });
    }
  }

  let i = 10;
  let _keyValue2 = 0;

  while (i--) {
    const _keyScope2 = `[${_keyValue2++}]`;

    _items.push({
      "renderBody": out => {
        out.w((0, _escapeXml.x)(i));
      }
    });
  }

  let _keyValue3 = 0;

  for (const col of input.table) {
    const _keyScope3 = `[${_keyValue3++}]`;
    const _rows = [];
    let _keyValue4 = 0;

    for (const row of col) {
      const _keyScope4 = `[${_keyValue4++ + _keyScope3}]`;

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

  (0, _renderTag.default)(_index.default, {
    "list": {
      "items": _items
    },
    "cols": _cols
  }, out, _component, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);