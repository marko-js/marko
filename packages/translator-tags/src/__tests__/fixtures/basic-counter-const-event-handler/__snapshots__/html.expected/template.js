import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const clickCount = 0;
  const increment = _$.register(function () {
    clickCount++;
  }, "packages/translator-tags/src/__tests__/fixtures/basic-counter-const-event-handler/template.marko_0/increment", _scope0_id);
  _$.write(`<button>${_$.escapeXML(clickCount)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-counter-const-event-handler/template.marko_0_increment");
  _$.writeScope(_scope0_id, {
    "increment": increment,
    "clickCount": clickCount
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-counter-const-event-handler/template.marko");