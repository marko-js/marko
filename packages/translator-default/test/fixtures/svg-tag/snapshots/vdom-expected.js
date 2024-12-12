import { t as _t } from "marko/src/runtime/vdom/index.js";
const _marko_componentType = "__tests__/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_renderer from "marko/src/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.be("svg", {
    "height": "100",
    "width": "100"
  }, "0", _component, null, 0);
  out.e("circle", {
    "cx": "50",
    "cy": "50",
    "r": "40",
    "stroke": "black",
    "stroke-width": "3",
    "fill": "red"
  }, "1", _component, 0, 0);
  out.e("a", null, "2", _component, 0, 0);
  out.be("style", null, "3", _component, null, 0);
  out.t("div { color: green }", _component);
  out.ee();
  out.be("script", null, "4", _component, null, 0);
  out.t("alert(\"Hello\");", _component);
  out.ee();
  out.be("title", null, "5", _component, null, 0);
  out.t("Test", _component);
  out.ee();
  out.be("a", {
    "xlink:href": "https://developer.mozilla.org/"
  }, "6", _component, null, 0);
  out.be("text", {
    "x": "10",
    "y": "25"
  }, "7", _component, null, 0);
  out.t("MDN Web Docs", _component);
  out.ee();
  out.ee();
  out.ee();
  out.e("a", null, "8", _component, 0, 0);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);