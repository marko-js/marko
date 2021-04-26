import { t as _t } from "marko/src/runtime/vdom";

const _marko_componentType = "packages/translator-default/test/fixtures/attr-class/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_class_merge from "marko/src/runtime/helpers/class-value";
import _customTag from "./components/custom-tag.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry";

_marko_registerComponent(_marko_componentType, () => _marko_template);

const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.e("div", {
    "class": _marko_class_merge(["a", {
      b: c,
      d
    }])
  }, "0", component, 0, 1);
  out.e("div", {
    "class": "a b"
  }, "1", component, 0, 1);
  out.e("div", {
    "class": "a b c"
  }, "2", component, 0, 1);

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
        out.t("Hello", component);
      }
    }
  }), null, null, null, _component, "5");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);