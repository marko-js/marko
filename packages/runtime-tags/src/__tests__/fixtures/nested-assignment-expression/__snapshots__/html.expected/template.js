import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let clickCount = 0;
  let lastCount = 0;
  let lastCount2 = 0;
  _$.write(`<button>${_$.escapeXML(clickCount)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}used to be <span>${_$.escapeXML(lastCount)}${_$.markResumeNode(_scope0_id, "#text/2")}</span> which should be the same as <span>${_$.escapeXML(lastCount2)}${_$.markResumeNode(_scope0_id, "#text/3")}</span>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_clickCount");
  _$.writeScope(_scope0_id, {
    clickCount
  }, "__tests__/template.marko", 0, {
    clickCount: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});