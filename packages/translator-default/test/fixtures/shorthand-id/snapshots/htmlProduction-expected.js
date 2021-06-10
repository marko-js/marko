import { t as _t } from "marko/dist/runtime/html";

const _marko_componentType = "wUxkdMJU",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_attr from "marko/dist/runtime/html/helpers/attr";
import _marko_renderer from "marko/dist/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.w(`<div id=shorthand></div><div${_marko_attr("id", dynamic)}></div><div${_marko_attr("id", "partial-" + dynamic)}></div>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);