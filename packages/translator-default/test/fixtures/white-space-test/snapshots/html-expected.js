import { t as _t } from "marko/src/runtime/html/index.js";

const _marko_componentType = "packages/translator-default/test/fixtures/white-space-test/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.w("<div>");
  out.w("<div>");
  out.w("Hello ");
  out.w("<div>");
  out.w(" ");
  out.w("</div>");
  out.w(" World");
  out.w("</div>");
  out.w("<div>");
  out.w(" Hello");
  out.w("</div>");
  out.w("<pre>");
  out.w("\n    This should  \n      be preserved\n  ");
  out.w("</pre>");
  out.w("<div>");
  out.w("<div>");
  out.w("Hello ");
  out.w("</div>");
  out.w("</div>");
  out.w("</div>");
  out.w("<div>");
  scriptletA();
  scriptletB();
  out.w("Hello ");
  scriptletC();
  out.w("World");
  scriptletD();
  out.w("</div>");
  out.w(" Hello World! ");
  out.w(_marko_escapeXml(a));
  out.w(_marko_escapeXml(b));
  out.w("<div></div>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);