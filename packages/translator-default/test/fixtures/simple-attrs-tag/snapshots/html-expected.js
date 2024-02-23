import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "packages/translator-default/test/fixtures/simple-attrs-tag/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_props from "marko/src/runtime/html/helpers/data-marko.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w("<div style=c:1px class=b id=a></div>");
  out.w("<div style=c:1px id=a></div>");
  out.w("<div style=c:1px></div>");
  out.w(`<div${_marko_props(out, _componentDef, {
    pa: {
      style: 1
    }
  })} style=c:1px></div>`);
  out.w("<div a=1 style=c:1px></div>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);