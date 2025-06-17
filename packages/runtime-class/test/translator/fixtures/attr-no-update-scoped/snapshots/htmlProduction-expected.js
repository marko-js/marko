import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "AqQHLBR",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_props from "marko/dist/runtime/html/helpers/data-marko.js";
import _marko_attr from "marko/dist/runtime/html/helpers/attr.js";
import _preserve from "marko/dist/core-tags/components/preserve-tag.js";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_tag(_preserve, {
    "n": true,
    "renderBody": out => {
      out.w(`<input${_marko_props(out, _componentDef, 0, "0")}${_marko_attr("id", _componentDef.elId("input1"))}>`);
    }
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);