import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "packages/translator-default/test/fixtures/attr-style/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_style_merge from "marko/src/runtime/helpers/style-value.js";
import _marko_attr from "marko/src/runtime/html/helpers/attr.js";
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import _marko_self_iterator from "marko/src/runtime/helpers/self-iterator.js";
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w(`<div${_marko_attr("style", _marko_style_merge({
    color: input.color
  }))}></div>`);
  out.w("<div style=width:100px;></div>");
  out.w("<div style=\"color: green\"></div>");
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
        out.w("Hello");
      },
      [Symbol.iterator]: _marko_self_iterator
    }
  }), null, null, null, _componentDef, "6");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);