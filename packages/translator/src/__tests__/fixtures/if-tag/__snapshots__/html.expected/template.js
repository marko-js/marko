import { SYMBOL_OWNER as _SYMBOL_OWNER, write as _write, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  let _ifScopeId;
  const _scope1_ = {},
    _ifRenderer = () => {};
  if (input.a + input.b) {
    const _scope1_id = _nextScopeId();
    _write("Hello");
    _writeHydrateScope(_scope1_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope1_);
    _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/if-tag/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}`);
  let _ifScopeId2;
  const _scope2_ = {},
    _ifRenderer2 = () => {};
  if (input.a, input.b) {
    const _scope2_id = _nextScopeId();
    _write("World");
    _writeHydrateScope(_scope2_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope2_);
    _register(_ifRenderer2, "packages/translator/src/__tests__/fixtures/if-tag/template.marko_2_renderer");
    _ifScopeId2 = _scope2_id;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/1", _ifScopeId2)}<div>`);
  let _ifScopeId3;
  const _scope3_ = {},
    _ifRenderer3 = () => {};
  if (input.x) {
    const _scope3_id = _nextScopeId();
    _write("A");
    _writeHydrateScope(_scope3_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope3_);
    _register(_ifRenderer3, "packages/translator/src/__tests__/fixtures/if-tag/template.marko_3_renderer");
    _ifScopeId3 = _scope3_id;
  } else if (input.y) {
    const _scope4_id = _nextScopeId();
    _write("B");
    _writeHydrateScope(_scope4_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, undefined);
    _register(_ifRenderer3, "packages/translator/src/__tests__/fixtures/if-tag/template.marko_4_renderer");
    _ifScopeId3 = _scope4_id;
  } else {
    const _scope5_id = _nextScopeId();
    _write("C");
    _writeHydrateScope(_scope5_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, undefined);
    _register(_ifRenderer3, "packages/translator/src/__tests__/fixtures/if-tag/template.marko_5_renderer");
    _ifScopeId3 = _scope5_id;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/2", _ifScopeId3)}</div>`);
  _writeHydrateScope(_scope0_id, {
    "#text/0!": _scope1_,
    "#text/0(": _ifRenderer,
    "#text/1!": _scope2_,
    "#text/1(": _ifRenderer2,
    "#text/2!": _scope3_,
    "#text/2(": _ifRenderer3
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/if-tag/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);