import { SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeEffect as _writeEffect, writeScope as _writeScope, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, markResumeNode as _markResumeNode, write as _write, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const x = 0;
  const show = true;
  let _ifScopeId, _scope1_, _ifRenderer;
  if (show) {
    const _scope1_id = _nextScopeId();
    _writeEffect(_scope1_id, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_1_x");
    _writeScope(_scope1_id, _scope1_ = {
      "x": x,
      [_SYMBOL_OWNER]: _scope0_id
    });
    _register(_ifRenderer = () => {}, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}<div id=ref></div><button id=increment>Increment</button>${_markResumeNode(_scope0_id, "#button/1")}<button id=toggle>Toggle</button>${_markResumeNode(_scope0_id, "#button/2")}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_0_show");
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_0_x");
  _writeScope(_scope0_id, {
    "x": x,
    "show": show,
    "#text/0!": _scope1_,
    "#text/0(": _ifRenderer
  }, _scope0_);
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko");