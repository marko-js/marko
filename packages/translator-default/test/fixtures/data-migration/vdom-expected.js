const _marko_template = _t(__filename);

export default _marko_template;
import _test from "./test.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("packages/translator-default/test/fixtures/data-migration/template.marko", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _marko_tag(_test, {
    "class": input.class,
    "renderBody": (out, data) => {
      out.t("Hello ", component);
      out.t(data.name);
    }
  }, out, _component, "0");

  out.be("div", null, "1", component, null, 0);
  out.t("Hello ", component);
  out.t(input.name);
  out.be("span", null, "2", component, null, 0);

  () => {
    data;
    const data = "foo";
    console.log(data);
  };

  out.t("Hello ", component);
  out.t(input);
  out.ee();

  if (true) {
    const data = "bar";
    out.t("Hello ", component);
    out.t(data);
  }

  out.ee();
}, {
  t: _marko_componentType
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);