import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, dynamicTagInput as _dynamicTagInput, peekNextScope as _peekNextScope, markResumeControlEnd as _markResumeControlEnd, writeExistingScope as _writeExistingScope, normalizeDynamicRenderer as _normalizeDynamicRenderer, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    name,
    renderBody
  } = input;
  _write(`<!>${_escapeXML(name)}${_markResumeNode(_scope0_id, "#text/0")}`);
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, renderBody, {});
  _write(`${_markResumeControlEnd(_scope0_id, "#text/1")}`);
  _writeScope(_scope0_id, {
    "#text/1!": _writeExistingScope(_dynamicScope),
    "#text/1(": _normalizeDynamicRenderer(renderBody)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/custom-tag-render-body/components/child/index.marko");