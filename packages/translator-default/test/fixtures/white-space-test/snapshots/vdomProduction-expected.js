import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "SaK5Cpp",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_constElement from "marko/dist/runtime/vdom/helpers/const-element.js";
const _marko_node = _marko_constElement("div", null, 4).e("div", null, 3).t("Hello ").e("div", null, 1).t(" ").t(" World").e("div", null, 1).t(" Hello").e("pre", null, 1).t("\n    This should  \n      be preserved\n  ").e("div", null, 1).e("div", null, 1).t("Hello ");
const _marko_node2 = _marko_constElement("div", null, 0);
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.n(_marko_node, _component);
  out.be("div", null, "7", _component, null, 0);
  scriptletA();
  scriptletB();
  out.t("Hello ", _component);
  scriptletC();
  out.t("World", _component);
  scriptletD();
  out.ee();
  out.t(" Hello World! ", _component);
  out.t(a, _component);
  out.t(b, _component);
  out.n(_marko_node2, _component);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);