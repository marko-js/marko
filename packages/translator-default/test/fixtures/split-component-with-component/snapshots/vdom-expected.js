import { t as _t } from "marko/src/runtime/vdom";

const _marko_template = _t();

export default _marko_template;
import _marko_component from "./template.component.js";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";
import _marko_split_component from "./template.component-browser.js";

const _marko_componentType = _marko_registerComponent("packages/translator-default/test/fixtures/split-component-with-component/template.marko", () => _marko_split_component),
      _marko_component2 = _marko_component;

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.e("div", null, "0", component, 0, 0);
}, {
  t: _marko_componentType,
  s: true,
  d: true
}, _marko_component2);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component2, _marko_template._);