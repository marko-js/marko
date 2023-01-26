import { SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, markHydrateNode as _markHydrateNode, write as _write, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const x = 0;
  const show = true;
  let _ifScopeId;
  const _ifScope = {},
    _ifRenderer = () => {};
  if (show) {
    const _scope1_ = _nextScopeId();
    _writeHydrateCall(_scope1_, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_1_x");
    _writeHydrateScope(_scope1_, Object.assign(_ifScope, {
      "x": x,
      [_SYMBOL_OWNER]: _scope0_
    }));
    _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_1_renderer");
    _ifScopeId = _scope1_;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_, "#text/0", _ifScopeId)}<div id=ref></div><button id=increment>Increment</button>${_markHydrateNode(_scope0_, "#button/1")}<button id=toggle>Toggle</button>${_markHydrateNode(_scope0_, "#button/2")}`);
  _writeHydrateCall(_scope0_, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_0_show");
  _writeHydrateCall(_scope0_, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_0_x");
  _writeHydrateScope(_scope0_, {
    "x": x,
    "show": show,
    "#text/0!": _ifScope,
    "#text/0(": _ifRenderer
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);