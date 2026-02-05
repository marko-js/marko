import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "Zyx4Ei4",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import a from "b";
doThings();
andStuff();
function more() {
  abc();
}
import _marko_escapeStyle from "marko/dist/runtime/html/helpers/escape-style-placeholder.js";
import _marko_escapeScript from "marko/dist/runtime/html/helpers/escape-script-placeholder.js";
import _marko_attr from "marko/dist/runtime/html/helpers/attr.js";
import _marko_class_merge from "marko/dist/runtime/helpers/class-value.js";
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag.js";
import _other from "./components/other/index.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import { a as _marko_repeatable_attr_tag, i as _marko_render_input } from "marko/dist/runtime/helpers/attr-tag.js";
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml.js";
import _marko_merge_attrs from "marko/dist/runtime/html/helpers/merge-attrs.js";
import _marko_attrs from "marko/dist/runtime/html/helpers/attrs.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {
  onCreate() {
    this.stuff();
  }
};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w(`<style id=css>\n  div {\n    color: ${_marko_escapeStyle(x)};\n  }\n</style><script>\n  var y = ${_marko_escapeScript(x)};\n</script>`);
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
  out.w(`</div><div></div><div${_marko_attr("id", _componentDef.elId("1"))}></div><div${_marko_attr("class", _marko_class_merge(["a", {
    b: c,
    d
  }]))} style=a:b></div><input type=text>`);
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
  })}>${_marko_escapeXml(a)}<!--abc--><div c=1></div><div d=1></div>`);
  if (x === a) {
    out.w(`a ${_marko_escapeXml(b)}`);
  } else if (x === 2) {
    out.w("b");
  } else {
    out.w("c");
  }
  out.w(`</div><div b=1></div><div>123 abc 123</div><span${_marko_attrs(abc)}></span>`);
  if (cond) {
    out.w(`Hello ${_marko_escapeXml(planet)}`);
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