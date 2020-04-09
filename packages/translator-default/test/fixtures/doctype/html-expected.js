const _marko_template = _t(__filename);

export default _marko_template;
import _initComponents from "../../../../marko/src/core-tags/components/init-components-tag.js";
import _marko_load_tag from "marko/src/runtime/helpers/load-tag";

const _initComponents_tag = _marko_load_tag(_initComponents);

import _awaitReorderer from "../../../../marko/src/core-tags/core/await/reorderer-renderer.js";

const _awaitReorderer_tag = _marko_load_tag(_awaitReorderer);

import _preferredScriptLocation from "../../../../marko/src/core-tags/components/preferred-script-location-tag.js";

const _preferredScriptLocation_tag = _marko_load_tag(_preferredScriptLocation);

import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "m6h-ggcc",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w("<!DOCTYPE html><html><head><title>Title of the document</title></head><body>The content of the document......");

  _initComponents_tag({}, out, _component, "4");

  _awaitReorderer_tag({}, out, _component, "5");

  _preferredScriptLocation_tag({}, out, _component, "6");

  out.w("</body></html>");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);