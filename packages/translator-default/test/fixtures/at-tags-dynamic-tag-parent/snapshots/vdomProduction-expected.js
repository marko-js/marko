import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "V8pzyNwe",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_self_iterator from "marko/dist/runtime/helpers/self-iterator.js";
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_dynamic_tag(out, input.x, () => ({
    "header": {
      "class": "my-header",
      "renderBody": out => {
        out.t("Header content", _component);
      },
      [Symbol.iterator]: _marko_self_iterator
    },
    "footer": {
      "class": "my-footer",
      "renderBody": out => {
        out.t("Footer content", _component);
      },
      [Symbol.iterator]: _marko_self_iterator
    }
  }), out => {
    out.t("Body content", _component);
  }, null, null, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);