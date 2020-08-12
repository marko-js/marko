const _marko_template = _t(__filename);

export default _marko_template;
import _hello from "./hello.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "packages/translator-default/test/fixtures/custom-tag-template/template.marko",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _marko_tag(_hello, {
    "name": "Frank"
  }, out, _component, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);