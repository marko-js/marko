const _marko_template = _t(__filename);

export default _marko_template;
import _testBodyFunction from "./tags/test-body-function/renderer.js";
import _marko_load_tag from "marko/src/runtime/helpers/load-tag";

const _testBodyFunction_tag = _marko_load_tag(_testBodyFunction);

import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("H-1GL0dm", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _testBodyFunction_tag({
    "name": "World",
    "renderBody": out => {
      out.t("This is the body content");
    }
  }, out, _component, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);