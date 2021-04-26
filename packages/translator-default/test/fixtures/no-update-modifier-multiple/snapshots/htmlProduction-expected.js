import { t as _t } from "marko/dist/runtime/html";

const _marko_componentType = "r46whWwu",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_props from "marko/dist/runtime/html/helpers/data-marko";
import _marko_attr from "marko/dist/runtime/html/helpers/attr";
import _marko_renderer from "marko/dist/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w(`<div><input${_marko_props(out, _component, {
    pa: ["value"]
  })}${_marko_attr("value", input.defaultValue)}><input${_marko_props(out, _component, {
    pa: ["value", "checked"]
  })} type=checkbox${_marko_attr("value", input.defaultValue)}${_marko_attr("checked", input.checked)}></div>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);