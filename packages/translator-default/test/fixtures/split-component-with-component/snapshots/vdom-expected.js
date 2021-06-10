import { t as _t } from "marko/src/runtime/vdom";

const _marko_componentType = "packages/translator-default/test/fixtures/split-component-with-component/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_component from "./template.component.js";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry";
import _marko_split_component from "./template.component-browser.js";

_marko_registerComponent(_marko_componentType, () => _marko_split_component);

const _marko_component2 = _marko_component;
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.e("div", null, "0", _component, 0, 0);
}, {
  t: _marko_componentType,
  s: true,
  d: true
}, _marko_component2);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component2, _marko_template._);