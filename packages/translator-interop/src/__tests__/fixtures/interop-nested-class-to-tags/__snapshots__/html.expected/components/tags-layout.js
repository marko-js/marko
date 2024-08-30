import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, dynamicTagInput as _dynamicTagInput, peekNextScope as _peekNextScope, markResumeControlEnd as _markResumeControlEnd, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const count = 0;
  _write(`<button id=tags>${_escapeXML(count)}${_markResumeNode(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}<div>`);
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, input.renderBody, {});
  _write(`${_markResumeControlEnd(_scope0_id, "#text/2")}</div>`);
  _writeEffect(_scope0_id, "packages/translator-interop/src/__tests__/fixtures/interop-nested-class-to-tags/components/tags-layout.marko_0_count");
  _writeScope(_scope0_id, {
    "count": count,
    "#text/2!": _dynamicScope,
    "#text/2(": input.renderBody
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-interop/src/__tests__/fixtures/interop-nested-class-to-tags/components/tags-layout.marko");