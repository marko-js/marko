import { t as _t } from "marko/dist/runtime/html";

const _marko_componentType = "D4iHvcrp",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml";
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag";
import _marko_renderer from "marko/dist/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  _marko_tag(_customTag, {
    "renderBody": (out, a, b, {
      c
    }) => {
      out.w(`<div>${_marko_escapeXml(a)} ${_marko_escapeXml(b)} ${_marko_escapeXml(c)}</div>`);
    }
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);