import { t as _t } from "marko/src/runtime/html/index.js";

const _marko_componentType = "packages/translator-default/test/fixtures/static-tag/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
var foo = 123;

function bar() {}

var baz = 456;
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);