import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "kRgD_Wn",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
var foo = 123;
function bar() {}
var baz = 456;
let x = 1,
  y = 2;
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);