import { dynamicTagInput as _dynamicTagInput, peekNextScope as _peekNextScope, markResumeControlEnd as _markResumeControlEnd, writeExistingScope as _writeExistingScope, normalizeDynamicRenderer as _normalizeDynamicRenderer, escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    thing
  } = input;
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, thing, {});
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}<div>${_escapeXML(thing.x)}${_markResumeNode(_scope0_id, "#text/1")}</div>`);
  _writeScope(_scope0_id, {
    "#text/0!": _writeExistingScope(_dynamicScope),
    "#text/0(": _normalizeDynamicRenderer(thing)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/at-tag-inside-if-tag/components/custom-tag/index.marko");