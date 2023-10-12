import { write as _write, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, markResumeNode as _markResumeNode, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer(({
  onClick,
  renderBody
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("<button>");
  const _dynamicScope = _dynamicTag(renderBody, null);
  _write(`${_markResumeControlEnd(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onClick");
  _writeScope(_scope0_id, {
    "onClick": onClick,
    "#text/1!": _dynamicScope,
    "#text/1(": renderBody
  }, _scope0_);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko");