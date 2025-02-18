import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  _$.write(`<button id=addTwo>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}<button id=triple>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/3")}</button>${_$.markResumeNode(_scope0_id, "#button/2")}<button id=cube>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/5")}</button>${_$.markResumeNode(_scope0_id, "#button/4")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    count: count
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);