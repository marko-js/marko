import { t as _t } from "marko/src/runtime/html";

const _marko_componentType = "packages/translator-default/test/fixtures/event-handlers/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_props from "marko/src/runtime/html/helpers/data-marko";
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.w(`<div${_marko_props(out, _componentDef, {
    "onclick": _componentDef.d("click", "handleClick", false, [a, b, ...d])
  })}></div>`);
  out.w(`<div${_marko_props(out, _componentDef, {
    "onDashed-cased-Event": _componentDef.d("Dashed-cased-Event", "handle", false)
  })}></div>`);
  out.w(`<div${_marko_props(out, _componentDef, {
    "oncamelcasedevent": _componentDef.d("camelcasedevent", "handle", false)
  })} onmouseout=someStringHandler></div>`);

  _marko_tag(_customTag, {}, out, _componentDef, "3", [["thing", "handleThing", false, [a, b, ...d]]]);

  _marko_tag(_customTag, {}, out, _componentDef, "4", [["Dashed-cased-Event", "handle", false]]);

  _marko_tag(_customTag, {}, out, _componentDef, "5", [["camelcasedEvent", "handle", false]]);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);