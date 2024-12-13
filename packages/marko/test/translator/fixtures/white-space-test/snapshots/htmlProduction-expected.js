import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "qGxGB4i",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w("<div><div>Hello <div> </div> World</div><div> Hello</div><pre>\n    This should  \n      be preserved\n  </pre><div><div>Hello </div></div></div><div>");
  scriptletA();
  scriptletB();
  out.w("Hello ");
  scriptletC();
  out.w("World");
  scriptletD();
  out.w(`</div> Hello World! ${_marko_escapeXml(a)}${_marko_escapeXml(b)}<div></div>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);