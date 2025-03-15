import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let a = 0;
  let b = 0;
  _$.write(`<div><button class=a>${_$.escapeXML(a)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")} + <button class=b>${_$.escapeXML(b)}${_$.markResumeNode(_scope0_id, "#text/3")}</button>${_$.markResumeNode(_scope0_id, "#button/2")} = <!>${_$.escapeXML(a + b)}${_$.markResumeNode(_scope0_id, "#text/4")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    a,
    b
  }, "__tests__/template.marko", 0, {
    a: "2:8",
    b: "3:8"
  });
  _$.resumeClosestBranch(_scope0_id);
});