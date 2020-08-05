const _marko_template = _t(__filename);

export default _marko_template;
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/dom";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("wL7Y18qS", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  let i = 0;
  let _keyValue = 0;

  while (i < 10) {
    const _keyScope = `[${_keyValue++}]`;
    i++;
    out.e("div", null, "0" + _keyScope, component, 0, 0);
  }
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);