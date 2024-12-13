import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "DVxrY1o",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  if (a + b) {
    out.w("Hello");
  }
  if (a, b) {
    out.w("World");
  }
  out.w("<div>");
  if (x) {
    out.w("A");
  } else if (y) {
    out.w("B");
  } else {
    out.w("C");
  }
  out.w("</div>");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);