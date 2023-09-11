import { t as _t } from "marko/src/runtime/vdom/index.js";
const _marko_componentType = "packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_renderer from "marko/src/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {
  onCreate() {
    this.state = {
      count: 0
    };
  },
  increment() {
    this.state.count++;
  }
};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.be("button", {
    "id": "class",
    "data-parent": input.count
  }, "0", _component, null, 0, {
    "onclick": _componentDef.d("click", "increment", false)
  });
  out.t(state.count, _component);
  out.ee();
}, {
  t: _marko_componentType,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);