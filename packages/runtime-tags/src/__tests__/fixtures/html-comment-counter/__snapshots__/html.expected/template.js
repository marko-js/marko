import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  _$.write(`<div><button>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}<!--${_$.escapeXML(count)} + ${_$.escapeXML(count)} = ${_$.escapeXML(count + count)}-->${_$.markResumeNode(_scope0_id, "#comment/2")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    count: count
  }, "__tests__/template.marko", 0, {
    count: "2:8"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);