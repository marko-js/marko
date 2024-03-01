import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "packages/translator-interop/src/__tests__/fixtures/interop-events-tags-to-class/components/class-counter.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {
  onCreate() {
    this.state = {
      count: 0
    };
  },
  handleClick() {
    this.state.count++;
    this.emit("count", this.state.count);
  }
};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w("<button id=class-api>");
  out.w(_marko_escapeXml(state.count));
  out.w("</button>");
}, {
  t: _marko_componentType,
  d: true
}, _marko_component);