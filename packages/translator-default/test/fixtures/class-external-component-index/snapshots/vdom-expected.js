import { t as _t } from "marko/src/runtime/vdom/index.js";

const _marko_componentType = "packages/translator-default/test/fixtures/class-external-component-index/index.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_component from "./component.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry";

_marko_registerComponent(_marko_componentType, () => _marko_template);

const _marko_component2 = _marko_component;
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.e("div", null, "0", _component, 0, 0);
}, {
  t: _marko_componentType,
  d: true
}, _marko_component2);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component2, _marko_template._);