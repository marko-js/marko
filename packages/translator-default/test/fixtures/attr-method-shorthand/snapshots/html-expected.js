import { t as _t } from "marko/src/runtime/html/index.js";

const _marko_componentType = "packages/translator-default/test/fixtures/attr-method-shorthand/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
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
  i: true,
  d: true
}, _marko_component);