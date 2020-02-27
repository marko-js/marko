const _marko_template = _t(__filename);

export default _marko_template;
import _marko_style_merge from "marko/src/runtime/helpers/style-value";
import _customTag from "./components/custom-tag.marko";
import _marko_load_tag from "marko/src/runtime/helpers/load-tag";

const _customTag_tag = _marko_load_tag(_customTag);

import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("iougQjrT", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.be("div", {
    "style": _marko_style_merge({
      color: input.color
    })
  }, "0", component, 0, 1);
  out.ee();
  out.be("div", {
    "style": "width:100px;"
  }, "1", component, 0, 1);
  out.ee();
  out.be("div", {
    "style": "color: green"
  }, "2", component, 0, 1);
  out.ee();

  _customTag_tag({
    "style": {
      color: input.color
    }
  }, out, _component, "3");

  _customTag_tag({
    "style": {
      width: 100
    }
  }, out, _component, "4");

  _customTag_tag({
    "style": "color: green"
  }, out, _component, "5");

  _marko_dynamic_tag(out, input.test, () => ({
    "style": {
      color: "green"
    },
    "test": {
      "style": {
        color: "green"
      },
      "renderBody": out => {
        out.t("Hello", component);
      }
    }
  }), null, null, null, _component, "6");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);