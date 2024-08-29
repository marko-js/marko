import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "packages/translator-default/test/fixtures/shorthand-id/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_attr from "marko/src/runtime/html/helpers/attr.js";
import { d as _marko_escape_double_quotes } from "marko/src/runtime/html/helpers/escape-quotes.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w("<div id=shorthand></div>");
  out.w(`<div${_marko_attr("id", dynamic)}></div>`);
  out.w(`<div id="partial-${_marko_escape_double_quotes(dynamic)}"></div>`);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);