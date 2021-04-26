import { t as _t } from "marko/dist/runtime/html";

const _marko_componentType = "TKoJdMQb",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_class_merge from "marko/dist/runtime/helpers/class-value";
import _marko_attr from "marko/dist/runtime/html/helpers/attr";
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag";
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag";
import _marko_renderer from "marko/dist/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w(`<div${_marko_attr("class", _marko_class_merge(["a", {
    b: c,
    d
  }]))}></div><div class="a b"></div><div class="a b c"></div>`);

  _marko_tag(_customTag, {
    "class": ["a", {
      b: c,
      d
    }]
  }, out, _component, "3");

  _marko_tag(_customTag, {
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
  t: _marko_componentType,
  i: true
}, _marko_component);