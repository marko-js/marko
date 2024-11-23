import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`<div${_$.classAttr(input.foo)}${_$.attr("foo", 'a' + input.foo + 'b')}${_$.attr("bar", `a ${input.bar} b`)}${_$.attr("nested", `a ${input.foo + ` nested ${input.bar}`} b`)}></div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  _$.writeScope(_scope0_id, {
    "input_foo": input.foo,
    "input_bar": input.bar
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/attr-escape/template.marko", _renderer);