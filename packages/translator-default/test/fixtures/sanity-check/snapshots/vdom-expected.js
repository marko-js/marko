const _marko_template = _t();

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
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _marko_attrs from "marko/src/runtime/vdom/helpers/attrs";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/vdom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("packages/translator-default/test/fixtures/sanity-check/template.marko", () => _marko_template),
      _marko_component = {
  onCreate() {
    this.stuff();
  }

};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.be("style", {
    "id": "css"
  }, "0", component, null, 1);
  out.t("\n  div {\n    color: ", component);
  out.t(x, component);
  out.t(";\n  }\n", component);
  out.ee();
  out.be("script", null, "1", component, null, 0);
  out.t("\n  var y = ", component);
  out.t(x, component);
  out.t(";\n", component);
  out.ee();

  function _thing(out, stuff) {
    out.e("div", {
      "x": stuff.x
    }, "3", component, 0, 0);
  }

  var b = thing;
  let c = thing;
  out.be("div", {
    "b": b,
    "c": c
  }, "4", component, null, 0);
  {
    var d = thing;
    let e = thing;
    out.e("div", {
      "d": d,
      "e": e
    }, "5", component, 0, 0);
  }
  out.ee();
  out.e("div", null, "6", component, 0, 0, {
    "onclick": _component.d("click", "handleClick", false, [a, b, ...d])
  });
  out.e("div", {
    "id": _component.elId("1")
  }, "7", component, 0, 1);
  out.e("div", {
    "class": _marko_class_merge(["a", {
      b: c,
      d
    }]),
    "style": "a:b;"
  }, "8", component, 0, 1);
  out.e("input", {
    "type": "text"
  }, "9", component, 0, 0);

  _marko_dynamic_tag(out, a, null, out => {
    out.e("div", null, "10", component, 0, 0);
  }, null, null, _component, "@x");

  _marko_dynamic_tag(out, _thing, () => ({
    "x": 1
  }), null, null, null, _component, "11");

  _marko_tag(_other, {
    "renderBody": (out, a) => {
      out.e("div", null, "13", component, 0, 0);
    }
  }, out, _component, "12", [["click", "handleClick", false, [a, b, ...d]]]);

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
          out.e("div", null, "19", component, 0, 0);
        }
      },
      "renderBody": out => {
        out.e("div", null, "17", component, 0, 0);
      }
    },
    "renderBody": (out, b) => {
      out.e("div", null, "15", component, 0, 0);
    }
  }, out, _component, "14");

  out.be("div", _marko_attrs({
    "class": "b c",
    "a": "[object Object]",
    "c": "${d}",
    ...e,
    ...f(),
    "id": "a"
  }), "20", component, null, 4);
  out.t(a, component);
  out.e("div", {
    "c": "1"
  }, "21", component, 0, 0);
  out.e("div", {
    "d": "1"
  }, "22", component, 0, 0);

  if (x === a) {
    out.t("a ", component);
    out.t(b, component);
  } else if (x === 2) {
    out.t("b", component);
  } else {
    out.t("c", component);
  }

  out.ee();
  out.e("div", {
    "b": "1"
  }, "24", component, 0, 0);
  out.be("div", null, "25", component, null, 0);
  out.t("123 abc 123", component);
  out.ee();
  out.e("span", _marko_attrs(abc), "26", component, 0, 4);

  if (cond) {
    out.t("Hello ", component);
    out.t(planet, component);
  }

  for (let _steps = (10 - 0) / 2, _step = 0; _step <= _steps; _step++) {
    const i = 0 + _step * 2;
    const _keyScope = `[${i}]`;
    out.e("div", {
      "c": "1"
    }, "27" + _keyScope, component, 0, 0);
  }

  for (const key in obj) {
    const val = obj[key];
    const _keyScope2 = `[${key}]`;
    out.e("div", {
      "c": "1"
    }, "28" + _keyScope2, component, 0, 0);
  }
}, {
  t: _marko_componentType,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);