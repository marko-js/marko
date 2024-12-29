import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "__tests__/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_props from "marko/src/runtime/html/helpers/data-marko.js";
import _marko_attr from "marko/src/runtime/html/helpers/attr.js";
import _preserve from "marko/src/core-tags/components/preserve-tag.js";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
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
  i: true,
  d: true
}, _marko_component);