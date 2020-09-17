const _marko_template = _t();

export default _marko_template;
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag";
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/dom";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("F7IQjQ3o", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _marko_dynamic_tag(out, input.x, () => ({
    "header": {
      "class": "my-header",
      "renderBody": out => {
        out.t("Header content", component);
      }
    },
    "footer": {
      "class": "my-footer",
      "renderBody": out => {
        out.t("Footer content", component);
      }
    }
  }), out => {
    out.t("Body content", component);
  }, null, null, _component, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);