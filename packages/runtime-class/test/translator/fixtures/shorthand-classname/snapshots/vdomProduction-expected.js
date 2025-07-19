import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "fNOmaCr",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_constElement from "marko/dist/runtime/vdom/helpers/const-element.js";
const _marko_node = _marko_constElement("div", {
  "class": "shorthand"
}, 0);
const _marko_node2 = _marko_constElement("div", {
  "class": "shorthand1 shorthand2"
}, 0);
const _marko_node3 = _marko_constElement("div", {
  "class": "shorthand1 shorthand2 inline"
}, 0);
import _marko_class_merge from "marko/dist/runtime/helpers/class-value.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.n(_marko_node, _component);
  out.n(_marko_node2, _component);
  out.n(_marko_node3, _component);
  out.e("div", {
    "class": _marko_class_merge(["shorthand1 shorthand2", dynamic1])
  }, "3", _component, 0, 1);
  out.e("div", {
    "class": _marko_class_merge([dynamic1, "inline"])
  }, "4", _component, 0, 1);
  out.e("div", {
    "class": _marko_class_merge([dynamic1, "shorthand2", "inline"])
  }, "5", _component, 0, 1);
  out.e("div", {
    "class": _marko_class_merge([dynamic1, "shorthand2", dynamic2])
  }, "6", _component, 0, 1);
  out.e("div", {
    "class": _marko_class_merge([dynamic1, "shorthand2", dynamic2, dynamic3])
  }, "7", _component, 0, 1);
  out.e("div", {
    "class": _marko_class_merge(["shorthand", dynamic1, dynamic2])
  }, "8", _component, 0, 1);
  out.e("div", {
    "class": _marko_class_merge([`partially-${dynamic1}`, "shorthand2", dynamic2])
  }, "9", _component, 0, 1);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);