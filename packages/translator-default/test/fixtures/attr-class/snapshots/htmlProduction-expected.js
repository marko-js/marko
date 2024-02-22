import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "TKoJdMQb",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_class_merge from "marko/dist/runtime/helpers/class-value.js";
import _marko_attr from "marko/dist/runtime/html/helpers/attr.js";
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import { a as _marko_repeatable_attr_tag, i as _marko_render_input } from "marko/dist/runtime/helpers/attr-tag.js";
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w(`<div${_marko_attr("class", _marko_class_merge(["a", {
    b: c,
    d
  }]))}></div><div class="a b"></div><div class="a b c"></div>`);
  _marko_tag(_customTag, {
    "class": ["a", {
      b: c,
      d
    }]
  }, out, _componentDef, "3");
  _marko_tag(_customTag, {
    "class": ["a", false, "b"]
  }, out, _componentDef, "4");
  _marko_dynamic_tag(out, input.test, () => _marko_render_input(() => {
    _marko_repeatable_attr_tag("test", {
      "class": ["a", {
        b: c,
        d
      }],
      "renderBody": out => {
        out.w("Hello");
      }
    });
  }, {
    "class": ["a", {
      b: c,
      d
    }]
  }), null, null, null, _componentDef, "5");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);