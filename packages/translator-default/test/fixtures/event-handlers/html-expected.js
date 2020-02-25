const _marko_template = _t(__filename);

export default _marko_template;
import _marko_props from "marko/src/runtime/html/helpers/data-marko";
import _customTag from "./components/custom-tag.marko";
import _marko_load_tag from "marko/src/runtime/helpers/load-tag";

const _customTag_tag = _marko_load_tag(_customTag);

import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "BaPp2UaD",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w(`<div${_marko_props({
    "onclick": _component.d("click", "handleClick", false, [a, b, ...d])
  })}></div><div${_marko_props({
    "onDashed-cased-Event": _component.d("Dashed-cased-Event", "handle", false)
  })}></div><div${_marko_props({
    "oncamelcasedevent": _component.d("camelcasedevent", "handle", false)
  })} onmouseout="someStringHandler"></div>`);

  _customTag_tag({}, out, _component, "3", [["thing", "handleThing", false, [a, b, ...d]]]);

  _customTag_tag({}, out, _component, "4", [["Dashed-cased-Event", "handle", false]]);

  _customTag_tag({}, out, _component, "5", [["camelcasedEvent", "handle", false]]);
}, {
  ___type: _marko_componentType,
  ___implicit: true
}, _marko_component);