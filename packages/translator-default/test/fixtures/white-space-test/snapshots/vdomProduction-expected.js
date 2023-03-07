import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "TRrwGTtp",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_createElement from "marko/dist/runtime/vdom/helpers/v-element.js";
const _marko_node = _marko_createElement("div", null, "0", null, 4, 0).e("div", null, "1", null, 3, 0).t("Hello ").e("div", null, "2", null, 1, 0).t(" ").t(" World").e("div", null, "3", null, 1, 0).t(" Hello").e("pre", null, "4", null, 1, 0).t("\n    This should  \n      be preserved\n  ").e("div", null, "5", null, 1, 0).e("div", null, "6", null, 1, 0).t("Hello ");
const _marko_node2 = _marko_createElement("div", null, "8", null, 0, 0);
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry";
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