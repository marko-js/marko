const _marko_template = _t();

export default _marko_template;
import _marko_props from "marko/src/runtime/html/helpers/data-marko";
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "packages/translator-default/test/fixtures/event-handlers/template.marko",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w(`<div${_marko_props(out, _component, {
    "onclick": _component.d("click", "handleClick", false, [a, b, ...d])
  })}></div>`);
  out.w(`<div${_marko_props(out, _component, {
    "onDashed-cased-Event": _component.d("Dashed-cased-Event", "handle", false)
  })}></div>`);
  out.w(`<div${_marko_props(out, _component, {
    "oncamelcasedevent": _component.d("camelcasedevent", "handle", false)
  })} onmouseout=someStringHandler></div>`);

  _marko_tag(_customTag, {}, out, _component, "3", [["thing", "handleThing", false, [a, b, ...d]]]);

  _marko_tag(_customTag, {}, out, _component, "4", [["Dashed-cased-Event", "handle", false]]);

  _marko_tag(_customTag, {}, out, _component, "5", [["camelcasedEvent", "handle", false]]);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);