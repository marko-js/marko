import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`<div a=0${_$.attr("b", input.value)}></div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);