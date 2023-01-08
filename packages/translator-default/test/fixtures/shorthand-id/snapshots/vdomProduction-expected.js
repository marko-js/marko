import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "wUxkdMJU",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_createElement from "marko/dist/runtime/vdom/helpers/v-element.js";
const _marko_node = _marko_createElement("div", {
  "id": "shorthand"
}, "0", null, 0, 1);
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.n(_marko_node, _component);
  out.e("div", {
    "id": dynamic
  }, "1", _component, 0, 1);
  out.e("div", {
    "id": `partial-${dynamic}`
  }, "2", _component, 0, 1);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);