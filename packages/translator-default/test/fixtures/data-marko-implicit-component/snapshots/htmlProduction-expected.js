import { t as _t } from "marko/dist/runtime/html/index.js";

const _marko_componentType = "qc7Y7xBI",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml.js";
import _marko_props from "marko/dist/runtime/html/helpers/data-marko.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.w(`<div${_marko_props(out, _componentDef, {
    pa: ["class"]
  })} class=test>Hello ${_marko_escapeXml(input.name)}</div>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);