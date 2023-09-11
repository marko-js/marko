import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml.js";
import _marko_tags_compat from "marko/src/runtime/helpers/tags-compat.js";
import _tagsLayout from "./components/tags-layout.marko";
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {
  onCreate() {
    this.state = {
      multiplier: 1
    };
  },
  increment() {
    this.state.multiplier++;
  }
};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_dynamic_tag(out, _tagsLayout, null, (out, baseCount, message) => {
    out.w("<h1>");
    out.w(_marko_escapeXml(message));
    out.w("</h1>");
    out.w("<button id=class>");
    out.w(_marko_escapeXml(state.multiplier));
    out.w(" * ");
    out.w(_marko_escapeXml(baseCount));
    out.w(" = ");
    out.w(_marko_escapeXml(baseCount * state.multiplier));
    out.w("</button>");
  }, null, null, _componentDef, "0");
}, {
  t: _marko_componentType,
  d: true
}, _marko_component);