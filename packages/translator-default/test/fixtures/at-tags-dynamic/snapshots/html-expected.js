import { t as _t } from "marko/src/runtime/html/index.js";

const _marko_componentType = "packages/translator-default/test/fixtures/at-tags-dynamic/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml.js";
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
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
        out.w(_marko_escapeXml(i));
      }
    });
  }

  for (const col of input.table) {
    const _rows = [];

    for (const row of col) {
      _rows.push({
        "row": row,
        "renderBody": out => {
          out.w(_marko_escapeXml(row));
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

  _marko_tag(_hello, {
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