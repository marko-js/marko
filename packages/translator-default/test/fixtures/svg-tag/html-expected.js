const _marko_template = _t(__filename);

export default _marko_template;
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "hdShPuzM",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w("<svg height=100 width=100>");
  out.w("<circle cx=50 cy=50 r=40 stroke=black stroke-width=3 fill=red>");
  out.w("<a></a>");
  out.w("<style>");
  out.w("div { color: green }");
  out.w("</style>");
  out.w("<script>");
  out.w("alert(\"Hello\");");
  out.w("</script>");
  out.w("<title>");
  out.w("Test");
  out.w("</title>");
  out.w("</svg>");
  out.w("<a></a>");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);