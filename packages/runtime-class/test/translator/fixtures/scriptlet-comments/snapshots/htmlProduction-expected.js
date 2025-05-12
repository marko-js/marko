import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "Baccatl",
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
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  console.log("hello");
  console.log("world"); // after

  /** before */console.log("again");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);