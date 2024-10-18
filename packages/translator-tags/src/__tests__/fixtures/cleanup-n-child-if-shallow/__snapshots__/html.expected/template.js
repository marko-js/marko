import { markResumeNode as _markResumeNode, ensureScopeWithId as _ensureScopeWithId, write as _write, markResumeScopeStart as _markResumeScopeStart, register as _register, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, markResumeControlEnd as _markResumeControlEnd, getScopeById as _getScopeById, writeEffect as _writeEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _child from "./components/child.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const show = true;
  const el = () => {
    throw new Error("Cannot reference DOM node from server");
  };
  _write(`<button>Toggle</button>${_markResumeNode(_scope0_id, "#button/0")}<div></div>${_markResumeNode(_scope0_id, "#div/1")}`);
  let _ifScopeId, _ifRenderer;
  if (show) {
    const _scope1_id = _nextScopeId();
    _write(`${_markResumeScopeStart(_scope1_id)}`);
    const _childScope = _peekNextScope();
    _child({
      write: _register(function (state) {
        el().innerHTML = state;
      }, "packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-shallow/template.marko_1/write", _scope1_id)
    });
    _writeScope(_scope1_id, {
      "_": _ensureScopeWithId(_scope0_id),
      "#childScope/0": _writeExistingScope(_childScope)
    });
    _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-shallow/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _write(`${_markResumeControlEnd(_scope0_id, "#text/2")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-shallow/template.marko_0_show");
  _writeScope(_scope0_id, {
    "show": show,
    "#text/2(": _ifRenderer,
    "#text/2!": _getScopeById(_ifScopeId)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-shallow/template.marko");