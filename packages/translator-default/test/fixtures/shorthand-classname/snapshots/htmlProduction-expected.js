import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "WqUsRyBC",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_class_merge from "marko/dist/runtime/helpers/class-value.js";
import _marko_attr from "marko/dist/runtime/html/helpers/attr.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w(`<div class=shorthand></div><div class="shorthand1 shorthand2"></div><div class="shorthand1 shorthand2 inline"></div><div${_marko_attr("class", _marko_class_merge(["shorthand1 shorthand2", dynamic1]))}></div><div${_marko_attr("class", _marko_class_merge([dynamic1, "inline"]))}></div><div${_marko_attr("class", _marko_class_merge([dynamic1, "shorthand2", "inline"]))}></div><div${_marko_attr("class", _marko_class_merge([dynamic1, "shorthand2", dynamic2]))}></div><div${_marko_attr("class", _marko_class_merge([dynamic2, dynamic3, dynamic1, "shorthand2"]))}></div><div${_marko_attr("class", _marko_class_merge([dynamic1, dynamic2, "shorthand"]))}></div><div${_marko_attr("class", _marko_class_merge([`partially-${dynamic1}`, "shorthand2", dynamic2]))}></div>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);