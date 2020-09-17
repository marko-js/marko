const _marko_template = _t();

export default _marko_template;
import bar, { f as foo } from "./bar";
import "./foo";
import baz from "./components/baz.marko";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "packages/translator-default/test/fixtures/import-tag/template.marko",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {}, {
  t: _marko_componentType,
  i: true
}, _marko_component);