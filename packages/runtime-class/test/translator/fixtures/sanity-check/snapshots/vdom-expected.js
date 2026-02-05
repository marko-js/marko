import { t as _t } from "marko/src/runtime/vdom/index.js";
const _marko_componentType = "__tests__/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import a from "b";
doThings();
andStuff();
function more() {
  abc();
}
import _marko_class_merge from "marko/src/runtime/helpers/class-value.js";
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag.js";
import _other from "./components/other/index.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import { a as _marko_repeatable_attr_tag, i as _marko_render_input } from "marko/src/runtime/helpers/attr-tag.js";
import _marko_merge_attrs from "marko/src/runtime/vdom/helpers/merge-attrs.js";
import _marko_attrs from "marko/src/runtime/vdom/helpers/attrs.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {
  onCreate() {
    this.stuff();
  }
};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.be("style", {
    "id": "css"
  }, "0", _component, null, 1);
  out.t("\n  div {\n    color: ", _component);
  out.t(x, _component);
  out.t(";\n  }\n", _component);
  out.ee();
  out.be("script", null, "1", _component, null, 0);
  out.t("\n  var y = ", _component);
  out.t(x, _component);
  out.t(";\n", _component);
  out.ee();
  function _thing(out, stuff) {
    out.e("div", {
      "x": stuff.x
    }, "3", _component, 0, 0);
  }
  var b = thing;
  let c = thing;
  out.be("div", {
    "b": b,
    "c": c
  }, "4", _component, null, 0);
  (() => {
    var d = thing;
    let e = thing;
    out.e("div", {
      "d": d,
      "e": e
    }, "5", _component, 0, 0);
  })();
  out.ee();
  out.e("div", null, "6", _component, 0, 0, {
    "onclick": _componentDef.d("click", "handleClick", false, [a, b, ...d])
  });
  out.e("div", {
    "id": _componentDef.elId("1")
  }, "7", _component, 0, 1);
  out.e("div", {
    "class": _marko_class_merge(["a", {
      b: c,
      d
    }]),
    "style": "a:b"
  }, "8", _component, 0, 1);
  out.e("input", {
    "type": "text"
  }, "9", _component, 0, 0);
  _marko_dynamic_tag(out, a, null, out => {
    out.e("div", null, "10", _component, 0, 0);
  }, null, null, _componentDef, "@x");
  _marko_dynamic_tag(out, _thing, () => ({
    "x": 1
  }), null, null, null, _componentDef, "11");
  _marko_tag(_other, {
    "renderBody": (out, a) => {
      out.e("div", null, "13", _component, 0, 0);
    }
  }, out, _componentDef, "12", [["click", "handleClick", false, [a, b, ...d]]]);
  _marko_tag(_other, _marko_render_input(() => {
    _marko_repeatable_attr_tag("c", _marko_render_input(() => {
      _marko_repeatable_attr_tag("d", {
        "d": 1,
        "renderBody": out => {
          out.e("div", null, "15", _component, 0, 0);
        }
      });
      return (out => {
        out.e("div", null, "16", _component, 0, 0);
      });
    }, {
      "c": 1
    }));
    return (out => {
      out.e("div", null, "17", _component, 0, 0);
    });
  }, {
    "x": 1,
    ...thing,
    "b": {
      a: 1
    },
    ...c,
    "c": void 0
  }), out, _componentDef, "14");
  out.be("div", _marko_merge_attrs({
    "class": "b c",
    "a": "{\"a\":1}",
    "c": "${d}"
  }, e, f(), {
    "id": "a"
  }), "18", _component, null, 4);
  out.t(a, _component);
  out.comment("abc", _component);
  out.e("div", {
    "c": "1"
  }, "19", _component, 0, 0);
  out.e("div", {
    "d": "1"
  }, "20", _component, 0, 0);
  if (x === a) {
    out.t("a ", _component);
    out.t(b, _component);
  } else if (x === 2) {
    out.t("b", _component);
  } else {
    out.t("c", _component);
  }
  out.ee();
  out.e("div", {
    "b": "1"
  }, "21", _component, 0, 0);
  out.be("div", null, "22", _component, null, 0);
  out.t("123 abc 123", _component);
  out.ee();
  out.e("span", _marko_attrs(abc), "23", _component, 0, 4);
  if (cond) {
    out.t("Hello ", _component);
    out.t(planet, _component);
  }
  for (let _steps = (10 - 0) / 2, _step = 0; _step <= _steps; _step++) {
    const i = 0 + _step * 2;
    const _keyScope = `[${i}]`;
    out.e("div", {
      "c": "1"
    }, "24" + _keyScope, _component, 0, 0);
  }
  for (const key in obj) {
    const val = obj[key];
    const _keyScope2 = `[${key}]`;
    out.e("div", {
      "c": "1"
    }, "25" + _keyScope2, _component, 0, 0);
  }
}, {
  t: _marko_componentType,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);