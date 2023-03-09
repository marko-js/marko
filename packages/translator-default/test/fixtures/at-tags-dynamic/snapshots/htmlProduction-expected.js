import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "GuHig6zQ",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_self_iterator from "marko/dist/runtime/helpers/self-iterator.js";
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml.js";
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
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
        },
        [Symbol.iterator]: _marko_self_iterator
      });
    } else if (y) {
      _items.push({
        "style": {
          color
        },
        "renderBody": out => {
          out.w("bar");
        },
        [Symbol.iterator]: _marko_self_iterator
      });
    } else {
      _items.push({
        "style": {
          color
        },
        "renderBody": out => {
          out.w("baz");
        },
        [Symbol.iterator]: _marko_self_iterator
      });
    }
  }
  let i = 10;
  while (i--) {
    _items.push({
      "renderBody": out => {
        out.w(_marko_escapeXml(i));
      },
      [Symbol.iterator]: _marko_self_iterator
    });
  }
  for (const col of input.table) {
    const _rows = [];
    for (const row of col) {
      _rows.push({
        "row": row,
        "renderBody": out => {
          out.w(_marko_escapeXml(row));
        },
        [Symbol.iterator]: _marko_self_iterator
      });
    }
    _cols.push({
      "x": y,
      "rows": _rows,
      [Symbol.iterator]: _marko_self_iterator
    });
  }
  const _rows2 = [];
  _rows2.push({
    "row": -1,
    "renderBody": out => {
      out.w("Outside");
    },
    [Symbol.iterator]: _marko_self_iterator
  });
  _cols.push({
    "outside": true,
    "rows": _rows2,
    [Symbol.iterator]: _marko_self_iterator
  });
  _marko_tag(_hello, {
    "list": {
      "items": _items,
      [Symbol.iterator]: _marko_self_iterator
    },
    "cols": _cols
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);