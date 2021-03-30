import { t as _t } from "marko/dist/runtime/html";

const _marko_template = _t();

export default _marko_template;
import _marko_renderer from "marko/dist/runtime/components/renderer";
const _marko_componentType = "Q2oCYb3A",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w("Hello John &amp; Suzy Invalid Entity: &b ; Valid Numeric Entity: &#34; Valid Hexadecimal Entity: &#x00A2;");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);