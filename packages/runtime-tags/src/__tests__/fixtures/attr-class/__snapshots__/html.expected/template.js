import * as _$ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    c,
    d
  } = input;
  _$.write(`<div${_$.classAttr(["a", {
    b: c,
    d
  }])}></div>${_$.markResumeNode(_scope0_id, "#div/0")}<div class="a b"></div><div class="a b c"></div>`);
  const _childScope = _$.peekNextScope();
  _customTag({
    class: ["a", {
      b: c,
      d
    }]
  });
  const _childScope2 = _$.peekNextScope();
  _customTag({
    class: ["a", false, "b"]
  });
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, input.test, {
    class: ["a", {
      b: c,
      d
    }],
    test: _$.attrTag({
      class: ["a", {
        b: c,
        d
      }],
      content: _$.register(/* @__PURE__ */_$.createRenderer(() => {
        const _scope1_id = _$.nextScopeId();
        _$.write("Hello");
      }), "__tests__/template.marko_1_renderer", _scope0_id)
    })
  });
  _$.write(_$.markResumeControlEnd(_scope0_id, "#text/3"));
  _$.writeScope(_scope0_id, {
    "c": c,
    "d": d,
    "#childScope/1": _$.writeExistingScope(_childScope),
    "#childScope/2": _$.writeExistingScope(_childScope2),
    "#text/3!": _$.writeExistingScope(_dynamicScope),
    "#text/3(": _$.normalizeDynamicRenderer(input.test)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);