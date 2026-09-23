import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "Wg2ZjF8",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w(`<p>A literal \${placeholder} and a live ${_marko_escapeXml(input.name)}</p><p>A slash before a placeholder\\${_marko_escapeXml(input.name)}</p><p>A slash and literal \\\${text}</p><p>A path C:\\Users\\dev</p>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);