const _marko_template = _t();

export default _marko_template;
import _hello from "./hello.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag";
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/html";
const _marko_componentType = "w-udKFIl",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _marko_tag(_hello, {
    "name": "Frank"
  }, out, _component, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);