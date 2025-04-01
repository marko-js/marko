import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`Hello <!>${_$.escapeXML(input.name)}${_$.markResumeNode(_scope0_id, "#text/0")}! Hello <!>${_$.toString(input.name)}${_$.markResumeNode(_scope0_id, "#text/1")}! Hello <!>${_$.toString(input.missing)}${_$.markResumeNode(_scope0_id, "#text/2")}!`);
});