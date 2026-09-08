import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "lMaE8hg",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import { Card } from "./named";
import Default, { Card as Mixed } from "./mixed";
import { Card as Alias, Card as lowercase, default as DefaultAlias } from "./mixed";
import * as Namespace from "./namespace";
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag.js";
import _Default from "./mixed";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_dynamic_tag(out, Card, null, null, null, null, _componentDef, "0");
  _marko_dynamic_tag(out, Mixed, null, null, null, null, _componentDef, "1");
  _marko_dynamic_tag(out, Alias, null, null, null, null, _componentDef, "2");
  _marko_dynamic_tag(out, lowercase, null, null, null, null, _componentDef, "3");
  _marko_dynamic_tag(out, Namespace, null, null, null, null, _componentDef, "4");
  _marko_dynamic_tag(out, DefaultAlias, null, null, null, null, _componentDef, "5");
  _marko_tag(_Default, {}, out, _componentDef, "6");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);