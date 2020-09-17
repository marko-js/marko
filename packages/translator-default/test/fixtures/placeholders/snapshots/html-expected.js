const _marko_template = _t();

export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml";
import _marko_to_string from "marko/src/runtime/helpers/to-string";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "packages/translator-default/test/fixtures/placeholders/template.marko",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w("<div>");
  out.w(_marko_escapeXml(input.x));
  out.w("Hello world &lt;a/>");
  out.w(_marko_to_string(input.x));
  out.w("Hello world <a/>");
  out.w("<script>");
  out.w("\n    ");
  out.w("Hello <b> \\u003C/script>");
  out.w("\n  ");
  out.w("</script>");
  out.w("<style>");
  out.w("\n    ");
  out.w("Hello <b> \\003C/style>");
  out.w("\n  ");
  out.w("</style>");
  out.w("</div>");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);