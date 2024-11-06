import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`<div${_$.attr("foo", `Hello ${input.name}`)}></div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/attr-template-literal-escape/template.marko", _renderer);