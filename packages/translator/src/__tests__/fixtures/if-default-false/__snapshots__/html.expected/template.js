import { markResumeNode as _markResumeNode, write as _write, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeScope as _writeScope, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, writeEffect as _writeEffect, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const show = false;
  _write(`<button></button>${_markResumeNode(_scope0_id, "#button/0")}`);
  let _ifScopeId, _scope1_, _ifRenderer;
  if (show) {
    const _scope1_id = _nextScopeId();
    _write("hi");
    _writeScope(_scope1_id, _scope1_ = {
      [_SYMBOL_OWNER]: _scope0_id
    });
    _register(_ifRenderer = () => {}, "packages/translator/src/__tests__/fixtures/if-default-false/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/1", _ifScopeId)}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/if-default-false/template.marko_0_show");
  _writeScope(_scope0_id, {
    "show": show,
    "#text/1!": _scope1_,
    "#text/1(": _ifRenderer
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/if-default-false/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);