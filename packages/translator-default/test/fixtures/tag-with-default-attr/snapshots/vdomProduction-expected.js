import { t as _t } from "marko/dist/runtime/vdom";

const _marko_componentType = "d4MwwGDt",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_createElement from "marko/dist/runtime/vdom/helpers/v-element";

const _marko_node = _marko_createElement("div", {
  "default": ""
}, "0", null, 0, 0);

const _marko_node2 = _marko_createElement("div", null, "1", null, 0, 0);

import _marko_renderer from "marko/dist/runtime/components/renderer";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry";

_marko_registerComponent(_marko_componentType, () => _marko_template);

const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.n(_marko_node, _component);
  out.n(_marko_node2, _component);
  out.e("div", {
    "default": abc
  }, "2", _component, 0, 0);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);