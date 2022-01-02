import { t as _t } from "marko/src/runtime/vdom/index.js";

const _marko_componentType = "packages/translator-default/test/fixtures/event-handlers/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry";

_marko_registerComponent(_marko_componentType, () => _marko_template);

const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.e("div", null, "0", _component, 0, 0, {
    "onclick": _componentDef.d("click", "handleClick", false, [a, b, ...d])
  });
  out.e("div", null, "1", _component, 0, 0, {
    "onDashed-cased-Event": _componentDef.d("Dashed-cased-Event", "handle", false)
  });
  out.e("div", {
    "onmouseout": "someStringHandler"
  }, "2", _component, 0, 0, {
    "oncamelcasedevent": _componentDef.d("camelcasedevent", "handle", false)
  });

  _marko_tag(_customTag, {}, out, _componentDef, "3", [["thing", "handleThing", false, [a, b, ...d]]]);

  _marko_tag(_customTag, {}, out, _componentDef, "4", [["Dashed-cased-Event", "handle", false]]);

  _marko_tag(_customTag, {}, out, _componentDef, "5", [["camelcasedEvent", "handle", false]]);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);