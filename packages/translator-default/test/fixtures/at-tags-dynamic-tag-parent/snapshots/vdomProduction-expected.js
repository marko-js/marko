import { t as _t } from "marko/dist/runtime/vdom";

const _marko_componentType = "V8pzyNwe",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag";
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry";

_marko_registerComponent(_marko_componentType, () => _marko_template);

const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  _marko_dynamic_tag(out, input.x, () => ({
    "header": {
      "class": "my-header",
      "renderBody": out => {
        out.t("Header content", _component);
      }
    },
    "footer": {
      "class": "my-footer",
      "renderBody": out => {
        out.t("Footer content", _component);
      }
    }
  }), out => {
    out.t("Body content", _component);
  }, null, null, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);