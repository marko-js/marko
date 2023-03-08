import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "OLo+Dwkn",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml.js";
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  let _item = null;
  if (input.x) {
    _item = {
      "renderBody": (out, y) => {
        out.w(_marko_escapeXml(y));
      }
    };
  }
  _marko_tag(_hello, {
    "item": _item
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);