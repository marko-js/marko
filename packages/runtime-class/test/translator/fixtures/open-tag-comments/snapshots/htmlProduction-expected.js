import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "gUZu7XH",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml.js";
import _of_fallback from "marko/dist/runtime/helpers/of-fallback.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w("<div class=card></div><input name=email type=email><input hidden type=text><section>Content</section>");
  for (const item of _of_fallback(input.items)) {
    out.w(_marko_escapeXml(item));
  }
  out.w("<form action=/search method=get>Search</form>");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);