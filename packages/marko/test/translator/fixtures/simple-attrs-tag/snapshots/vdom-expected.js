import { t as _t } from "marko/src/runtime/vdom/index.js";
const _marko_componentType = "__tests__/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_renderer from "marko/src/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.e("div", {
    "style": "c:1px",
    "class": "b",
    "id": "a"
  }, "0", _component, 0, 1);
  out.e("div", {
    "style": "c:1px",
    "id": "a"
  }, "1", _component, 0, 1);
  out.e("div", {
    "style": "c:1px"
  }, "2", _component, 0, 1);
  out.e("div", {
    "style": "c:1px"
  }, "3", _component, 0, 0, {
    pa: {
      style: 1
    }
  });
  out.e("div", {
    "a": "1",
    "style": "c:1px"
  }, "4", _component, 0, 0);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);