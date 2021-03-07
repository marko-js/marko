import { t as _t } from "marko/dist/runtime/vdom";

const _marko_template = _t();

export default _marko_template;
import _test from "./test.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag";
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry";

const _marko_componentType = _marko_registerComponent("Pet223we", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _marko_tag(_test, {
    "class": input.class,
    "renderBody": (out, data) => {
      out.t("Hello ", component);
      out.t(data.name, component);
    }
  }, out, _component, "0");

  out.be("div", null, "1", component, null, 0);
  out.t("Hello ", component);
  out.t(input.name, component);
  out.be("span", null, "2", component, null, 0);

  () => {
    data;
    const data = "foo";
    console.log(data);
  };

  out.t("Hello ", component);
  out.t(input, component);
  out.ee();

  if (true) {
    const data = "bar";
    out.t("Hello ", component);
    out.t(data, component);
  }

  out.ee();
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);