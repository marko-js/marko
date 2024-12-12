import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "__tests__/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml.js";
import "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import _tagsCounter from "./components/tags-counter.marko";
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag.js";
import _initComponents from "marko/src/core-tags/components/init-components-tag.js";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
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
  out.w("<button id=class>");
  out.w(_marko_escapeXml(state.count));
  out.w("</button>");
  _marko_dynamic_tag(out, _tagsCounter, () => ({
    "count": state.count
  }), null, null, null, _componentDef, "1");
  _marko_tag(_initComponents, {}, out, _componentDef, "2");
}, {
  t: _marko_componentType,
  d: true
}, _marko_component);