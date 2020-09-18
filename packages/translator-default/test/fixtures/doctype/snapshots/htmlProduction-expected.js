const _marko_template = _t();

export default _marko_template;
import _initComponents from "../../../../marko/src/core-tags/components/init-components-tag.js";
import _marko_tag from "marko/dist/runtime/helpers/render-tag";
import _awaitReorderer from "../../../../marko/src/core-tags/core/await/reorderer-renderer.js";
import _preferredScriptLocation from "../../../../marko/src/core-tags/components/preferred-script-location-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/html";
const _marko_componentType = "VJrYycFN",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w("<!DOCTYPE html><html><head><title>Title of the document</title></head><body>The content of the document......");

  _marko_tag(_initComponents, {}, out, _component, "4");

  _marko_tag(_awaitReorderer, {}, out, _component, "5");

  _marko_tag(_preferredScriptLocation, {}, out, _component, "6");

  out.w("</body></html>");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);