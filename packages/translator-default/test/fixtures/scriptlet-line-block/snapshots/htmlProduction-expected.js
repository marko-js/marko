import { t as _t } from "marko/dist/runtime/html/index.js";

const _marko_componentType = "g3aimRge",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  var foo = 123;

  function bar() {}

  var baz = 456;
  out.w("<div>");
  console.log('foo');
  out.w(`Hello there ${_marko_escapeXml(name)}</div>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);