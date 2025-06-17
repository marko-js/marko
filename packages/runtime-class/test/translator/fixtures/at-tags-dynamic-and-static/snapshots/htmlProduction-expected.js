import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "gsa2ZOR",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { r as _marko_repeated_attr_tag, a as _marko_repeatable_attr_tag, i as _marko_render_input } from "marko/dist/runtime/helpers/attr-tag.js";
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_tag(_hello, _marko_render_input(() => {
    for (const a in b) {
      _marko_repeated_attr_tag("items", {});
    }
    _marko_repeatable_attr_tag("other", {});
  }), out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);