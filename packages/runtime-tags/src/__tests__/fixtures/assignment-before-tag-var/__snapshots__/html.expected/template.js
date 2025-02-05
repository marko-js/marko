import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const clickCount = 0;
  const lastClickCount = undefined;
  _$.write(`<button>+</button>${_$.markResumeNode(_scope0_id, "#button/0")}<span>${_$.escapeXML(clickCount)}${_$.markResumeNode(_scope0_id, "#text/1")} was <!>${_$.escapeXML(lastClickCount)}${_$.markResumeNode(_scope0_id, "#text/2")}</span>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_clickCount");
  _$.debug(_$.writeScope(_scope0_id, {
    "clickCount": clickCount
  }), "__tests__/template.marko", 0, {
    "clickCount": "6:6",
    "lastClickCount": "7:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);