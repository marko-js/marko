const _marko_template = _t(__filename);

export default _marko_template;
import _testHello from "./tags/test-hello/renderer.js";
import _marko_load_tag from "marko/src/runtime/helpers/load-tag";

const _testHello_tag = _marko_load_tag(_testHello);

import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("IDRAzWdx", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _testHello_tag({
    "name": "World"
  }, out, _component, "0");
}, {
  ___type: _marko_componentType,
  ___implicit: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);