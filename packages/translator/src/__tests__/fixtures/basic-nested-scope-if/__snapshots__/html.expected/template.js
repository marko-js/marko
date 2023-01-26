import { write as _write, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const clickCount = 0;
  _write("<div>");
  let _ifScopeId;
  const _ifScope = {},
    _ifRenderer = () => {};
  if (clickCount < 3) {
    const _scope1_ = _nextScopeId();
    _write(`<button>${_escapeXML(clickCount)}${_markHydrateNode(_scope1_, "#text/1")}</button>${_markHydrateNode(_scope1_, "#button/0")}`);
    _writeHydrateCall(_scope1_, "packages/translator/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_clickCount");
    _writeHydrateScope(_scope1_, Object.assign(_ifScope, {
      "clickCount": clickCount,
      [_SYMBOL_OWNER]: _scope0_
    }));
    _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_renderer");
    _ifScopeId = _scope1_;
  } else {
    const _scope2_ = _nextScopeId();
    _write(`<span>The button was clicked <!>${_escapeXML(clickCount)}${_markHydrateNode(_scope2_, "#text/0")} times.</span>`);
    _writeHydrateScope(_scope2_, Object.assign(_ifScope, {
      [_SYMBOL_OWNER]: _scope0_
    }));
    _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/basic-nested-scope-if/template.marko_2_renderer");
    _ifScopeId = _scope2_;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_, "#text/0", _ifScopeId)}</div>`);
  _writeHydrateScope(_scope0_, {
    "#text/0!": _ifScope,
    "#text/0(": _ifRenderer
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);