import { t as _t } from "marko/dist/runtime/html";

const _marko_componentType = "8v5gGoOT",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag";
import _marko_renderer from "marko/dist/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  _marko_tag(_customTag, {
    "someMethod": function () {
      console.log("hello");
    }
  }, out, _componentDef, "0");

  _marko_tag(_customTag, {
    "default": function () {
      console.log("again");
    }
  }, out, _componentDef, "1");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);