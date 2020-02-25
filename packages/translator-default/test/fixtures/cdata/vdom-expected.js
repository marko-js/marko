const _marko_template = _t(__filename);

export default _marko_template;
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("Yf6hG3qo", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.be("div", null, "0", component, null, 0);
  out.t("Here is a CDATA section: ");
  out.t(" < > & ");
  out.t(" with all kinds of unescaped text.");
  out.ee();
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);