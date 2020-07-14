const _marko_template = _t(__filename);

export default _marko_template;
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "nBMtH030",
      _marko_component = {};
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
  i: true
}, _marko_component);