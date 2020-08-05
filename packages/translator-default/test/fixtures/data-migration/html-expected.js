const _marko_template = _t(__filename);

export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml";
import _test from "./test.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "Et4Xovh7",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _marko_tag(_test, {
    "class": input.class,
    "renderBody": (out, data) => {
      out.w("Hello ");
      out.w(_marko_escapeXml(data.name));
    }
  }, out, _component, "0");

  out.w("<div>");
  out.w("Hello ");
  out.w(_marko_escapeXml(input.name));
  out.w("<span>");

  () => {
    data;
    const data = "foo";
    console.log(data);
  };

  out.w("Hello ");
  out.w(_marko_escapeXml(input));
  out.w("</span>");

  if (true) {
    const data = "bar";
    out.w("Hello ");
    out.w("bar");
  }

  out.w("</div>");
}, {
  t: _marko_componentType
}, _marko_component);