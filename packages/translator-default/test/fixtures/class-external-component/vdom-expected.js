const _marko_template = _t(__filename);

export default _marko_template;
import _marko_component from "./template.component.js";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("8XKzQuec", () => _marko_template),
      _marko_component2 = _marko_component;

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.be("div", null, "0", component, 0, 0);
  out.ee();
}, {
  t: _marko_componentType
}, _marko_component2);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component2, _marko_template._);