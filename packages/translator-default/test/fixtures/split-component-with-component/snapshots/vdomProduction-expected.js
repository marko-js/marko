const _marko_template = _t();

export default _marko_template;
import _marko_component from "./template.component.js";
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/dom";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry-browser";
import _marko_split_component from "./template.component-browser.js";

const _marko_componentType = _marko_registerComponent("Q1n_G5T-", () => _marko_split_component),
      _marko_component2 = _marko_component;

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.e("div", null, "0", component, 0, 0);
}, {
  t: _marko_componentType,
  s: true
}, _marko_component2);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component2, _marko_template._);