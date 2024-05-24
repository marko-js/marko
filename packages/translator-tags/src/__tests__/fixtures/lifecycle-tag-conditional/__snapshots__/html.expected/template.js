import { ensureScopeWithId as _ensureScopeWithId, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, getScopeById as _getScopeById, markResumeNode as _markResumeNode, write as _write, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const x = 0;
  const show = true;
  let _ifScopeId, _ifRenderer;
  if (show) {
    const _scope1_id = _nextScopeId();
    _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_1_x");
    _writeScope(_scope1_id, {
      "_": _ensureScopeWithId(_scope0_id)
    });
    _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_1_renderer", _scope0_id);
    _ifScopeId = _scope1_id;
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}<div id=ref></div><button id=increment>Increment</button>${_markResumeNode(_scope0_id, "#button/1")}<button id=toggle>Toggle</button>${_markResumeNode(_scope0_id, "#button/2")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_0_show");
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_0_x");
  _writeScope(_scope0_id, {
    "x": x,
    "show": show,
    "#text/0(": _ifRenderer,
    "#text/0!": _getScopeById(_ifScopeId)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko");