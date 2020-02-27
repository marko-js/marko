const _marko_template = _t(__filename);

export default _marko_template;
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("01WxYw7m", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.be("div", null, "0", component, null, 0);
  out.be("div", null, "1", component, null, 0);
  out.t("Hello ", component);
  out.be("div", null, "2", component, null, 0);
  out.t(" ", component);
  out.ee();
  out.t(" World", component);
  out.ee();
  out.be("div", null, "3", component, null, 0);
  out.t(" Hello", component);
  out.ee();
  out.be("pre", null, "4", component, null, 0);
  out.t("\n    This should  \n      be preserved\n  ", component);
  out.ee();
  out.be("div", null, "5", component, null, 0);
  out.be("div", null, "6", component, null, 0);
  out.t("Hello ", component);
  out.ee();
  out.ee();
  out.ee();
  out.be("div", null, "7", component, null, 0);
  scriptletA();
  scriptletB();
  out.t("Hello ", component);
  scriptletC();
  out.t("World", component);
  scriptletD();
  out.ee();
  out.t(" Hello World! ", component);
  out.t(a);
  out.t(b);
  out.be("div", null, "8", component, 0, 0);
  out.ee();
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);