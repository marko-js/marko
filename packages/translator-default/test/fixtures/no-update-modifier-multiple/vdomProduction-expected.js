const _marko_template = _t(__filename);

export default _marko_template;
import "marko/dist/runtime/vdom/preserve-attrs";
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/dom";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("jWznNrMq", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.be("div", null, "0", component, null, 0);
  out.e("input", {
    "value": input.defaultValue
  }, "1", component, 0, 0, {
    noupdate: ["value"]
  });
  out.e("input", {
    "type": "checkbox",
    "value": input.defaultValue,
    "checked": input.checked
  }, "2", component, 0, 0, {
    noupdate: ["value", "checked"]
  });
  out.ee();
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);