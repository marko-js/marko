import { t as _t } from "marko/src/runtime/vdom";

const _marko_template = _t();

export default _marko_template;
import "marko/src/runtime/vdom/preserve-attrs";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry";

const _marko_componentType = _marko_registerComponent("packages/translator-default/test/fixtures/simple-attrs-tag/template.marko", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.e("div", {
    "style": "c:1px;",
    "class": "b",
    "id": "a"
  }, "0", component, 0, 1);
  out.e("div", {
    "style": "c:1px;",
    "id": "a"
  }, "1", component, 0, 1);
  out.e("div", {
    "style": "c:1px;"
  }, "2", component, 0, 1);
  out.e("div", {
    "style": "c:1px;"
  }, "3", component, 0, 0, {
    pa: ["style"]
  });
  out.e("div", {
    "a": "1",
    "style": "c:1px;"
  }, "4", component, 0, 0);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);