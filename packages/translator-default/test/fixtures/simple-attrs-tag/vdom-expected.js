const _marko_template = _t(__filename);

export default _marko_template;
import "marko/src/runtime/vdom/preserve-attrs";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("YBWmqrQ3", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.be("div", {
    "style": "c:1px;",
    "class": "b",
    "id": "a"
  }, "0", component, 0, 1);
  out.ee();
  out.be("div", {
    "style": "c:1px;",
    "id": "a"
  }, "1", component, 0, 1);
  out.ee();
  out.be("div", {
    "style": "c:1px;"
  }, "2", component, 0, 1);
  out.ee();
  out.be("div", {
    "style": "c:1px;"
  }, "3", component, 0, 0, {
    noupdate: ["style"]
  });
  out.ee();
  out.be("div", {
    "a": "1",
    "style": "c:1px;"
  }, "4", component, 0, 0);
  out.ee();
}, {
  ___type: _marko_componentType,
  ___implicit: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);