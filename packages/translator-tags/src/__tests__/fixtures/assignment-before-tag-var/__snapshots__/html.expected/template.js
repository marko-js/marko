import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const clickCount = 0;
  const lastClickCount = undefined;
  _$.write(`<button>+</button>${_$.markResumeNode(_scope0_id, "#button/0")}<span>${_$.escapeXML(clickCount)}${_$.markResumeNode(_scope0_id, "#text/1")} was <!>${_$.escapeXML(lastClickCount)}${_$.markResumeNode(_scope0_id, "#text/2")}</span>`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/assignment-before-tag-var/template.marko_0_clickCount");
  _$.writeScope(_scope0_id, {
    "clickCount": clickCount
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/assignment-before-tag-var/template.marko", _renderer);