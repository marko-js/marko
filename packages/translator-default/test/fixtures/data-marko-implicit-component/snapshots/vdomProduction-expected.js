import { t as _t } from "marko/dist/runtime/vdom";

const _marko_componentType = "qc7Y7xBI",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import "marko/dist/runtime/vdom/preserve-attrs";
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry";

_marko_registerComponent(_marko_componentType, () => _marko_template);

const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.be("div", {
    "class": "test"
  }, "0", _component, null, 0, {
    pa: ["class"]
  });
  out.t("Hello ", _component);
  out.t(input.name, _component);
  out.ee();
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);