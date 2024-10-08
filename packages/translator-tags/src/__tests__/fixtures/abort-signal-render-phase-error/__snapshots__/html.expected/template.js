import { markResumeCleanup as _markResumeCleanup, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write(`<div>${_markResumeCleanup(_scope0_id)}${_escapeXML((() => {
    throw new Error("Cannot use $signal in a server render.");
  })().onabort = () => {})}</div>`);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/abort-signal-render-phase-error/template.marko");