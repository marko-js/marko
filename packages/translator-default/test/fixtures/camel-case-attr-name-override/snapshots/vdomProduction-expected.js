import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "_KZJAbGc",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _customTag from "./components/custom-tag/index.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_tag(_customTag, {
    "dataAttrA": true,
    "data-attr-b": true,
    "dataAttrC": true,
    "data-attr-d": true,
    "dataAttrE": true,
    "preserve-attr-a": true,
    "notPreserveAttrA": true
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);