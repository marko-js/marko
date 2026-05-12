import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "__tests__/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import Child from "./child.marko" with { lazy: "load" };
import _Child from "./child.marko";
import _marko_asset_runtime from "assets-runtime";
import { withAssets as _marko_with_assets } from "marko/src/runtime/helpers/with-entry.js";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import _initComponents from "marko/src/core-tags/components/init-components-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
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
  out.w("<button id=toggle>");
  out.w("toggle");
  out.w("</button>");
  if (state.show) {
    _marko_tag(_marko_with_assets(_Child, _marko_asset_runtime, "__tests__/child.marko"), {
      "value": 42
    }, out, _componentDef, "1");
  }
  _marko_tag(_initComponents, {}, out, _componentDef, "2");
}, {
  t: _marko_componentType,
  d: true
}, _marko_component);