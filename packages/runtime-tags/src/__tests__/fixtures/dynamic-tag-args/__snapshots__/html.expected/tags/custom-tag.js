import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/custom-tag.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`<div>${_$.escapeXML(JSON.stringify(input))}${_$.markResumeNode(_scope0_id, "#text/0")}</div>`);
});