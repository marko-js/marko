import { t as _t } from "marko/dist/runtime/html";

const _marko_componentType = "NRekT+g6",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml";
import _marko_renderer from "marko/dist/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.w(`Hello ${_marko_escapeXml(input.name)}! `);

  if (input.colors.length) {
    out.w("<ul>");
    {
      let _keyValue = 0;

      for (const color of input.colors) {
        const _keyScope = `[${_keyValue++}]`;
        out.w(`<li>${_marko_escapeXml(color)}</li>`);
      }
    }
    out.w("</ul>");
  } else {
    out.w("<div>No colors!</div>");
  }
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);