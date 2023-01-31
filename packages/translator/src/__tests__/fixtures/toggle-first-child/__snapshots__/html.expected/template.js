import { write as _write, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register(({
  value
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("<div>");
  let _ifScopeId;
  const _scope1_ = {},
    _ifRenderer = () => {};
  if (value) {
    const _scope1_id = _nextScopeId();
    _write(`<span>${_escapeXML(value)}${_markHydrateNode(_scope1_id, "#text/0")}</span>`);
    _writeHydrateScope(_scope1_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope1_);
    _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/toggle-first-child/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}<span></span><span></span></div>`);
  _writeHydrateScope(_scope0_id, {
    "#text/0!": _scope1_,
    "#text/0(": _ifRenderer
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/toggle-first-child/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);