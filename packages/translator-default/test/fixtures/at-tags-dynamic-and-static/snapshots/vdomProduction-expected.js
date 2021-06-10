import { t as _t } from "marko/dist/runtime/vdom";

const _marko_componentType = "EC7Wpjet",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag";
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry";

_marko_registerComponent(_marko_componentType, () => _marko_template);

const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  const _items = [];

  for (const a in b) {
    const _keyScope = `[${a}]`;

    _items.push(null);
  }

  _marko_tag(_hello, {
    "items": _items,
    "other": {}
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);