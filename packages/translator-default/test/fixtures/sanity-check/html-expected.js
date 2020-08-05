const _marko_template = _t(__filename);

export default _marko_template;
import a from "b";
doThings();
andStuff();

function more() {
  abc();
}

import _marko_escapeStyle from "marko/src/runtime/html/helpers/escape-style-placeholder";
import _marko_escapeScript from "marko/src/runtime/html/helpers/escape-script-placeholder";
import _marko_attr from "marko/src/runtime/html/helpers/attr";
import _marko_class_merge from "marko/src/runtime/helpers/class-value";
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag";
import _other from "./components/other/index.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml";
import _marko_attrs from "marko/src/runtime/html/helpers/attrs";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "sWzbPUpL",
      _marko_component = {
  onCreate() {
    this.stuff();
  }

};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w("<style id=css>");
  out.w("\n  div {\n    color: ");
  out.w(_marko_escapeStyle(x));
  out.w(";\n  }\n");
  out.w("</style>");
  out.w("<script>");
  out.w("\n  var y = ");
  out.w(_marko_escapeScript(x));
  out.w(";\n");
  out.w("</script>");

  function _thing(out, stuff) {
    out.w(`<div${_marko_attr("x", stuff.x)}></div>`);
  }

  var b = thing;
  let c = thing;
  out.w(`<div${_marko_attr("b", b)}${_marko_attr("c", c)}>`);
  {
    var d = thing;
    let e = thing;
    out.w(`<div${_marko_attr("d", d)}${_marko_attr("e", e)}></div>`);
  }
  out.w("</div>");
  out.w("<div></div>");
  out.w(`<div${_marko_attr("id", _component.elId("1"))}></div>`);
  out.w(`<div${_marko_attr("class", _marko_class_merge(["a", {
    b: c,
    d
  }]))} style=a:b;></div>`);
  out.w("<input type=text>");

  _marko_dynamic_tag(out, a, null, out => {
    out.w("<div></div>");
  }, null, null, _component, "@x");

  _marko_dynamic_tag(out, _thing, () => ({
    "x": 1
  }), null, null, null, _component, "12");

  _marko_tag(_other, {
    "renderBody": (out, a) => {
      out.w("<div></div>");
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
          out.w("<div></div>");
        }
      },
      "renderBody": out => {
        out.w("<div></div>");
      }
    },
    "renderBody": (out, b) => {
      out.w("<div></div>");
    }
  }, out, _component, "15");

  out.w(`<div${_marko_attrs({
    "class": "b c",
    "a": {
      a: 1
    },
    "c": "${d}",
    ...e,
    ...f(),
    "id": "a"
  })}>`);
  out.w(_marko_escapeXml(a));
  out.w("<!--");
  out.w("abc");
  out.w("-->");
  out.w("<div c=1></div>");
  out.w("<div d=1></div>");

  if (x === a) {
    out.w("a ");
    out.w(_marko_escapeXml(b));
  } else if (x === 2) {
    out.w("b");
  } else {
    out.w("c");
  }

  out.w("</div>");
  out.w("<div b=1></div>");
  out.w("<div>");
  out.w("123 abc 123");
  out.w("</div>");
  out.w(`<span${_marko_attrs(abc)}></span>`);

  if (cond) {
    out.w("Hello ");
    out.w(_marko_escapeXml(planet));
  }

  for (let _steps = (10 - 0) / 2, _step = 0; _step <= _steps; _step++) {
    const i = 0 + _step * 2;
    const _keyScope = `[${i}]`;
    out.w("<div c=1></div>");
  }

  for (const key in obj) {
    const val = obj[key];
    const _keyScope2 = `[${key}]`;
    out.w("<div c=1></div>");
  }
}, {
  t: _marko_componentType
}, _marko_component);