import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "LiNlLXh",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _test from "./test.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_tag(_test, {
    "class": input.class,
    "renderBody": (out, data) => {
      out.t("Hello ", _component);
      out.t(data.name, _component);
    }
  }, out, _componentDef, "0");
  out.be("div", null, "1", _component, null, 0);
  out.t("Hello ", _component);
  out.t(input.name, _component);
  out.be("span", null, "2", _component, null, 0);
  () => {
    data;
    const data = "foo";
    console.log(data);
  };
  out.t("Hello ", _component);
  out.t(input, _component);
  out.ee();
  if (true) {
    const data = "bar";
    out.t("Hello ", _component);
    out.t(data, _component);
  }
  out.ee();
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);