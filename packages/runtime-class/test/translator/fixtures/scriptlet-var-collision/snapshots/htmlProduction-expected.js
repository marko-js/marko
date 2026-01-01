import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "WPxc0HF",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  const x = 1;
  out.w("<div>");
  (() => {
    var x = 2;
    out.w(_marko_escapeXml(x));
  })();
  out.w(`</div><div>${_marko_escapeXml(x)}</div>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);