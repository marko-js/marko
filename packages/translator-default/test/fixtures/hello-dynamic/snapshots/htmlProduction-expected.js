const _marko_template = _t();

export default _marko_template;
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml";
import _marko_to_string from "marko/dist/runtime/helpers/to-string";
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/html";
const _marko_componentType = "kCnjd+Lm",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w(`Hello ${_marko_escapeXml(input.name)}! Hello ${_marko_to_string(input.name)}! Hello ${_marko_to_string(input.missing)}!`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);