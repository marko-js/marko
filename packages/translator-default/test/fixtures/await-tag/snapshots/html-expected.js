import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "packages/translator-default/test/fixtures/await-tag/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml.js";
import { a as _marko_repeatable_attr_tag, i as _marko_render_input } from "marko/src/runtime/helpers/attr-tag.js";
import _await from "marko/src/core-tags/core/await/renderer.js";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_tag(_await, _marko_render_input(() => {
    _marko_repeatable_attr_tag("then", {
      "renderBody": (out, result) => {
        out.w(_marko_escapeXml(result));
      }
    });
  }, {
    "_provider": promise,
    "_name": "promise"
  }), out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);