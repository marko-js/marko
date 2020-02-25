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
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("m6h-ggcc", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.be("html", null, "0", component, null, 0);
  out.be("head", null, "1", component, null, 0);
  out.be("title", null, "2", component, null, 0);
  out.t("Title of the document");
  out.ee();
  out.ee();
  out.be("body", null, "3", component, null, 0);

  _componentGlobals_tag({}, out, _component, "4");

  out.t("The content of the document......");

  _initComponents_tag({}, out, _component, "5");

  _awaitReorderer_tag({}, out, _component, "6");

  out.ee();
  out.ee();
}, {
  ___type: _marko_componentType,
  ___implicit: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);