const _marko_template = _t();

export default _marko_template;
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("packages/translator-default/test/fixtures/custom-tag-parameters/template.marko", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _marko_tag(_customTag, {
    "renderBody": (out, a, b, {
      c
    }) => {
      out.be("div", null, "1", component, null, 0);
      out.t(a, component);
      out.t(" ", component);
      out.t(b, component);
      out.t(" ", component);
      out.t(c, component);
      out.ee();
    }
  }, out, _component, "0");
}, {
  t: _marko_componentType,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);