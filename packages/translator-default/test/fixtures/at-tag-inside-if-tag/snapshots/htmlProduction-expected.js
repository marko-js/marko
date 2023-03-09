import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "cY5vQoUJ",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_repeatable from "marko/dist/runtime/helpers/repeatable.js";
import _marko_self_iterator from "marko/dist/runtime/helpers/self-iterator.js";
import _customTag from "./components/custom-tag/index.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  let _thing = null;
  if (x) {
    _thing = _marko_repeatable(_thing, {
      "x": 1,
      "renderBody": out => {
        out.w("Hello");
      },
      [Symbol.iterator]: _marko_self_iterator
    });
  }
  _marko_tag(_customTag, {
    "thing": _thing
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);