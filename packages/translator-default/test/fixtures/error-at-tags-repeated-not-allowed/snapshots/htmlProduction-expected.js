import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "DhEjG_vd",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { a as _marko_repeatable_attr_tag, i as _marko_render_input } from "marko/dist/runtime/helpers/attr-tag.js";
import _someTag from "./components/some-tag/index.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_tag(_someTag, _marko_render_input(() => {
    _marko_repeatable_attr_tag("header", {
      "class": "my-header",
      "renderBody": out => {
        out.w("Header content");
      }
    });
    _marko_repeatable_attr_tag("header", {
      "class": "my-header",
      "renderBody": out => {
        out.w("Header content");
      }
    });
  }), out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);