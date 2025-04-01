import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/custom-tag.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    class: className
  } = input;
  _$.write(`<div${_$.classAttr(className)}></div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
});