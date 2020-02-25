const _marko_template = _t(__filename);

export default _marko_template;
import _componentGlobals from "../../../../marko/src/core-tags/components/component-globals-tag.js";
import _marko_load_tag from "marko/src/runtime/helpers/load-tag";

const _componentGlobals_tag = _marko_load_tag(_componentGlobals);

import _initComponents from "../../../../marko/src/core-tags/components/init-components-tag.js";

const _initComponents_tag = _marko_load_tag(_initComponents);

import _awaitReorderer from "../../../../marko/src/core-tags/core/await/reorderer-renderer.js";

const _awaitReorderer_tag = _marko_load_tag(_awaitReorderer);

import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "m6h-ggcc",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w("<!DOCTYPE html><html><head><title>Title of the document</title></head><body>");

  _componentGlobals_tag({}, out, _component, "4");

  out.w("The content of the document......");

  _initComponents_tag({}, out, _component, "5");

  _awaitReorderer_tag({}, out, _component, "6");

  out.w("</body></html>");
}, {
  ___type: _marko_componentType,
  ___implicit: true
}, _marko_component);