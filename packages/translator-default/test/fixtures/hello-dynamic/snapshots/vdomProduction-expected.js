import { t as _t } from "marko/dist/runtime/vdom/index.js";

const _marko_componentType = "kCnjd+Lm",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry";

_marko_registerComponent(_marko_componentType, () => _marko_template);

const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.t("Hello ", _component);
  out.t(input.name, _component);
  out.t("! Hello ", _component);
  out.h(input.name, _component);
  out.t("! Hello ", _component);
  out.h(input.missing, _component);
  out.t("!", _component);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);