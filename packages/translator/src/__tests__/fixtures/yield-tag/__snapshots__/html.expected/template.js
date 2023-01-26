import { SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, write as _write, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  show
}, _tagVar) => {
  const _scope0_ = _nextScopeId();
  let _ifScopeId;
  const _ifScope = {},
    _ifRenderer = () => {};
  if (show) {
    const _scope1_ = _nextScopeId();
    const _return = 1;
    _writeHydrateScope(_scope1_, Object.assign(_ifScope, {
      [_SYMBOL_OWNER]: _scope0_
    }));
    _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/yield-tag/template.marko_1_renderer");
    _ifScopeId = _scope1_;
  } else {
    const _scope2_ = _nextScopeId();
    const _return2 = 2;
    _writeHydrateScope(_scope2_, Object.assign(_ifScope, {
      [_SYMBOL_OWNER]: _scope0_
    }));
    _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/yield-tag/template.marko_2_renderer");
    _ifScopeId = _scope2_;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_, "#text/0", _ifScopeId)}`);
  _writeHydrateScope(_scope0_, {
    "#text/0!": _ifScope,
    "#text/0(": _ifRenderer
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);