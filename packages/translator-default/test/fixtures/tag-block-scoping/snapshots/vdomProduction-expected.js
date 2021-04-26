import { t as _t } from "marko/dist/runtime/vdom";

const _marko_componentType = "s8GmyX5C",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry";

_marko_registerComponent(_marko_componentType, () => _marko_template);

const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  var b = thing;
  let c = thing;
  out.be("div", {
    "b": b,
    "c": c
  }, "0", component, null, 0);
  {
    var d = thing;
    let e = thing;
    out.e("div", {
      "d": d,
      "e": e
    }, "1", component, 0, 0);
  }
  out.ee();
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);