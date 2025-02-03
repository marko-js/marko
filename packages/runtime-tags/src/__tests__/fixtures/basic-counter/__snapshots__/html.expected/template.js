import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const clickCount = 0;
  _$.write(`<div><button>${_$.escapeXML(clickCount)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_clickCount");
  _$.debug(_$.writeScope(_scope0_id, {
    "clickCount": clickCount
  }), "__tests__/template.marko", 0, {
    "clickCount": "2:8"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);