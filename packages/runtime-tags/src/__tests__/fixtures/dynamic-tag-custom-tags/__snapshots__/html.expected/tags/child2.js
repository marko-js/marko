import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child2.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    value
  } = input;
  _$.write(`<div>Child 2 has <!>${_$.escapeXML(value)}${_$.markResumeNode(_scope0_id, "#text/0")}</div>`);
});