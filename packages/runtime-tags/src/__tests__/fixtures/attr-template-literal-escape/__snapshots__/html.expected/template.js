import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`<div${_$.attr("foo", `Hello ${input.name}`)}></div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
});