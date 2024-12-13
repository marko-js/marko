import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "__tests__/index.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_component from "./component.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component2 = _marko_component;
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w("<div></div>");
}, {
  t: _marko_componentType,
  d: true
}, _marko_component2);