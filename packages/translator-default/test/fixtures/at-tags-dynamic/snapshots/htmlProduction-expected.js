import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "LOwmoBub",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { r as _marko_repeated_attr_tag, a as _marko_repeatable_attr_tag, i as _marko_render_input } from "marko/dist/runtime/helpers/attr-tag.js";
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml.js";
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_tag(_hello, _marko_render_input(() => {
    _marko_repeatable_attr_tag("list", _marko_render_input(() => {
      for (const color of input.colors || []) {
        if (x) {
          _marko_repeated_attr_tag("items", {
            "style": {
              color
            },
            "renderBody": out => {
              out.w("foo");
            }
          });
        } else if (y) {
          _marko_repeated_attr_tag("items", {
            "style": {
              color
            },
            "renderBody": out => {
              out.w("bar");
            }
          });
        } else {
          _marko_repeated_attr_tag("items", {
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
        _marko_repeated_attr_tag("items", {
          "renderBody": out => {
            out.w(_marko_escapeXml(i));
          }
        });
      }
    }));
    for (const col of input.table || []) {
      _marko_repeated_attr_tag("cols", _marko_render_input(() => {
        for (const row of col || []) {
          _marko_repeated_attr_tag("rows", {
            "row": row,
            "renderBody": out => {
              out.w(_marko_escapeXml(row));
            }
          });
        }
      }, {
        "x": y
      }));
    }
    _marko_repeated_attr_tag("cols", _marko_render_input(() => {
      _marko_repeated_attr_tag("rows", {
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
  i: true
}, _marko_component);