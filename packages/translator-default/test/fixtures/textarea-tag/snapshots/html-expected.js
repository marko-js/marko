import { t as _t } from "marko/src/runtime/html";

const _marko_template = _t();

export default _marko_template;
import _marko_renderer from "marko/src/runtime/components/renderer";
const _marko_componentType = "packages/translator-default/test/fixtures/textarea-tag/template.marko",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w("<textarea>");
  out.w("\n  hello world\n");
  out.w("</textarea>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);