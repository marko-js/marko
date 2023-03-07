import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "packages/translator-default/test/fixtures/svg-tag/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w("<svg height=100 width=100>");
  out.w("<circle cx=50 cy=50 r=40 stroke=black stroke-width=3 fill=red />");
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
  out.w("<a xlink:href=https://developer.mozilla.org/ >");
  out.w("<text x=10 y=25>");
  out.w("MDN Web Docs");
  out.w("</text>");
  out.w("</a>");
  out.w("</svg>");
  out.w("<a></a>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);