import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "packages/translator-default/test/fixtures/at-tags-repeated-longhand/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { r as _marko_repeated_attr_tag, a as _marko_repeatable_attr_tag, i as _marko_render_input } from "marko/src/runtime/helpers/attr-tag.js";
import _of_fallback from "marko/src/runtime/helpers/of-fallback.js";
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml.js";
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_tag(_hello, _marko_render_input(() => {
    _marko_repeatable_attr_tag("list", _marko_render_input(() => {
      for (const color of _of_fallback(input.colors)) {
        if (x) {
          _marko_repeated_attr_tag("items", {
            "renderBody": out => {
              out.w("foo");
            }
          });
        } else if (y) {
          _marko_repeated_attr_tag("items", {
            "renderBody": out => {
              out.w("bar");
            }
          });
        } else {
          _marko_repeated_attr_tag("items", {
            "renderBody": out => {
              out.w("baz");
            }
          });
        }
      }
      let i = 10;
      while (i--) {
        _marko_repeated_attr_tag("items", {
          "renderBody": out => {
            out.w(_marko_escapeXml(i));
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