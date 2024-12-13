import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "aJCOoHo",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_attr from "marko/dist/runtime/html/helpers/attr.js";
import { d as _marko_escape_double_quotes } from "marko/dist/runtime/html/helpers/escape-quotes.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w(`<div id=shorthand></div><div${_marko_attr("id", dynamic)}></div><div id="partial-${_marko_escape_double_quotes(dynamic)}"></div>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);