import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "KRaN$$k",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { d as _marko_escape_double_quotes } from "marko/dist/runtime/html/helpers/escape-quotes.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w(`<div foo="Hello ${_marko_escape_double_quotes(input.name)}"></div>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);