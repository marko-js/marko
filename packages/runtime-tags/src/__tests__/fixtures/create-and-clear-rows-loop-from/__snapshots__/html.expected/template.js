import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<div>");
  _$.resumeForTo(input.to, input.from, input.step, n => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(n)}${_$.markResumeNode(_scope1_id, "#text/0")}, `);
  }, 0, _scope0_id, "#div/0", 1);
  _$.write("</div>");
  _$.writeScope(_scope0_id, {
    input_from: input.from,
    input_to: input.to,
    input_step: input.step
  }, "__tests__/template.marko", 0, {
    input_from: ["input.from"],
    input_to: ["input.to"],
    input_step: ["input.step"]
  });
});