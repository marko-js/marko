import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "NRVVEqi",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _legacyParent from "./components/legacy-parent.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w("<div>");
  _marko_tag(_legacyParent, {}, out, _componentDef, "1");
  out.w("</div>");
}, {
  t: _marko_componentType,
  s: true
}, _marko_component);