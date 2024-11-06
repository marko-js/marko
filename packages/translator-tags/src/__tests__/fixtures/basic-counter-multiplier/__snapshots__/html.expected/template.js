import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  const multiplier = 1;
  const multipliedCount = count * multiplier;
  _$.write(`<button id=multiplier>increase multiplier (<!>${_$.escapeXML(multiplier)}${_$.markResumeNode(_scope0_id, "#text/1")})</button>${_$.markResumeNode(_scope0_id, "#button/0")}<button id=count>increase count</button>${_$.markResumeNode(_scope0_id, "#button/2")}<div>${_$.escapeXML(multipliedCount)}${_$.markResumeNode(_scope0_id, "#text/3")}</div>`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-counter-multiplier/template.marko_0_count");
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-counter-multiplier/template.marko_0_multiplier");
  _$.writeScope(_scope0_id, {
    "count": count,
    "multiplier": multiplier
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-counter-multiplier/template.marko", _renderer);