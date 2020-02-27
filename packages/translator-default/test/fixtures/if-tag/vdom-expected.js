const _marko_template = _t(__filename);

export default _marko_template;
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("HCe_Baop", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  if (a + b) {
    out.t("Hello", component);
  }

  if (a, b) {
    out.t("World", component);
  }

  out.be("div", null, "0", component, null, 0);

  if (x) {
    out.t("A", component);
  } else if (y) {
    out.t("B", component);
  } else {
    out.t("C", component);
  }

  out.ee();
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);