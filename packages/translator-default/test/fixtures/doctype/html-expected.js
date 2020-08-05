const _marko_template = _t(__filename);

export default _marko_template;
import _initComponents from "../../../../marko/src/core-tags/components/init-components-tag.js";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _awaitReorderer from "../../../../marko/src/core-tags/core/await/reorderer-renderer.js";
import _preferredScriptLocation from "../../../../marko/src/core-tags/components/preferred-script-location-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "m6h-ggcc",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w("<!DOCTYPE html>");
  out.w("<html>");
  out.w("<head>");
  out.w("<title>");
  out.w("Title of the document");
  out.w("</title>");
  out.w("</head>");
  out.w("<body>");
  out.w("The content of the document......");

  _marko_tag(_initComponents, {}, out, _component, "4");

  _marko_tag(_awaitReorderer, {}, out, _component, "5");

  _marko_tag(_preferredScriptLocation, {}, out, _component, "6");

  out.w("</body>");
  out.w("</html>");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);