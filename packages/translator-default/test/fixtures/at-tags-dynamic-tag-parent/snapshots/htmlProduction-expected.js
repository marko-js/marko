import { t as _t } from "marko/dist/runtime/html/index.js";

const _marko_componentType = "V8pzyNwe",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  _marko_dynamic_tag(out, input.x, () => ({
    "header": {
      "class": "my-header",
      "renderBody": out => {
        out.w("Header content");
      }
    },
    "footer": {
      "class": "my-footer",
      "renderBody": out => {
        out.w("Footer content");
      }
    }
  }), out => {
    out.w("Body content");
  }, null, null, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);