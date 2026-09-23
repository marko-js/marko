import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "Wg2ZjF8",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_constElement from "marko/dist/runtime/vdom/helpers/const-element.js";
const _marko_node = _marko_constElement("p", null, 2).t("A slash and literal ").t("\\${text}");
const _marko_node2 = _marko_constElement("p", null, 1).t("A path C:\\Users\\dev");
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.be("p", null, "0", _component, null, 0);
  out.t("A literal ", _component);
  out.t("${placeholder} and a live ", _component);
  out.t(input.name, _component);
  out.ee();
  out.be("p", null, "1", _component, null, 0);
  out.t("A slash before a placeholder\\", _component);
  out.t(input.name, _component);
  out.ee();
  out.n(_marko_node, _component);
  out.n(_marko_node2, _component);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);