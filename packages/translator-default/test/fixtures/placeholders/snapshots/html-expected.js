import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "packages/translator-default/test/fixtures/placeholders/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml.js";
import _marko_to_string from "marko/src/runtime/helpers/to-string.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w("<div>");
  out.w(_marko_escapeXml(input.x));
  out.w("Hello world &lt;a/>");
  out.w(_marko_to_string(input.x));
  out.w("Hello world <a/>");
  out.w("<script>");
  out.w("\n    ");
  out.w("Hello <b> \\x3C/script>");
  out.w("\n  ");
  out.w("</script>");
  out.w("<style>");
  out.w("\n    ");
  out.w("Hello <b> \\3C/style>");
  out.w("\n  ");
  out.w("</style>");
  out.w("</div>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);