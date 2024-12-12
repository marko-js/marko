import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "__tests__/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
class MyClass {
  y = 2;
}
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {
  onCreate() {
    this.y = 2
  }
};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {}, {
  t: _marko_componentType,
  d: true
}, _marko_component);