import { t as _t } from "marko/src/runtime/vdom/index.js";
const _marko_componentType = "__tests__/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { a as _marko_repeatable_attr_tag, i as _marko_render_input } from "marko/src/runtime/helpers/attr-tag.js";
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_dynamic_tag(out, input.x, () => _marko_render_input(() => {
    _marko_repeatable_attr_tag("header", {
      "class": "my-header",
      "renderBody": out => {
        out.t("Header content", _component);
      }
    });
    _marko_repeatable_attr_tag("footer", {
      "class": "my-footer",
      "renderBody": out => {
        out.t("Footer content", _component);
      }
    });
    return out => {
      out.t("Body content", _component);
    };
  }), null, null, null, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);