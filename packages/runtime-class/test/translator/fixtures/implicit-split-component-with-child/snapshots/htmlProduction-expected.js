import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "KKKBON0",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _child from "./components/child/index.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_props from "marko/dist/runtime/html/helpers/data-marko.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
import _marko_skip_serialize from "marko/dist/runtime/helpers/skip-serialize.js";
_marko_template._ = _marko_renderer(function (_input, out, _componentDef, _component, state, $global) {
  const input = _marko_skip_serialize(_input);
  out.w(`<button${_marko_props(out, _componentDef, {
    "onclick": _componentDef.d("click", "emit", false, ["click"])
  })}>`);
  _marko_tag(_child, {}, out, _componentDef, "1");
  out.w("</button>");
}, {
  t: _marko_componentType,
  s: true
}, _marko_component);