const _marko_template = _t();

export default _marko_template;
import _marko_attr from "marko/src/runtime/html/helpers/attr";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "packages/translator-default/test/fixtures/attr-scoped/template.marko",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w(`<div${_marko_attr("id", _component.elId("1"))}${_marko_attr("aria-described-by", _component.elId("b"))}></div>`);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);