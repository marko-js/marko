import { t as _t } from "marko/src/runtime/html";

const _marko_componentType = "packages/translator-default/test/fixtures/at-tags-dynamic-and-static/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  const _items = [];

  for (const a in b) {
    const _keyScope = `[${a}]`;

    _items.push(null);
  }

  _marko_tag(_hello, {
    "items": _items,
    "other": {}
  }, out, _component, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);