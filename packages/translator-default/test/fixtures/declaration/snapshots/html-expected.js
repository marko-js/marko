import { t as _t } from "marko/src/runtime/html";

const _marko_template = _t();

export default _marko_template;
import _marko_renderer from "marko/src/runtime/components/renderer";
const _marko_componentType = "packages/translator-default/test/fixtures/declaration/template.marko",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w("<?xml version=\"1.0\" encoding=\"utf-8\"?>");
  out.w("<contact-info>");
  out.w("<name>");
  out.w("Hello World");
  out.w("</name>");
  out.w("</contact-info>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);