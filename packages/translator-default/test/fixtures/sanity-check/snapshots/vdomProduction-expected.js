const _marko_template = _t();

export default _marko_template;
import a from "b";
doThings();
andStuff();

function more() {
  abc();
}

import _marko_class_merge from "marko/dist/runtime/helpers/class-value";
import _marko_createElement from "marko/dist/runtime/vdom/helpers/v-element";

const _marko_node = _marko_createElement("input", {
  "type": "text"
}, "10", null, 0, 0);

const _marko_node2 = _marko_createElement("div", null, "11", null, 0, 0);

import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag";

const _marko_node3 = _marko_createElement("div", null, "14", null, 0, 0);

import _other from "./components/other/index.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag";

const _marko_node4 = _marko_createElement("div", null, "16", null, 0, 0);

const _marko_node5 = _marko_createElement("div", null, "18", null, 0, 0);

const _marko_node6 = _marko_createElement("div", null, "20", null, 0, 0);

const _marko_node7 = _marko_createElement("div", {
  "c": "1"
}, "22", null, 0, 0);

const _marko_node8 = _marko_createElement("div", {
  "d": "1"
}, "23", null, 0, 0);

import _marko_attrs from "marko/dist/runtime/vdom/helpers/attrs";

const _marko_node9 = _marko_createElement("div", {
  "b": "1"
}, "25", null, 0, 0);

const _marko_node10 = _marko_createElement("div", null, "26", null, 1, 0).t("123 abc 123");

import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/dom";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("OLFRWJ/R", () => _marko_template),
      _marko_component = {
  onCreate() {
    this.stuff();
  }

};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.be("style", {
    "id": "css"
  }, "1", component, null, 1);
  out.t("\n  div {\n    color: ", component);
  out.t(x, component);
  out.t(";\n  }\n", component);
  out.ee();
  out.be("script", null, "2", component, null, 0);
  out.t("\n  var y = ", component);
  out.t(x, component);
  out.t(";\n", component);
  out.ee();

  function _thing(out, stuff) {
    out.e("div", {
      "x": stuff.x
    }, "4", component, 0, 0);
  }

  var b = thing;
  let c = thing;
  out.be("div", {
    "b": b,
    "c": c
  }, "5", component, null, 0);
  {
    var d = thing;
    let e = thing;
    out.e("div", {
      "d": d,
      "e": e
    }, "6", component, 0, 0);
  }
  out.ee();
  out.e("div", null, "7", component, 0, 0, {
    "onclick": _component.d("click", "handleClick", false, [a, b, ...d])
  });
  out.e("div", {
    "id": _component.elId("1")
  }, "8", component, 0, 1);
  out.e("div", {
    "class": _marko_class_merge(["a", {
      b: c,
      d
    }]),
    "style": "a:b;"
  }, "9", component, 0, 1);
  out.n(_marko_node, component);

  _marko_dynamic_tag(out, a, null, out => {
    out.n(_marko_node2, component);
  }, null, null, _component, "@x");

  _marko_dynamic_tag(out, _thing, () => ({
    "x": 1
  }), null, null, null, _component, "12");

  _marko_tag(_other, {
    "renderBody": (out, a) => {
      out.n(_marko_node3, component);
    }
  }, out, _component, "13", [["click", "handleClick", false, [a, b, ...d]]]);

  _marko_tag(_other, {
    "x": 1,
    ...thing,
    "b": {
      a: 1
    },
    ...c,
    "c": {
      "c": 1,
      "d": {
        "d": 1,
        "renderBody": out => {
          out.n(_marko_node6, component);
        }
      },
      "renderBody": out => {
        out.n(_marko_node5, component);
      }
    },
    "renderBody": (out, b) => {
      out.n(_marko_node4, component);
    }
  }, out, _component, "15");

  out.be("div", _marko_attrs({
    "class": "b c",
    "a": "[object Object]",
    "c": "${d}",
    ...e,
    ...f(),
    "id": "a"
  }), "21", component, null, 4);
  out.t(a, component);
  out.e("div", {
    "c": "1"
  }, "22", component, 0, 0);
  out.e("div", {
    "d": "1"
  }, "23", component, 0, 0);

  if (x === a) {
    out.t("a ", component);
    out.t(b, component);
  } else if (x === 2) {
    out.t("b", component);
  } else {
    out.t("c", component);
  }

  out.ee();
  out.n(_marko_node9, component);
  out.n(_marko_node10, component);
  out.e("span", _marko_attrs(abc), "27", component, 0, 4);

  if (cond) {
    out.t("Hello ", component);
    out.t(planet, component);
  }

  for (let _steps = (10 - 0) / 2, _step = 0; _step <= _steps; _step++) {
    const i = 0 + _step * 2;
    const _keyScope = `[${i}]`;
    out.e("div", {
      "c": "1"
    }, "28" + _keyScope, component, 0, 0);
  }

  for (const key in obj) {
    const val = obj[key];
    const _keyScope2 = `[${key}]`;
    out.e("div", {
      "c": "1"
    }, "29" + _keyScope2, component, 0, 0);
  }
}, {
  t: _marko_componentType
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);