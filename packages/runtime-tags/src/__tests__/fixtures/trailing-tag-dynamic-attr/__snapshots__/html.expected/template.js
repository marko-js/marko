import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const toggle = false;
  _$.write(`<html><body${_$.attr("data-toggle", toggle)}><button>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/1")}</body>${_$.markResumeNode(_scope0_id, "#body/0")}`), _$.writeTrailers("</html>");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_toggle");
  _$.writeScope(_scope0_id, {
    toggle
  }, "__tests__/template.marko", 0, {
    toggle: "1:5"
  });
  _$.resumeClosestBranch(_scope0_id);
});