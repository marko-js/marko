import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    a,
    b
  } = input;
  _$.write(`<!>${_$.escapeXML(a)}${_$.markResumeNode(_scope0_id, "#text/0")} <!>${_$.escapeXML(b)}${_$.markResumeNode(_scope0_id, "#text/1")}`);
});