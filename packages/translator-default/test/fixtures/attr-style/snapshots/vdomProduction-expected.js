const _marko_template = _t();

export default _marko_template;
import _marko_style_merge from "marko/dist/runtime/helpers/style-value";
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag";
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag";
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/dom";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("Up7A+MWi", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.e("div", {
    "style": _marko_style_merge({
      color: input.color
    })
  }, "0", component, 0, 1);
  out.e("div", {
    "style": "width:100px;"
  }, "1", component, 0, 1);
  out.e("div", {
    "style": "color: green"
  }, "2", component, 0, 1);

  _marko_tag(_customTag, {
    "style": {
      color: input.color
    }
  }, out, _component, "3");

  _marko_tag(_customTag, {
    "style": {
      width: 100
    }
  }, out, _component, "4");

  _marko_tag(_customTag, {
    "style": "color: green"
  }, out, _component, "5");

  _marko_dynamic_tag(out, input.test, () => ({
    "style": {
      color: "green"
    },
    "test": {
      "style": {
        color: "green"
      },
      "renderBody": out => {
        out.t("Hello", component);
      }
    }
  }), null, null, null, _component, "6");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);