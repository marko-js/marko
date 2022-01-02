import { t as _t } from "marko/src/runtime/vdom/index.js";

const _marko_componentType = "packages/translator-default/test/fixtures/shorthand-classname/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_class_merge from "marko/src/runtime/helpers/class-value.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry";

_marko_registerComponent(_marko_componentType, () => _marko_template);

const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.e("div", {
    "class": "shorthand"
  }, "0", _component, 0, 1);
  out.e("div", {
    "class": "shorthand1 shorthand2"
  }, "1", _component, 0, 1);
  out.e("div", {
    "class": "shorthand1 shorthand2 inline"
  }, "2", _component, 0, 1);
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
    "class": _marko_class_merge([dynamic2, dynamic3, dynamic1, "shorthand2"])
  }, "7", _component, 0, 1);
  out.e("div", {
    "class": _marko_class_merge([dynamic1, dynamic2, "shorthand"])
  }, "8", _component, 0, 1);
  out.e("div", {
    "class": _marko_class_merge(["partially-" + dynamic1, "shorthand2", dynamic2])
  }, "9", _component, 0, 1);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);