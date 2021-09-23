import { t as _t } from "marko/src/runtime/html";

const _marko_componentType = "packages/translator-default/test/fixtures/no-update-modifier/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_props from "marko/src/runtime/html/helpers/data-marko";
import _marko_attr from "marko/src/runtime/html/helpers/attr";
import _marko_renderer from "marko/src/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.w(`<input${_marko_props(out, _componentDef, {
    pa: ["value"]
  })}${_marko_attr("value", input.defaultValue)}>`);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);