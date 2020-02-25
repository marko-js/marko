const _marko_template = _t(__filename);

export default _marko_template;
import _customTag from "./components/custom-tag.marko";
import _marko_load_tag from "marko/src/runtime/helpers/load-tag";

const _customTag_tag = _marko_load_tag(_customTag);

import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("bs1OMu7X", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _customTag_tag({
    "renderBody": (out, a, b, {
      c
    }) => {
      out.be("div", null, "1", component, null, 0);
      out.t(a);
      out.t(" ");
      out.t(b);
      out.t(" ");
      out.t(c);
      out.ee();
    }
  }, out, _component, "0");
}, {
  ___type: _marko_componentType
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);