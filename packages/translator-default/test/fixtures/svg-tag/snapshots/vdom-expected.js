const _marko_template = _t(__filename);

export default _marko_template;
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("packages/translator-default/test/fixtures/svg-tag/template.marko", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.be("svg", {
    "height": "100",
    "width": "100"
  }, "0", component, null, 0);
  out.e("circle", {
    "cx": "50",
    "cy": "50",
    "r": "40",
    "stroke": "black",
    "stroke-width": "3",
    "fill": "red"
  }, "1", component, 0, 0);
  out.e("a", null, "2", component, 0, 0);
  out.be("style", null, "3", component, null, 0);
  out.t("div { color: green }", component);
  out.ee();
  out.be("script", null, "4", component, null, 0);
  out.t("alert(\"Hello\");", component);
  out.ee();
  out.be("title", null, "5", component, null, 0);
  out.t("Test", component);
  out.ee();
  out.be("a", {
    "xlink:href": "https://developer.mozilla.org/"
  }, "6", component, null, 0);
  out.be("text", {
    "x": "10",
    "y": "25"
  }, "7", component, null, 0);
  out.t("MDN Web Docs", component);
  out.ee();
  out.ee();
  out.ee();
  out.e("a", null, "8", component, 0, 0);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);