import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let a = [0];
  let b = 1;
  _$.write(`<button>${_$.escapeXML(a.join(""))}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_a_b");
  _$.writeScope(_scope0_id, {
    a,
    b
  }, "__tests__/template.marko", 0, {
    a: "1:6",
    b: "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});