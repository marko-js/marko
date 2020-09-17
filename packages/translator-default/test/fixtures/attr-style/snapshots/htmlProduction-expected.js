const _marko_template = _t();

export default _marko_template;
import _marko_style_merge from "marko/dist/runtime/helpers/style-value";
import _marko_attr from "marko/dist/runtime/html/helpers/attr";
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag";
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag";
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/html";
const _marko_componentType = "iougQjrT",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w(`<div${_marko_attr("style", _marko_style_merge({
    color: input.color
  }))}></div><div style=width:100px;></div><div style="color: green"></div>`);

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
        out.w("Hello");
      }
    }
  }), null, null, null, _component, "6");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);