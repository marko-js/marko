import { t as _t } from "marko/src/runtime/vdom/index.js";
const _marko_componentType = "__tests__/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_renderer from "marko/src/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.be("div", null, "0", _component, null, 0);
  out.be("div", null, "1", _component, null, 0);
  out.t("Hello ", _component);
  out.be("div", null, "2", _component, null, 0);
  out.t(" ", _component);
  out.ee();
  out.t(" World", _component);
  out.ee();
  out.be("div", null, "3", _component, null, 0);
  out.t(" Hello", _component);
  out.ee();
  out.be("pre", null, "4", _component, null, 0);
  out.t("\n    This should  \n      be preserved\n  ", _component);
  out.ee();
  out.be("div", null, "5", _component, null, 0);
  out.be("div", null, "6", _component, null, 0);
  out.t("Hello ", _component);
  out.ee();
  out.ee();
  out.ee();
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
  out.e("div", null, "8", _component, 0, 0);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);