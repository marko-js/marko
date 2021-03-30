import { t as _t } from "marko/src/runtime/html";

const _marko_template = _t();

export default _marko_template;
import _marko_renderer from "marko/src/runtime/components/renderer";
const _marko_componentType = "packages/translator-default/test/fixtures/html-comment/template.marko",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w("<!--");
  out.w("test");
  out.w("-->");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);