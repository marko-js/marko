import { write as _write, escapeXML as _escapeXML, markResumeNode as _markResumeNode, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeScope as _writeScope, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register(({
  value
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("<div>");
  let _ifScopeId, _scope1_, _ifRenderer;
  if (value) {
    const _scope1_id = _nextScopeId();
    _write(`<span>${_escapeXML(value)}${_markResumeNode(_scope1_id, "#text/0")}</span>`);
    _writeScope(_scope1_id, _scope1_ = {
      [_SYMBOL_OWNER]: _scope0_id
    });
    _register(_ifRenderer = () => {}, "packages/translator/src/__tests__/fixtures/toggle-first-child/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}<span></span><span></span></div>`);
  _writeScope(_scope0_id, {
    "#text/0!": _scope1_,
    "#text/0(": _ifRenderer
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/toggle-first-child/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);