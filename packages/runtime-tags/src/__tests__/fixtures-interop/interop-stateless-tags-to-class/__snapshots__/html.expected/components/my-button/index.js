import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "__tests__/components/my-button/index.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag.js";
import _marko_props from "marko/src/runtime/html/helpers/data-marko.js";
import _marko_attrs from "marko/src/runtime/html/helpers/attrs.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w(`<button${_marko_props(out, _componentDef, {
    "onclick": _componentDef.d("click", "handleClick", false)
  })}${_marko_attrs(input)}>`);
  _marko_dynamic_tag(out, input.renderBody, null, null, null, null, _componentDef, "1");
  out.w("</button>");
}, {
  t: _marko_componentType,
  s: true,
  d: true
}, _marko_component);