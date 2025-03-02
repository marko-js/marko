import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    name
  } = input;
  _$.write(`<div>${_$.escapeXML(name)}${_$.markResumeNode(_scope0_id, "#text/0")}</div>`);
});