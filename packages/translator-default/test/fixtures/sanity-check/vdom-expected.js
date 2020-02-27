const _marko_template = _t(__filename);

export default _marko_template;
import a from "b";
doThings();
andStuff();

function more() {
  abc();
}

import _marko_class_merge from "marko/src/runtime/helpers/class-value";
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag";
import _other from "./components/other/index.marko";
import _marko_load_tag from "marko/src/runtime/helpers/load-tag";

const _other_tag = _marko_load_tag(_other);

import _marko_attrs from "marko/src/runtime/vdom/helpers/attrs";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("sWzbPUpL", () => _marko_template),
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
  out.t(x);
  out.t(";\n  }\n", component);
  out.ee();
  out.be("script", null, "2", component, null, 0);
  out.t("\n  var y = ", component);
  out.t(x);
  out.t(";\n", component);
  out.ee();

  function _thing(out, stuff) {
    out.be("div", {
      "x": stuff.x
    }, "4", component, 0, 0);
    out.ee();
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
    out.be("div", {
      "d": d,
      "e": e
    }, "6", component, 0, 0);
    out.ee();
  }
  out.ee();
  out.be("div", null, "7", component, 0, 0, {
    "onclick": _component.d("click", "handleClick", false, [a, b, ...d])
  });
  out.ee();
  out.be("div", {
    "id": _component.elId("1")
  }, "8", component, 0, 1);
  out.ee();
  out.be("div", {
    "class": _marko_class_merge(["a", {
      b: c,
      d
    }]),
    "style": "a:b;"
  }, "9", component, 0, 1);
  out.ee();
  out.e("input", {
    "type": "text"
  }, "10", component, 0, 0);

  _marko_dynamic_tag(out, a, null, out => {
    out.be("div", null, "11", component, 0, 0);
    out.ee();
  }, null, null, _component, "@x");

  _marko_dynamic_tag(out, _thing, () => ({
    "x": 1
  }), null, null, null, _component, "12");

  _other_tag({
    "renderBody": (out, a) => {
      out.be("div", null, "14", component, 0, 0);
      out.ee();
    }
  }, out, _component, "13", [["click", "handleClick", false, [a, b, ...d]]]);

  _other_tag({
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
          out.be("div", null, "20", component, 0, 0);
          out.ee();
        }
      },
      "renderBody": out => {
        out.be("div", null, "18", component, 0, 0);
        out.ee();
      }
    },
    "renderBody": (out, b) => {
      out.be("div", null, "16", component, 0, 0);
      out.ee();
    }
  }, out, _component, "15");

  out.be("div", _marko_attrs({
    "class": "b c",
    "a": "[object Object]",
    "c": "${d}",
    ...e,
    ...f(),
    "id": "a"
  }), "21", component, null, 0);
  out.t(a);
  out.be("div", {
    "c": "1"
  }, "22", component, 0, 0);
  out.ee();
  out.be("div", {
    "d": "1"
  }, "23", component, 0, 0);
  out.ee();

  if (x === a) {
    out.t("a ", component);
    out.t(b);
  } else if (x === 2) {
    out.t("b", component);
  } else {
    out.t("c", component);
  }

  out.ee();
  out.be("div", {
    "b": "1"
  }, "25", component, 0, 0);
  out.ee();
  out.be("div", null, "26", component, null, 0);
  out.t("123 abc 123", component);
  out.ee();
  out.be("span", _marko_attrs(abc), "27", component, 0, 0);
  out.ee();

  if (cond) {
    out.t("Hello ", component);
    out.t(planet);
  }

  for (let _steps = (10 - 0) / 2, _step = 0; _step <= _steps; _step++) {
    const i = 0 + _step * 2;
    const _keyScope = `[${i}]`;
    out.be("div", {
      "c": "1"
    }, "28" + _keyScope, component, 0, 0);
    out.ee();
  }

  for (const key in obj) {
    const val = obj[key];
    const _keyScope2 = `[${key}]`;
    out.be("div", {
      "c": "1"
    }, "29" + _keyScope2, component, 0, 0);
    out.ee();
  }
}, {
  t: _marko_componentType
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);