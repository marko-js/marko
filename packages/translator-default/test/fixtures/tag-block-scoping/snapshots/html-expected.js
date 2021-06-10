import { t as _t } from "marko/src/runtime/html";

const _marko_componentType = "packages/translator-default/test/fixtures/tag-block-scoping/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_attr from "marko/src/runtime/html/helpers/attr";
import _marko_renderer from "marko/src/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  var b = thing;
  let c = thing;
  out.w(`<div${_marko_attr("b", b)}${_marko_attr("c", c)}>`);
  {
    var d = thing;
    let e = thing;
    out.w(`<div${_marko_attr("d", d)}${_marko_attr("e", e)}></div>`);
  }
  out.w("</div>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);