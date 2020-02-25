const _marko_template = _t(__filename);

export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml";
import _marko_to_string from "marko/src/runtime/helpers/to-string";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "5nWTrVOu",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w(`Hello ${_marko_escapeXml(input.name)}! Hello ${_marko_to_string(input.name)}! Hello ${_marko_to_string(input.missing)}!`);
}, {
  ___type: _marko_componentType,
  ___implicit: true
}, _marko_component);