import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "__tests__/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import a from "b";
doThings();
andStuff();
function more() {
  abc();
}
import _marko_escapeStyle from "marko/src/runtime/html/helpers/escape-style-placeholder.js";
import _marko_escapeScript from "marko/src/runtime/html/helpers/escape-script-placeholder.js";
import _marko_attr from "marko/src/runtime/html/helpers/attr.js";
import _marko_class_merge from "marko/src/runtime/helpers/class-value.js";
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag.js";
import _other from "./components/other/index.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import { a as _marko_repeatable_attr_tag, i as _marko_render_input } from "marko/src/runtime/helpers/attr-tag.js";
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml.js";
import _marko_merge_attrs from "marko/src/runtime/html/helpers/merge-attrs.js";
import _marko_attrs from "marko/src/runtime/html/helpers/attrs.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {
  onCreate() {
    this.stuff();
  }
};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
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
  (() => {
    var d = thing;
    let e = thing;
    out.w(`<div${_marko_attr("d", d)}${_marko_attr("e", e)}></div>`);
  })();
  out.w("</div>");
  out.w("<div></div>");
  out.w(`<div${_marko_attr("id", _componentDef.elId("1"))}></div>`);
  out.w(`<div${_marko_attr("class", _marko_class_merge(["a", {
    b: c,
    d
  }]))} style=a:b></div>`);
  out.w("<input type=text>");
  _marko_dynamic_tag(out, a, null, out => {
    out.w("<div></div>");
  }, null, null, _componentDef, "@x");
  _marko_dynamic_tag(out, _thing, () => ({
    "x": 1
  }), null, null, null, _componentDef, "11");
  _marko_tag(_other, {
    "renderBody": (out, a) => {
      out.w("<div></div>");
    }
  }, out, _componentDef, "12", [["click", "handleClick", false, [a, b, ...d]]]);
  _marko_tag(_other, _marko_render_input(() => {
    _marko_repeatable_attr_tag("c", _marko_render_input(() => {
      _marko_repeatable_attr_tag("d", {
        "d": 1,
        "renderBody": out => {
          out.w("<div></div>");
        }
      });
      return (out => {
        out.w("<div></div>");
      });
    }, {
      "c": 1
    }));
    return (out => {
      out.w("<div></div>");
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
  out.w(`<div${_marko_merge_attrs({
    "class": "b c",
    "a": "{\"a\":1}",
    "c": "${d}"
  }, e, f(), {
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
  t: _marko_componentType,
  d: true
}, _marko_component);