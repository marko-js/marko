import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const clickCount = 0;
  const doubleCount = clickCount * 2;
  _$.write(`<div><button>${_$.escapeXML(doubleCount)}</button>${_$.markResumeNode(_scope0_id, "#button/0")}</div>`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-scriptlet/template.marko_0_clickCount");
  _$.writeScope(_scope0_id, {
    "clickCount": clickCount
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-scriptlet/template.marko");