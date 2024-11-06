import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`<div>${_$.markResumeCleanup(_scope0_id)}${_$.escapeXML((() => {
    throw new Error("Cannot use $signal in a server render.");
  })().onabort = () => {})}</div>`);
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/abort-signal-render-phase-error/template.marko", _renderer);