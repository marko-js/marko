import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "WBXU4oo",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml.js";
import _test from "./test.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_tag(_test, {
    "class": input.class,
    "renderBody": (out, data) => {
      out.w(`Hello ${_marko_escapeXml(data.name)}`);
    }
  }, out, _componentDef, "0");
  out.w(`<div>Hello ${_marko_escapeXml(input.name)}<span>`);
  () => {
    data;
    const data = "foo";
    console.log(data);
  };
  out.w(`Hello ${_marko_escapeXml(input)}</span>`);
  if (true) {
    const data = "bar";
    out.w(`Hello ${_marko_escapeXml(data)}`);
  }
  out.w("</div>");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);