import { t as _t } from "marko/dist/runtime/vdom/index.js";

const _marko_componentType = "az9GXCCR",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import "marko/dist/runtime/vdom/preserve-attrs.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry";

_marko_registerComponent(_marko_componentType, () => _marko_template);

const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.e("input", {
    "value": input.defaultValue
  }, "0", _component, 0, 0, {
    pa: ["value"]
  });
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);