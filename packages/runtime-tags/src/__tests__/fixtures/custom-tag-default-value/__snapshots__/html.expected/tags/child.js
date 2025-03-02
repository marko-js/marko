import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const value = input.value;
  _$.write(`<!>${_$.escapeXML(value)}${_$.markResumeNode(_scope0_id, "#text/0")} `);
});