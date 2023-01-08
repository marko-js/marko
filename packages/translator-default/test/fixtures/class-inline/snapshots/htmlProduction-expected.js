import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "F7GLatBK",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {
  onCreate() {
    this.x = 1
    this.y = 2
    this.stuff();
  }
};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.w("<div></div>");
}, {
  t: _marko_componentType
}, _marko_component);