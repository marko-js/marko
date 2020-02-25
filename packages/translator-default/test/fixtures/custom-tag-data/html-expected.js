const _marko_template = _t(__filename);

export default _marko_template;
import _customTagData from "./custom-tag-data-tag.js";
import _marko_load_tag from "marko/src/runtime/helpers/load-tag";

const _customTagData_tag = _marko_load_tag(_customTagData);

import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "nw4fWKPp",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _customTagData_tag({
    "name": "Frank".toUpperCase(),
    "age": 32
  }, out, _component, "0");
}, {
  ___type: _marko_componentType,
  ___implicit: true
}, _marko_component);