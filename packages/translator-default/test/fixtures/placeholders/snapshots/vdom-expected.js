import { t as _t } from "marko/src/runtime/vdom";

const _marko_componentType = "packages/translator-default/test/fixtures/placeholders/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_renderer from "marko/src/runtime/components/renderer";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry";

_marko_registerComponent(_marko_componentType, () => _marko_template);

const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.be("div", null, "0", component, null, 0);
  out.t(input.x, component);
  out.t("Hello world <a/>", component);
  out.h(input.x, component);
  out.h("Hello world <a/>", component);
  out.be("script", null, "1", component, null, 0);
  out.t("\n    ", component);
  out.t("Hello <b> </script>", component);
  out.t("\n  ", component);
  out.ee();
  out.be("style", null, "2", component, null, 0);
  out.t("\n    ", component);
  out.t("Hello <b> </style>", component);
  out.t("\n  ", component);
  out.ee();
  out.ee();
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);