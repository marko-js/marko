import { t as _t } from "marko/dist/runtime/html";

const _marko_componentType = "7zxvsBE8",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_props from "marko/dist/runtime/html/helpers/data-marko";
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag";
import _marko_renderer from "marko/dist/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.w(`<div${_marko_props(out, _componentDef, {
    "onclick": _componentDef.d("click", "handleClick", false, [a, b, ...d])
  })}></div><div${_marko_props(out, _componentDef, {
    "onDashed-cased-Event": _componentDef.d("Dashed-cased-Event", "handle", false)
  })}></div><div${_marko_props(out, _componentDef, {
    "oncamelcasedevent": _componentDef.d("camelcasedevent", "handle", false)
  })} onmouseout=someStringHandler></div>`);

  _marko_tag(_customTag, {}, out, _componentDef, "3", [["thing", "handleThing", false, [a, b, ...d]]]);

  _marko_tag(_customTag, {}, out, _componentDef, "4", [["Dashed-cased-Event", "handle", false]]);

  _marko_tag(_customTag, {}, out, _componentDef, "5", [["camelcasedEvent", "handle", false]]);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);