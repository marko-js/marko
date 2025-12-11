import "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "__tests__/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _helloTags from "./tags/hello-tags.marko";
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag.js";
import _helloComponents from "./components/hello-components.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_dynamic_tag(out, _helloTags, null, null, null, null, _componentDef, "0");
  _marko_tag(_helloComponents, {}, out, _componentDef, "1");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);