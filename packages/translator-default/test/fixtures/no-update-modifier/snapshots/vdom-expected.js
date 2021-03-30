import { t as _t } from "marko/src/runtime/vdom";

const _marko_template = _t();

export default _marko_template;
import "marko/src/runtime/vdom/preserve-attrs";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("packages/translator-default/test/fixtures/no-update-modifier/template.marko", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.e("input", {
    "value": input.defaultValue
  }, "0", component, 0, 0, {
    pa: ["value"]
  });
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);