import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const x = 0;
  _$.write(`<div id=ref></div><button id=increment>Increment</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/lifecycle-tag/template.marko_0_x");
  _$.writeScope(_scope0_id, {
    "x": x
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/lifecycle-tag/template.marko", _renderer);