import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const clickCount = 0;
  const lastCount = 0;
  const lastCount2 = 0;
  _$.write(`<button>${_$.escapeXML(clickCount)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}used to be <span>${_$.escapeXML(lastCount)}${_$.markResumeNode(_scope0_id, "#text/2")}</span> which should be the same as <span>${_$.escapeXML(lastCount2)}${_$.markResumeNode(_scope0_id, "#text/3")}</span>`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/nested-assignment-expression/template.marko_0_clickCount");
  _$.writeScope(_scope0_id, {
    "clickCount": clickCount
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/nested-assignment-expression/template.marko");