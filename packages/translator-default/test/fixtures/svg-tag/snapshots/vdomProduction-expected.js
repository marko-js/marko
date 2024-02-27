import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "LOy6P2CY",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_constElement from "marko/dist/runtime/vdom/helpers/const-element.js";
const _marko_node = _marko_constElement("circle", {
  "cx": "50",
  "cy": "50",
  "r": "40",
  "stroke": "black",
  "stroke-width": "3",
  "fill": "red"
}, 0);
const _marko_node2 = _marko_constElement("a", null, 0);
const _marko_node3 = _marko_constElement("style", null, 1).t("div { color: green }");
const _marko_node4 = _marko_constElement("script", null, 1).t("alert(\"Hello\");");
const _marko_node5 = _marko_constElement("title", null, 1).t("Test");
const _marko_node6 = _marko_constElement("text", {
  "x": "10",
  "y": "25"
}, 1).t("MDN Web Docs");
const _marko_node7 = _marko_constElement("a", null, 0);
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.be("svg", {
    "height": "100",
    "width": "100"
  }, "0", _component, null, 0);
  out.n(_marko_node, _component);
  out.n(_marko_node2, _component);
  out.n(_marko_node3, _component);
  out.n(_marko_node4, _component);
  out.n(_marko_node5, _component);
  out.be("a", {
    "xlink:href": "https://developer.mozilla.org/"
  }, "6", _component, null, 0);
  out.n(_marko_node6, _component);
  out.ee();
  out.ee();
  out.n(_marko_node7, _component);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);