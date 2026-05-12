import { t as _t } from "marko/src/runtime/vdom/index.js";
const _marko_componentType = "__tests__/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_lazy_tag from "marko/src/runtime/helpers/lazy-tag.js";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {
  onCreate() {
    this.state = {
      show: false
    };
  },
  toggle() {
    this.state.show = !this.state.show;
  }
};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.be("button", {
    "id": "toggle"
  }, "0", _component, null, 1, {
    "onclick": _componentDef.d("click", "toggle", false)
  });
  out.t("toggle", _component);
  out.ee();
  if (state.show) {
    _marko_tag(_marko_lazy_tag(() => import("./child.marko")), {
      "value": 42
    }, out, _componentDef, "1");
  }
}, {
  t: _marko_componentType,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);