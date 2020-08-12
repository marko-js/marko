const _marko_template = _t(__filename);

export default _marko_template;
import _marko_props from "marko/src/runtime/html/helpers/data-marko";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "packages/translator-default/test/fixtures/simple-attrs-tag/template.marko",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w("<div style=c:1px; class=b id=a></div>");
  out.w("<div style=c:1px; id=a></div>");
  out.w("<div style=c:1px;></div>");
  out.w(`<div${_marko_props(out, _component, {
    noupdate: ["style"]
  })} style=c:1px;></div>`);
  out.w("<div a=1 style=c:1px;></div>");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);