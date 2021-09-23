import { t as _t } from "marko/dist/runtime/html";

const _marko_componentType = "cY5vQoUJ",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _customTag from "./components/custom-tag/index.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag";
import _marko_renderer from "marko/dist/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  let _thing = null;

  if (x) {
    _thing = {
      "x": 1,
      "renderBody": out => {
        out.w("Hello");
      }
    };
  }

  _marko_tag(_customTag, {
    "thing": _thing
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);