import * as _$ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
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
  _customTag({
    class: ["a", false, "b"]
  });
  /* @__PURE__ */_$.dynamicTag(_scope0_id, "#text/3", input.test, {
    class: ["a", {
      b: c,
      d
    }],
    test: _$.attrTag({
      class: ["a", {
        b: c,
        d
      }],
      content: _$.registerContent("__tests__/template.marko_1_renderer", () => {
        const _scope1_id = _$.nextScopeId();
        _$.write("Hello");
      }, _scope0_id)
    })
  }, 0, 0, 1);
  _$.writeScope(_scope0_id, {
    input_test: input.test,
    c,
    d,
    "#childScope/1": _$.writeExistingScope(_childScope)
  }, "__tests__/template.marko", 0, {
    input_test: ["input.test"],
    c: "2:10",
    d: "2:13"
  });
});