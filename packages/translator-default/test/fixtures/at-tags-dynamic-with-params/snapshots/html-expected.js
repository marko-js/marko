import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "packages/translator-default/test/fixtures/at-tags-dynamic-with-params/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml.js";
import _marko_repeatable from "marko/src/runtime/helpers/repeatable.js";
import _marko_self_iterator from "marko/src/runtime/helpers/self-iterator.js";
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  let _item = null;
  if (input.x) {
    _item = _marko_repeatable(_item, {
      "renderBody": (out, y) => {
        out.w(_marko_escapeXml(y));
      },
      [Symbol.iterator]: _marko_self_iterator
    });
  }
  _marko_tag(_hello, {
    "item": _item
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);