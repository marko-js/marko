import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "jG6oVLg",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  let i = 0;
  let _keyValue = 0;
  while (i < 10) {
    const _keyScope = `[${_keyValue++}]`;
    i++;
    out.w("<div></div>");
  }
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);