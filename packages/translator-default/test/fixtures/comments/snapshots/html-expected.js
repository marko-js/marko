import { t as _t } from "marko/src/runtime/html";

const _marko_componentType = "packages/translator-default/test/fixtures/comments/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_renderer from "marko/src/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w("<div>");
  out.w("<!--");
  out.w("abc");
  out.w("-->");
  out.w("<!--[if lt IE 9]><script src=\"...\"></script><![endif]-->");
  out.w("<!--");
  out.w("[if lt IE 9]><script src=\"...\"></script><![endif]");
  out.w("-->");
  out.w("</div>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);