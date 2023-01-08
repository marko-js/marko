import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "packages/translator-default/test/fixtures/attr-escape/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_class_merge from "marko/src/runtime/helpers/class-value.js";
import _marko_attr from "marko/src/runtime/html/helpers/attr.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.w(`<div${_marko_attr("class", _marko_class_merge(input.className))}${_marko_attr("foo", 'a' + input.foo + 'b')}${_marko_attr("bar", `a ${input.foo} b`)}></div>`);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);