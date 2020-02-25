const _marko_template = _t(__filename);

export default _marko_template;
import _marko_class_merge from "marko/src/runtime/helpers/class-value";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("7sGwwCGU", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.be("div", {
    "class": "shorthand"
  }, "0", component, 0, 1);
  out.ee();
  out.be("div", {
    "class": "shorthand1 shorthand2"
  }, "1", component, 0, 1);
  out.ee();
  out.be("div", {
    "class": "shorthand1 shorthand2 inline"
  }, "2", component, 0, 1);
  out.ee();
  out.be("div", {
    "class": _marko_class_merge(["shorthand1 shorthand2", dynamic1])
  }, "3", component, 0, 1);
  out.ee();
  out.be("div", {
    "class": _marko_class_merge([dynamic1, "inline"])
  }, "4", component, 0, 1);
  out.ee();
  out.be("div", {
    "class": _marko_class_merge([dynamic1, "shorthand2", "inline"])
  }, "5", component, 0, 1);
  out.ee();
  out.be("div", {
    "class": _marko_class_merge([dynamic1, "shorthand2", dynamic2])
  }, "6", component, 0, 1);
  out.ee();
  out.be("div", {
    "class": _marko_class_merge([dynamic2, dynamic3, dynamic1, "shorthand2"])
  }, "7", component, 0, 1);
  out.ee();
  out.be("div", {
    "class": _marko_class_merge([dynamic1, dynamic2, "shorthand"])
  }, "8", component, 0, 1);
  out.ee();
  out.be("div", {
    "class": _marko_class_merge(["partially-" + dynamic1, "shorthand2", dynamic2])
  }, "9", component, 0, 1);
  out.ee();
}, {
  ___type: _marko_componentType,
  ___implicit: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);