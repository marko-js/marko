import { t as _t } from "marko/dist/runtime/html";

const _marko_template = _t();

export default _marko_template;
import _marko_class_merge from "marko/dist/runtime/helpers/class-value";
import _marko_attr from "marko/dist/runtime/html/helpers/attr";
import _marko_renderer from "marko/dist/runtime/components/renderer";
const _marko_componentType = "SA1M0lYk",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w(`<div${_marko_attr("class", _marko_class_merge(input.className))}${_marko_attr("foo", 'a' + input.foo + 'b')}${_marko_attr("bar", `a ${input.foo} b`)}></div>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);