import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "packages/translator-default/test/fixtures/simple/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.w("Hello ");
  out.w(_marko_escapeXml(input.name));
  out.w("! ");
  if (input.colors.length) {
    out.w("<ul>");
    {
      let _keyValue = 0;
      for (const color of input.colors) {
        const _keyScope = `[${_keyValue++}]`;
        out.w("<li>");
        out.w(_marko_escapeXml(color));
        out.w("</li>");
      }
    }
    out.w("</ul>");
  } else {
    out.w("<div>");
    out.w("No colors!");
    out.w("</div>");
  }
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);