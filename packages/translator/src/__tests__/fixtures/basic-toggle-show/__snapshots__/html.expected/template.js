import { write as _write, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, markHydrateNode as _markHydrateNode, writeHydrateCall as _writeHydrateCall, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const show = true;
  _write("<div>");
  let _ifScopeId;
  const _ifScope = {},
    _ifRenderer = () => {};
  if (show) {
    const _scope1_ = _nextScopeId();
    _write("Hello!");
    _writeHydrateScope(_scope1_, Object.assign(_ifScope, {
      [_SYMBOL_OWNER]: _scope0_
    }));
    _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/basic-toggle-show/template.marko_1_renderer");
    _ifScopeId = _scope1_;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_, "#text/0", _ifScopeId)}<button>Toggle</button>${_markHydrateNode(_scope0_, "#button/1")}</div>`);
  _writeHydrateCall(_scope0_, "packages/translator/src/__tests__/fixtures/basic-toggle-show/template.marko_0_show");
  _writeHydrateScope(_scope0_, {
    "show": show,
    "#text/0!": _ifScope,
    "#text/0(": _ifRenderer
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);