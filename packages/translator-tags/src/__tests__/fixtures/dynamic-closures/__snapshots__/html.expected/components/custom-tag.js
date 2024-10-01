import { write as _write, dynamicTagInput as _dynamicTagInput, peekNextScope as _peekNextScope, markResumeControlEnd as _markResumeControlEnd, writeExistingScope as _writeExistingScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write("<div>");
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, input.renderBody, {});
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}</div>`);
  _writeScope(_scope0_id, {
    "#text/0!": _writeExistingScope(_dynamicScope),
    "#text/0(": input.renderBody
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dynamic-closures/components/custom-tag.marko");