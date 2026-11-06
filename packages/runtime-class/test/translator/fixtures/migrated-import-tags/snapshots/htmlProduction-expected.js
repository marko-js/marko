import "marko/dist/runtime/helpers/tags-compat/html.mjs";
import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "zC6tqrA",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import Foo from "./foo.marko";
import { Card } from "./card";
import TagsChild from "./tags-child.marko";
import _Foo from "./foo.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_tag(_Foo, {}, out, _componentDef, "0");
  _marko_dynamic_tag(out, Card, null, null, null, null, _componentDef, "1");
  _marko_dynamic_tag(out, TagsChild, null, null, null, null, _componentDef, "2");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);