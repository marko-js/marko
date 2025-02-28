import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const x = 0;
  const prev = false;
  _$.write(`<div>x=<span>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/0")}</span>, was=<!>${_$.escapeXML(prev)}${_$.markResumeNode(_scope0_id, "#text/1")}</div><button id=increment>Increment</button>${_$.markResumeNode(_scope0_id, "#button/2")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope(_scope0_id, {
    x
  }, "__tests__/template.marko", 0, {
    x: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);