import { t as _t } from "marko/dist/runtime/html";

const _marko_componentType = "R2kcOR51",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_renderer from "marko/dist/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
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