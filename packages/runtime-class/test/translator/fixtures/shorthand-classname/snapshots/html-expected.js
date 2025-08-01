import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "__tests__/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_class_merge from "marko/src/runtime/helpers/class-value.js";
import _marko_attr from "marko/src/runtime/html/helpers/attr.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w("<div class=shorthand></div>");
  out.w("<div class=\"shorthand1 shorthand2\"></div>");
  out.w("<div class=\"shorthand1 shorthand2 inline\"></div>");
  out.w(`<div${_marko_attr("class", _marko_class_merge(["shorthand1 shorthand2", dynamic1]))}></div>`);
  out.w(`<div${_marko_attr("class", _marko_class_merge([dynamic1, "inline"]))}></div>`);
  out.w(`<div${_marko_attr("class", _marko_class_merge([dynamic1, "shorthand2", "inline"]))}></div>`);
  out.w(`<div${_marko_attr("class", _marko_class_merge([dynamic1, "shorthand2", dynamic2]))}></div>`);
  out.w(`<div${_marko_attr("class", _marko_class_merge([dynamic1, "shorthand2", dynamic2, dynamic3]))}></div>`);
  out.w(`<div${_marko_attr("class", _marko_class_merge(["shorthand", dynamic1, dynamic2]))}></div>`);
  out.w(`<div${_marko_attr("class", _marko_class_merge([`partially-${dynamic1}`, "shorthand2", dynamic2]))}></div>`);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);