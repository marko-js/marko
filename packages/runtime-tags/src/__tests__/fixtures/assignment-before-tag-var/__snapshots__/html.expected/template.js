import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let clickCount = 0;
  let lastClickCount = undefined;
  _$.write(`<button>+</button>${_$.markResumeNode(_scope0_id, "#button/0")}<span>${_$.escapeXML(clickCount)}${_$.markResumeNode(_scope0_id, "#text/1")} was <!>${_$.escapeXML(lastClickCount)}${_$.markResumeNode(_scope0_id, "#text/2")}</span>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_clickCount");
  _$.writeScope(_scope0_id, {
    clickCount
  }, "__tests__/template.marko", 0, {
    clickCount: "6:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});