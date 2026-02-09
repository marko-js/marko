import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "__tests__/components/my-button.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag.js";
import _marko_props from "marko/src/runtime/html/helpers/data-marko.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
import _marko_skip_serialize from "marko/src/runtime/helpers/skip-serialize.js";
_marko_template._ = _marko_renderer(function (_input, out, _componentDef, _component, state, $global) {
  const input = _marko_skip_serialize(_input);
  out.w(`<button${_marko_props(out, _componentDef, {
    "onclick": _componentDef.d("click", "emit", false, ["click"])
  })}>`);
  _marko_dynamic_tag(out, input.renderBody, null, null, null, null, _componentDef, "1");
  out.w("</button>");
}, {
  t: _marko_componentType,
  s: true,
  d: true
}, _marko_component);