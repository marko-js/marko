import { t as _t } from "marko/src/runtime/vdom/index.js";
const _marko_componentType = "packages/translator-default/test/fixtures/custom-tag-parameters/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  _marko_tag(_customTag, {
    "renderBody": (out, a, b, {
      c
    }) => {
      out.be("div", null, "1", _component, null, 0);
      out.t(a, _component);
      out.t(" ", _component);
      out.t(b, _component);
      out.t(" ", _component);
      out.t(c, _component);
      out.ee();
    }
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);