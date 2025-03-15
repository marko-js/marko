import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let x = 1;
  const y = x * 2;
  const z = y * 3;
  _$.write(`<div>${_$.escapeXML(z)}${_$.markResumeNode(_scope0_id, "#text/0")}</div>`);
  _$.resumeClosestBranch(_scope0_id);
});