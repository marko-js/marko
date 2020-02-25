const _marko_template = _t(__filename);

export default _marko_template;
import _testBodyFunction from "./tags/test-body-function/renderer.js";
import _marko_load_tag from "marko/src/runtime/helpers/load-tag";

const _testBodyFunction_tag = _marko_load_tag(_testBodyFunction);

import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "H-1GL0dm",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _testBodyFunction_tag({
    "name": "World",
    "renderBody": out => {
      out.w("This is the body content");
    }
  }, out, _component, "0");
}, {
  ___type: _marko_componentType,
  ___implicit: true
}, _marko_component);