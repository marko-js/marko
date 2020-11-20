const _marko_template = _t();

export default _marko_template;
import _marko_createElement from "marko/dist/runtime/vdom/helpers/v-element";

const _marko_node = _marko_createElement("div", {
  "default": ""
}, "0", null, 0, 0);

const _marko_node2 = _marko_createElement("div", null, "1", null, 0, 0);

import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/dom";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("d4MwwGDt", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.n(_marko_node, component);
  out.n(_marko_node2, component);
  out.e("div", {
    "default": abc
  }, "2", component, 0, 0);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);