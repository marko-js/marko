import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "TP6I2Ph",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { a as _marko_repeatable_attr_tag, i as _marko_render_input } from "marko/dist/runtime/helpers/attr-tag.js";
import _await from "marko/dist/core-tags/core/await/renderer.js";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_tag(_await, _marko_render_input(() => {
    _marko_repeatable_attr_tag("then", {
      "renderBody": (out, {
        data
      }) => {
        console.log(data);
      }
    });
  }, {
    "_provider": Promise.resolve({
      data: true
    }),
    "_name": "Promise.resolve({\n  data: true\n})"
  }), out, _componentDef, "0");
  console.log(input);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);