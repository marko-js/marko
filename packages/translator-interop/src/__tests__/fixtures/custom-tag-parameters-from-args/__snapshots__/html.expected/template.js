import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "packages/translator-interop/src/__tests__/fixtures/custom-tag-parameters-from-args/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml.js";
import _marko_tags_compat from "marko/src/runtime/helpers/tags-compat-html.js";
import _customTag from "./components/custom-tag.marko";
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_dynamic_tag(out, _customTag, null, (out, count, count2) => {
    out.w("<div>");
    out.w("Counts: ");
    out.w(_marko_escapeXml(count));
    out.w(",");
    out.w(_marko_escapeXml(count2));
    out.w("</div>");
  }, null, null, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);