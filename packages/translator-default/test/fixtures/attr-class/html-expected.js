const _marko_template = _t(__filename);

export default _marko_template;
import _marko_class_merge from "marko/src/runtime/helpers/class-value";
import _marko_attr from "marko/src/runtime/html/helpers/attr";
import _customTag from "./components/custom-tag.marko";
import _marko_load_tag from "marko/src/runtime/helpers/load-tag";

const _customTag_tag = _marko_load_tag(_customTag);

import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "u12dftVQ",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w(`<div${_marko_attr("class", _marko_class_merge(["a", {
    b: c,
    d
  }]))}></div><div class="a b"></div><div class="a b c"></div>`);

  _customTag_tag({
    "class": ["a", {
      b: c,
      d
    }]
  }, out, _component, "3");

  _customTag_tag({
    "class": ["a", false, "b"]
  }, out, _component, "4");

  _marko_dynamic_tag(out, input.test, () => ({
    "class": ["a", {
      b: c,
      d
    }],
    "test": {
      "class": ["a", {
        b: c,
        d
      }],
      "renderBody": out => {
        out.w("Hello");
      }
    }
  }), null, null, null, _component, "5");
}, {
  ___type: _marko_componentType,
  ___implicit: true
}, _marko_component);