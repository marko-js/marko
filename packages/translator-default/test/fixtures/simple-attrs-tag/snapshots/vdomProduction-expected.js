import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "YUZPhHIa",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_constElement from "marko/dist/runtime/vdom/helpers/const-element.js";
const _marko_node = _marko_constElement("div", {
  "style": "c:1px",
  "class": "b",
  "id": "a"
}, 0);
const _marko_node2 = _marko_constElement("div", {
  "style": "c:1px",
  "id": "a"
}, 0);
const _marko_node3 = _marko_constElement("div", {
  "style": "c:1px"
}, 0);
const _marko_node4 = _marko_constElement("div", {
  "a": "1",
  "style": "c:1px"
}, 0);
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.n(_marko_node, _component);
  out.n(_marko_node2, _component);
  out.n(_marko_node3, _component);
  out.e("div", {
    "style": "c:1px"
  }, "3", _component, 0, 0, {
    pa: {
      style: 1
    }
  });
  out.n(_marko_node4, _component);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);