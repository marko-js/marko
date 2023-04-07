import { SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, write as _write, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  let _ifScopeId, _scope1_, _ifRenderer;
  if (input.show) {
    const _scope1_id = _nextScopeId();
    const _return = 1;
    _writeHydrateScope(_scope1_id, _scope1_ = {
      [_SYMBOL_OWNER]: _scope0_id
    });
    _register(_ifRenderer = () => {}, "packages/translator/src/__tests__/fixtures/return-tag/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  } else {
    const _scope2_id = _nextScopeId();
    const _return2 = 2;
    _writeHydrateScope(_scope2_id, _scope1_ = {
      [_SYMBOL_OWNER]: _scope0_id
    });
    _register(_ifRenderer = () => {}, "packages/translator/src/__tests__/fixtures/return-tag/template.marko_2_renderer");
    _ifScopeId = _scope2_id;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}`);
  _writeHydrateScope(_scope0_id, {
    "#text/0!": _scope1_,
    "#text/0(": _ifRenderer
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/return-tag/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);