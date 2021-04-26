import { t as _t } from "marko/src/runtime/html";

const _marko_componentType = "packages/translator-default/test/fixtures/at-tag-inside-if-tag/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _customTag from "./components/custom-tag/index.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
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
  }, out, _component, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);