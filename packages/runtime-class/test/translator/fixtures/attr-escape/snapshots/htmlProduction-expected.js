import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "oRxrrpB",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_class_merge from "marko/dist/runtime/helpers/class-value.js";
import _marko_attr from "marko/dist/runtime/html/helpers/attr.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w(`<div${_marko_attr("class", _marko_class_merge(input.className))}${_marko_attr("foo", ('a' + input.foo + 'b'))} bar="a ${_marko_attr.d(input.foo)} b"></div>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);