import { write as _write, $_streamData as _$_streamData, escapeXML as _escapeXML, markResumeNode as _markResumeNode, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, writeEffect as _writeEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const show = false;
  _write("<div>");
  let _ifScopeId, _scope1_, _ifRenderer;
  if (show) {
    const _scope1_id = _nextScopeId();
    _write(`<span>${_escapeXML(_$_streamData.global.x)}${_markResumeNode(_scope1_id, "#text/0")}</span>`);
    _writeScope(_scope1_id, _scope1_ = {});
    _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/dollar-global-client/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}<button>Toggle</button>${_markResumeNode(_scope0_id, "#button/1")}</div>`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/dollar-global-client/template.marko_0_show");
  _writeScope(_scope0_id, {
    "show": show,
    "#text/0!": _scope1_,
    "#text/0(": _ifRenderer
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dollar-global-client/template.marko");