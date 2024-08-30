import { write as _write, dynamicTagInput as _dynamicTagInput, peekNextScope as _peekNextScope, markResumeControlEnd as _markResumeControlEnd, markResumeNode as _markResumeNode, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    onClick,
    renderBody
  } = input;
  _write("<button>");
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, renderBody, {});
  _write(`${_markResumeControlEnd(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onClick");
  _writeScope(_scope0_id, {
    "onClick": onClick,
    "#text/1!": _dynamicScope,
    "#text/1(": renderBody
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko");