const _marko_template = _t(__filename);

export default _marko_template;
import _marko_class_merge from "marko/src/runtime/helpers/class-value";
import _marko_attr from "marko/src/runtime/html/helpers/attr";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "LEvoi_BG",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w(`<div${_marko_attr("class", _marko_class_merge(input.className))}${_marko_attr("foo", 'a' + input.foo + 'b')}${_marko_attr("bar", `a ${input.foo} b`)}></div>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);