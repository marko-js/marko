const _marko_template = _t(__filename);

export default _marko_template;
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "HCe_Baop",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
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