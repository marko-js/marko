const _marko_template = _t();

export default _marko_template;
var foo = 123;

function bar() {}

var baz = 456;
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "packages/translator-default/test/fixtures/static-tag/template.marko",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {}, {
  t: _marko_componentType,
  i: true
}, _marko_component);