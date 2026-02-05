import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "Zyx4Ei4",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import a from "b";
doThings();
andStuff();
function more() {
  abc();
}
import _marko_class_merge from "marko/dist/runtime/helpers/class-value.js";
import _marko_constElement from "marko/dist/runtime/vdom/helpers/const-element.js";
const _marko_node = _marko_constElement("input", {
  "type": "text"
}, 0);
const _marko_node2 = _marko_constElement("div", null, 0);
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag.js";
const _marko_node3 = _marko_constElement("div", null, 0);
import _other from "./components/other/index.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
const _marko_node4 = _marko_constElement("div", null, 0);
import { a as _marko_repeatable_attr_tag, i as _marko_render_input } from "marko/dist/runtime/helpers/attr-tag.js";
const _marko_node5 = _marko_constElement("div", null, 0);
const _marko_node6 = _marko_constElement("div", null, 0);
const _marko_node7 = _marko_constElement("div", {
  "c": "1"
}, 0);
const _marko_node8 = _marko_constElement("div", {
  "d": "1"
}, 0);
import _marko_merge_attrs from "marko/dist/runtime/vdom/helpers/merge-attrs.js";
const _marko_node9 = _marko_constElement("div", {
  "b": "1"
}, 0);
const _marko_node0 = _marko_constElement("div", null, 1).t("123 abc 123");
import _marko_attrs from "marko/dist/runtime/vdom/helpers/attrs.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry.js";
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
  out.n(_marko_node, _component);
  _marko_dynamic_tag(out, a, null, out => {
    out.n(_marko_node2, _component);
  }, null, null, _componentDef, "@x");
  _marko_dynamic_tag(out, _thing, () => ({
    "x": 1
  }), null, null, null, _componentDef, "11");
  _marko_tag(_other, {
    "renderBody": (out, a) => {
      out.n(_marko_node3, _component);
    }
  }, out, _componentDef, "12", [["click", "handleClick", false, [a, b, ...d]]]);
  _marko_tag(_other, _marko_render_input(() => {
    _marko_repeatable_attr_tag("c", _marko_render_input(() => {
      _marko_repeatable_attr_tag("d", {
        "d": 1,
        "renderBody": out => {
          out.n(_marko_node4, _component);
        }
      });
      return (out => {
        out.n(_marko_node5, _component);
      });
    }, {
      "c": 1
    }));
    return (out => {
      out.n(_marko_node6, _component);
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
  out.n(_marko_node7, _component);
  out.n(_marko_node8, _component);
  if (x === a) {
    out.t("a ", _component);
    out.t(b, _component);
  } else if (x === 2) {
    out.t("b", _component);
  } else {
    out.t("c", _component);
  }
  out.ee();
  out.n(_marko_node9, _component);
  out.n(_marko_node0, _component);
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
  t: _marko_componentType
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);