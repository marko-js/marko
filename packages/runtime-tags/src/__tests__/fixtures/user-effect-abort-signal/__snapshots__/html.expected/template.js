import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let a = 0;
  let b = 0;
  _$.write(`<div>${_$.escapeXML(a)}${_$.markResumeNode(_scope0_id, "#text/0")} <!>${_$.escapeXML(b)}${_$.markResumeNode(_scope0_id, "#text/1")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_input_value");
  _$.writeScope(_scope0_id, {
    input_value: input.value
  }, "__tests__/template.marko", 0, {
    input_value: ["input.value"]
  });
  _$.resumeClosestBranch(_scope0_id);
});