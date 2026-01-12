import { t as _t } from "marko/src/runtime/vdom/index.js";
const _marko_componentType = "__tests__/components/my-button/index.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag.js";
import _marko_attrs from "marko/src/runtime/vdom/helpers/attrs.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry.js";
import _marko_split_component from "./component-browser.marko";
_marko_registerComponent(_marko_componentType, () => _marko_split_component);
const _marko_component = {};
_marko_split_component.renderer = _marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.be("button", _marko_attrs(input), "0", _component, null, 4, {
    "onclick": _componentDef.d("click", "handleClick", false)
  });
  _marko_dynamic_tag(out, input.renderBody, null, null, null, null, _componentDef, "1");
  out.ee();
}, {
  t: _marko_componentType,
  s: true,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);