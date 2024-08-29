import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "packages/translator-default/test/fixtures/attr-template-literal-escape/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { d as _marko_escape_double_quotes } from "marko/src/runtime/html/helpers/escape-quotes.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w(`<div foo="Hello ${_marko_escape_double_quotes(input.name)}"></div>`);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);