import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const className = "A";
  _$.write(`<p${_$.classAttr(className)}>paragraph</p>${_$.markResumeNode(_scope0_id, "#p/0")}<button></button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_className");
  _$.writeScope(_scope0_id, {
    "className/2": className
  }, "__tests__/template.marko", 0, {
    "className/2": "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);