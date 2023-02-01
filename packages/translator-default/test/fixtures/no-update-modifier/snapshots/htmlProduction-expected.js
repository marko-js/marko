import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "az9GXCCR",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_props from "marko/dist/runtime/html/helpers/data-marko.js";
import _marko_attr from "marko/dist/runtime/html/helpers/attr.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.w(`<input${_marko_props(out, _componentDef, {
    pa: ["value"]
  })}${_marko_attr("value", input.defaultValue)}>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);