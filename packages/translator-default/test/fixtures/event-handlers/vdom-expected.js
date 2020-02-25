const _marko_template = _t(__filename);

export default _marko_template;
import _customTag from "./components/custom-tag.marko";
import _marko_load_tag from "marko/src/runtime/helpers/load-tag";

const _customTag_tag = _marko_load_tag(_customTag);

import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("BaPp2UaD", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.be("div", null, "0", component, 0, 0, {
    "onclick": _component.d("click", "handleClick", false, [a, b, ...d])
  });
  out.ee();
  out.be("div", null, "1", component, 0, 0, {
    "onDashed-cased-Event": _component.d("Dashed-cased-Event", "handle", false)
  });
  out.ee();
  out.be("div", {
    "onmouseout": "someStringHandler"
  }, "2", component, 0, 0, {
    "oncamelcasedevent": _component.d("camelcasedevent", "handle", false)
  });
  out.ee();

  _customTag_tag({}, out, _component, "3", [["thing", "handleThing", false, [a, b, ...d]]]);

  _customTag_tag({}, out, _component, "4", [["Dashed-cased-Event", "handle", false]]);

  _customTag_tag({}, out, _component, "5", [["camelcasedEvent", "handle", false]]);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);