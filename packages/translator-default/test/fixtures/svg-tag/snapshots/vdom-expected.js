const _marko_template = _t();

export default _marko_template;
import _marko_createElement from "marko/src/runtime/vdom/helpers/v-element";

const _marko_node = _marko_createElement("circle", {
  "cx": "50",
  "cy": "50",
  "r": "40",
  "stroke": "black",
  "stroke-width": "3",
  "fill": "red"
}, "1", null, 0, 0);

const _marko_node2 = _marko_createElement("a", null, "2", null, 0, 0);

const _marko_node3 = _marko_createElement("script", null, "4", null, 1, 0).t("alert(\"Hello\");");

const _marko_node4 = _marko_createElement("title", null, "5", null, 1, 0).t("Test");

const _marko_node5 = _marko_createElement("text", {
  "x": "10",
  "y": "25"
}, "7", null, 1, 0).t("MDN Web Docs");

const _marko_node6 = _marko_createElement("a", null, "8", null, 0, 0);

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
  out.n(_marko_node, component);
  out.n(_marko_node2, component);
  out.be("style", null, "3", component, null, 0);
  out.t("div { color: green }", component);
  out.ee();
  out.n(_marko_node3, component);
  out.n(_marko_node4, component);
  out.be("a", {
    "xlink:href": "https://developer.mozilla.org/"
  }, "6", component, null, 0);
  out.n(_marko_node5, component);
  out.ee();
  out.ee();
  out.n(_marko_node6, component);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);