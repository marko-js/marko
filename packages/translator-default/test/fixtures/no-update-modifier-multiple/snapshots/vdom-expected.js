import { t as _t } from "marko/src/runtime/vdom/index.js";
const _marko_componentType = "packages/translator-default/test/fixtures/no-update-modifier-multiple/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import "marko/src/runtime/vdom/preserve-attrs.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.be("div", null, "0", _component, null, 0);
  out.e("input", {
    "value": input.defaultValue
  }, "1", _component, 0, 0, {
    pa: ["value"]
  });
  out.e("input", {
    "type": "checkbox",
    "value": input.defaultValue,
    "checked": input.checked
  }, "2", _component, 0, 0, {
    pa: ["value", "checked"]
  });
  out.ee();
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);