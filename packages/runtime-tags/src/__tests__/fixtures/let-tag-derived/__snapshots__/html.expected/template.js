import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    a
  } = input;
  const b = a * 2;
  _$.write(`<button>Increment</button>${_$.markResumeNode(_scope0_id, "#button/0")}${_$.escapeXML(a)}${_$.markResumeNode(_scope0_id, "#text/1")} <!>${_$.escapeXML(b)}${_$.markResumeNode(_scope0_id, "#text/2")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_b");
  _$.writeScope(_scope0_id, {
    b
  }, "__tests__/template.marko", 0, {
    b: "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});