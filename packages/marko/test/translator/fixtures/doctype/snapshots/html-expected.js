import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "__tests__/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _initComponents from "marko/src/core-tags/components/init-components-tag.js";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import _awaitReorderer from "marko/src/core-tags/core/await/reorderer-renderer.js";
import _preferredScriptLocation from "marko/src/core-tags/components/preferred-script-location-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w("<!DOCTYPE html>");
  out.w("<html>");
  out.w("<head>");
  out.w("<title>");
  out.w("Title of the document");
  out.w("</title>");
  out.w("</head>");
  out.w("<body>");
  out.w("The content of the document......");
  _marko_tag(_initComponents, {}, out, _componentDef, "4");
  _marko_tag(_awaitReorderer, {}, out, _componentDef, "5");
  _marko_tag(_preferredScriptLocation, {}, out, _componentDef, "6");
  out.w("</body>");
  out.w("</html>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);