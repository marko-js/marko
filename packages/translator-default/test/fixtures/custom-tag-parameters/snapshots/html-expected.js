const _marko_template = _t();

export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml";
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "packages/translator-default/test/fixtures/custom-tag-parameters/template.marko",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _marko_tag(_customTag, {
    "renderBody": (out, a, b, {
      c
    }) => {
      out.w("<div>");
      out.w(_marko_escapeXml(a));
      out.w(" ");
      out.w(_marko_escapeXml(b));
      out.w(" ");
      out.w(_marko_escapeXml(c));
      out.w("</div>");
    }
  }, out, _component, "0");
}, {
  t: _marko_componentType
}, _marko_component);