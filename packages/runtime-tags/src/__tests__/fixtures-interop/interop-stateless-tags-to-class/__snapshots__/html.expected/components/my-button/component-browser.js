import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "__tests__/components/my-button/component-browser.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
export default class {
  handleClick(e) {
    if (!this.input.disabled) {
      this.emit("click", e);
    }
  }
}
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);