import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "oc9q5vt",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
console.log("hello");
console.log("world"); // after

/** before */console.log("again");
// We
// Got
// COMMENTS
if (typeof window === "object") {
  console.log(window);
}
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  console.log("hello");
  console.log("world"); // after

  /** before */console.log("again");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);