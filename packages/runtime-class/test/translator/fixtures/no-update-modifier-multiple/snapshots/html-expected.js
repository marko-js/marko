import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "__tests__/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_props from "marko/src/runtime/html/helpers/data-marko.js";
import _marko_attr from "marko/src/runtime/html/helpers/attr.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w("<div>");
  out.w(`<input${_marko_props(out, _componentDef, {
    pa: {
      value: 1
    }
  })}${_marko_attr("value", input.defaultValue)}>`);
  out.w(`<input${_marko_props(out, _componentDef, {
    pa: {
      value: 1,
      checked: 1
    }
  })} type=checkbox${_marko_attr("value", input.defaultValue)}${_marko_attr("checked", input.checked)}>`);
  out.w("</div>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);