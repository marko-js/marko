const _marko_template = _t();

export default _marko_template;
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml";
import _marko_props from "marko/dist/runtime/html/helpers/data-marko";
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/html";
const _marko_componentType = "qc7Y7xBI",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w(`<div${_marko_props(out, _component, {
    pa: ["class"]
  })} class=test>Hello ${_marko_escapeXml(input.name)}</div>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);