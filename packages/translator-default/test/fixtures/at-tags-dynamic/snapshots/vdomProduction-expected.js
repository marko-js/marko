import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "LOwmoBub",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { r as _marko_repeated_attr_tag, a as _marko_repeatable_attr_tag, i as _marko_render_input } from "marko/dist/runtime/helpers/attr-tag.js";
import _of_fallback from "marko/dist/runtime/helpers/of-fallback.js";
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_tag(_hello, _marko_render_input(() => {
    _marko_repeatable_attr_tag("list", _marko_render_input(() => {
      for (const color of _of_fallback(input.colors)) {
        if (x) {
          _marko_repeated_attr_tag("items", {
            "style": {
              color
            },
            "renderBody": out => {
              out.t("foo", _component);
            }
          });
        } else if (y) {
          _marko_repeated_attr_tag("items", {
            "style": {
              color
            },
            "renderBody": out => {
              out.t("bar", _component);
            }
          });
        } else {
          _marko_repeated_attr_tag("items", {
            "style": {
              color
            },
            "renderBody": out => {
              out.t("baz", _component);
            }
          });
        }
      }
      let i = 10;
      while (i--) {
        _marko_repeated_attr_tag("items", {
          "renderBody": out => {
            out.t(i, _component);
          }
        });
      }
    }));
    for (const col of _of_fallback(input.table)) {
      _marko_repeated_attr_tag("cols", _marko_render_input(() => {
        for (const row of _of_fallback(col)) {
          _marko_repeated_attr_tag("rows", {
            "row": row,
            "renderBody": out => {
              out.t(row, _component);
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
          out.t("Outside", _component);
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
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);