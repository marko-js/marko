import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "Up7A+MWi",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_style_merge from "marko/dist/runtime/helpers/style-value.js";
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.e("div", {
    "style": _marko_style_merge({
      color: input.color
    })
  }, "0", _component, 0, 1);
  out.e("div", {
    "style": "width:100px;"
  }, "1", _component, 0, 1);
  out.e("div", {
    "style": "color: green"
  }, "2", _component, 0, 1);
  _marko_tag(_customTag, {
    "style": {
      color: input.color
    }
  }, out, _componentDef, "3");
  _marko_tag(_customTag, {
    "style": {
      width: 100
    }
  }, out, _componentDef, "4");
  _marko_tag(_customTag, {
    "style": "color: green"
  }, out, _componentDef, "5");
  _marko_dynamic_tag(out, input.test, () => ({
    "style": {
      color: "green"
    },
    "test": {
      "style": {
        color: "green"
      },
      "renderBody": out => {
        out.t("Hello", _component);
      }
    }
  }), null, null, null, _componentDef, "6");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);