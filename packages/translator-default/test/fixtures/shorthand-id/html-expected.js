const _marko_template = _t(__filename);

export default _marko_template;
import _marko_attr from "marko/src/runtime/html/helpers/attr";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "nma4wliZ",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w(`<div id=shorthand></div><div${_marko_attr("id", dynamic)}></div><div${_marko_attr("id", "partial-" + dynamic)}></div>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);