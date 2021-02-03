const _marko_template = _t();

export default _marko_template;
import _marko_class_merge from "marko/dist/runtime/helpers/class-value";
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/vdom";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("SA1M0lYk", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.e("div", {
    "class": _marko_class_merge(input.className),
    "foo": 'a' + input.foo + 'b',
    "bar": `a ${input.foo} b`
  }, "0", component, 0, 0);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);