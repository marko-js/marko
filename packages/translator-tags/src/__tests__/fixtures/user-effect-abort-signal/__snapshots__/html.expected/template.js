import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, markResumeCleanup as _markResumeCleanup, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const a = 0;
  const b = 0;
  _write(`<div>${_escapeXML(a)}${_markResumeNode(_scope0_id, "#text/0")} <!>${_escapeXML(b)}${_markResumeNode(_scope0_id, "#text/1")}</div>${_markResumeCleanup(_scope0_id)}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/user-effect-abort-signal/template.marko_0_input");
  _writeScope(_scope0_id, {
    "input": input
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/user-effect-abort-signal/template.marko");