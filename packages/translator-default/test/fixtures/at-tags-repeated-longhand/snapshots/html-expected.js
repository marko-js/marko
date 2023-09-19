import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "packages/translator-default/test/fixtures/at-tags-repeated-longhand/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_self_iterator from "marko/src/runtime/helpers/self-iterator.js";
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml.js";
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_tag(_hello, {
    "list": {
      "items": _items,
      [Symbol.iterator]: _marko_self_iterator
    },
    "renderBody": out => {
      const _items = [];
      for (const color of input.colors || []) {
        if (x) {
          _items.push({
            "renderBody": out => {
              out.w("foo");
            },
            [Symbol.iterator]: _marko_self_iterator
          });
        } else if (y) {
          _items.push({
            "renderBody": out => {
              out.w("bar");
            },
            [Symbol.iterator]: _marko_self_iterator
          });
        } else {
          _items.push({
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
    }
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);