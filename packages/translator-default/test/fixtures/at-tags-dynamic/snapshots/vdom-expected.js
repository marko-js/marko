const _marko_template = _t(__filename);

export default _marko_template;
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("packages/translator-default/test/fixtures/at-tags-dynamic/template.marko", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
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
          out.t("foo", component);
        }
      });
    } else {
      _items.push({
        "style": {
          color
        },
        "renderBody": out => {
          out.t("bar", component);
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
        out.t(i);
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
          out.t(row);
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
      out.t("Outside", component);
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
  }, out, _component, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);