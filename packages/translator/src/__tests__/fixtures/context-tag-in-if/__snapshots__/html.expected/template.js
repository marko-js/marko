import { write as _write, pushContext as _pushContext, getInContext as _getInContext, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, popContext as _popContext, writeHydrateCall as _writeHydrateCall, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const show = true;
  _write("<div>");
  _pushContext("packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko", 123);
  const _scope1_id = _nextScopeId();
  let _ifScopeId;
  const _scope2_ = {},
    _ifRenderer = () => {};
  if (show) {
    const _scope2_id = _nextScopeId();
    _write("<span>");
    const x = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko");
    _write(`${_escapeXML(x)}${_markHydrateNode(_scope2_id, "#text/0")}</span>`);
    _writeHydrateScope(_scope2_id, {
      [_SYMBOL_OWNER]: _scope1_id
    }, _scope2_);
    _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko_2_renderer");
    _ifScopeId = _scope2_id;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope1_id, "#text/0", _ifScopeId)}`);
  _writeHydrateScope(_scope1_id, {
    "#text/0!": _scope2_,
    "#text/0(": _ifRenderer
  }, undefined);
  _popContext();
  _write(`<button id=toggle>Toggle</button>${_markHydrateNode(_scope0_id, "#button/1")}</div>`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko_0_show");
  _writeHydrateScope(_scope0_id, {
    "show": show
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);