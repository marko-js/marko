const _marko_template = _t(__filename);

export default _marko_template;
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/dom";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("m6h-ggcc", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.be("html", null, "0", component, null, 0);
  out.be("head", null, "1", component, null, 0);
  out.be("title", null, "2", component, null, 0);
  out.t("Title of the document", component);
  out.ee();
  out.ee();
  out.be("body", null, "3", component, null, 0);
  out.t("The content of the document......", component);
  out.ee();
  out.ee();
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);