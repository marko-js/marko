import { markResumeNode as _markResumeNode, ensureScopeWithId as _ensureScopeWithId, write as _write, markResumeCleanup as _markResumeCleanup, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, getScopeById as _getScopeById, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const show = true;
  const el = () => {
    throw new Error("Cannot reference DOM node from server");
  };
  _write(`<button>Toggle</button>${_markResumeNode(_scope0_id, "#button/0")}<pre></pre>${_markResumeNode(_scope0_id, "#pre/1")}`);
  let _ifScopeId, _ifRenderer;
  if (show) {
    const _scope1_id = _nextScopeId();
    _write(`<div>child</div>${_markResumeCleanup(_scope1_id)}`);
    _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-same-scope/template.marko_1");
    _writeScope(_scope1_id, {
      "_": _ensureScopeWithId(_scope0_id)
    });
    _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-same-scope/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/2", _ifScopeId)}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-same-scope/template.marko_0_show");
  _writeScope(_scope0_id, {
    "show": show,
    "#text/2(": _ifRenderer,
    "#text/2!": _getScopeById(_ifScopeId)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-same-scope/template.marko");