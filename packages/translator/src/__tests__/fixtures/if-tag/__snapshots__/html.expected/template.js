import { SYMBOL_OWNER as _SYMBOL_OWNER, write as _write, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  a,
  b,
  x,
  y
}, _tagVar) => {
  const _scope0_ = _nextScopeId();
  let _ifScopeId;
  const _ifScope = {},
    _ifRenderer = () => {};
  if (a + b) {
    const _scope1_ = _nextScopeId();
    _write("Hello");
    _writeHydrateScope(_scope1_, Object.assign(_ifScope, {
      [_SYMBOL_OWNER]: _scope0_
    }));
    _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/if-tag/template.marko_1_renderer");
    _ifScopeId = _scope1_;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_, "#text/0", _ifScopeId)}`);
  let _ifScopeId2;
  const _ifScope2 = {},
    _ifRenderer2 = () => {};
  if (a, b) {
    const _scope2_ = _nextScopeId();
    _write("World");
    _writeHydrateScope(_scope2_, Object.assign(_ifScope2, {
      [_SYMBOL_OWNER]: _scope0_
    }));
    _register(_ifRenderer2, "packages/translator/src/__tests__/fixtures/if-tag/template.marko_2_renderer");
    _ifScopeId2 = _scope2_;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_, "#text/1", _ifScopeId2)}<div>`);
  let _ifScopeId3;
  const _ifScope3 = {},
    _ifRenderer3 = () => {};
  if (x) {
    const _scope3_ = _nextScopeId();
    _write("A");
    _writeHydrateScope(_scope3_, Object.assign(_ifScope3, {
      [_SYMBOL_OWNER]: _scope0_
    }));
    _register(_ifRenderer3, "packages/translator/src/__tests__/fixtures/if-tag/template.marko_3_renderer");
    _ifScopeId3 = _scope3_;
  } else if (y) {
    const _scope4_ = _nextScopeId();
    _write("B");
    _writeHydrateScope(_scope4_, Object.assign(_ifScope3, {
      [_SYMBOL_OWNER]: _scope0_
    }));
    _register(_ifRenderer3, "packages/translator/src/__tests__/fixtures/if-tag/template.marko_4_renderer");
    _ifScopeId3 = _scope4_;
  } else {
    const _scope5_ = _nextScopeId();
    _write("C");
    _writeHydrateScope(_scope5_, Object.assign(_ifScope3, {
      [_SYMBOL_OWNER]: _scope0_
    }));
    _register(_ifRenderer3, "packages/translator/src/__tests__/fixtures/if-tag/template.marko_5_renderer");
    _ifScopeId3 = _scope5_;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_, "#text/2", _ifScopeId3)}</div>`);
  _writeHydrateScope(_scope0_, {
    "#text/0!": _ifScope,
    "#text/0(": _ifRenderer,
    "#text/1!": _ifScope2,
    "#text/1(": _ifRenderer2,
    "#text/2!": _ifScope3,
    "#text/2(": _ifRenderer3
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);