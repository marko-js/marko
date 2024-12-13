import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "XkVfd6m",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_constElement from "marko/dist/runtime/vdom/helpers/const-element.js";
const _marko_node = _marko_constElement("script", null, 3).t("\n    ").t("Hello <b> </script>").t("\n  ");
const _marko_node2 = _marko_constElement("style", null, 3).t("\n    ").t("Hello <b> </style>").t("\n  ");
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.be("div", null, "0", _component, null, 0);
  out.t(input.x, _component);
  out.t("Hello world <a/>", _component);
  out.h(input.x, _component);
  out.h("Hello world <a/>", _component);
  out.n(_marko_node, _component);
  out.n(_marko_node2, _component);
  out.ee();
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);