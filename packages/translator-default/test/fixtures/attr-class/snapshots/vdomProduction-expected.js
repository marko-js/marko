import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "TKoJdMQb",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_class_merge from "marko/dist/runtime/helpers/class-value.js";
import _marko_createElement from "marko/dist/runtime/vdom/helpers/v-element.js";
const _marko_node = _marko_createElement("div", {
  "class": "a b"
}, "1", null, 0, 1);
const _marko_node2 = _marko_createElement("div", {
  "class": "a b c"
}, "2", null, 0, 1);
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_self_iterator from "marko/dist/runtime/helpers/self-iterator.js";
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.e("div", {
    "class": _marko_class_merge(["a", {
      b: c,
      d
    }])
  }, "0", _component, 0, 1);
  out.n(_marko_node, _component);
  out.n(_marko_node2, _component);
  _marko_tag(_customTag, {
    "class": ["a", {
      b: c,
      d
    }]
  }, out, _componentDef, "3");
  _marko_tag(_customTag, {
    "class": ["a", false, "b"]
  }, out, _componentDef, "4");
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
        out.t("Hello", _component);
      },
      [Symbol.iterator]: _marko_self_iterator
    }
  }), null, null, null, _componentDef, "5");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);