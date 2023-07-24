import { markResumeNode as _markResumeNode, write as _write, escapeXML as _escapeXML, markResumeScopeStart as _markResumeScopeStart, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeScope as _writeScope, register as _register, markResumeControlEnd as _markResumeControlEnd, writeEffect as _writeEffect, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const show = true;
  const count = 0;
  _write(`<button class=inc></button>${_markResumeNode(_scope0_id, "#button/0")}<button class=toggle></button>${_markResumeNode(_scope0_id, "#button/1")}`);
  let _scope1_, _ifRenderer;
  if (show) {
    const _scope1_id = _nextScopeId();
    _write(`${_markResumeScopeStart(_scope1_id)}The count is <!>${_escapeXML(count)}${_markResumeNode(_scope1_id, "#text/0")}`);
    _writeScope(_scope1_id, _scope1_ = {
      [_SYMBOL_OWNER]: _scope0_id
    });
    _register(_ifRenderer = () => {}, "packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_1_renderer");
  }
  _write(`${_markResumeControlEnd(_scope0_id, "#text/2")}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_show");
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_count");
  _writeScope(_scope0_id, {
    "show": show,
    "count": count,
    "#text/2!": _scope1_,
    "#text/2(": _ifRenderer
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);