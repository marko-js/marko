import { write as _write, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const clickCount = 0;
  _write("<div>");
  let _ifScopeId, _scope1_, _ifRenderer;
  if (clickCount < 3) {
    const _scope1_id = _nextScopeId();
    _write(`<button>${_escapeXML(clickCount)}${_markHydrateNode(_scope1_id, "#text/1")}</button>${_markHydrateNode(_scope1_id, "#button/0")}`);
    _writeHydrateCall(_scope1_id, "packages/translator/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_clickCount");
    _writeHydrateScope(_scope1_id, _scope1_ = {
      "clickCount": clickCount,
      [_SYMBOL_OWNER]: _scope0_id
    });
    _register(_ifRenderer = () => {}, "packages/translator/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  } else {
    const _scope2_id = _nextScopeId();
    _write(`<span>The button was clicked <!>${_escapeXML(clickCount)}${_markHydrateNode(_scope2_id, "#text/0")} times.</span>`);
    _writeHydrateScope(_scope2_id, _scope1_ = {
      [_SYMBOL_OWNER]: _scope0_id
    });
    _register(_ifRenderer = () => {}, "packages/translator/src/__tests__/fixtures/basic-nested-scope-if/template.marko_2_renderer");
    _ifScopeId = _scope2_id;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}</div>`);
  _writeHydrateScope(_scope0_id, {
    "#text/0!": _scope1_,
    "#text/0(": _ifRenderer
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/basic-nested-scope-if/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);