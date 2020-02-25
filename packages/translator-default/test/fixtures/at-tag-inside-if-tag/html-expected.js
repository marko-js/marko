const _marko_template = _t(__filename);

export default _marko_template;
import _customTag from "./components/custom-tag/index.marko";
import _marko_load_tag from "marko/src/runtime/helpers/load-tag";

const _customTag_tag = _marko_load_tag(_customTag);

import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "bDkB18_l",
      _marko_component = {};
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

  _customTag_tag({
    "thing": _thing
  }, out, _component, "0");
}, {
  ___type: _marko_componentType,
  ___implicit: true
}, _marko_component);