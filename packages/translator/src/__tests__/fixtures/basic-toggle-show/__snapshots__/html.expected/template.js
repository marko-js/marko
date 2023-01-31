import { write as _write, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, markHydrateNode as _markHydrateNode, writeHydrateCall as _writeHydrateCall, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const show = true;
  _write("<div>");
  let _ifScopeId;
  const _scope1_ = {},
    _ifRenderer = () => {};
  if (show) {
    const _scope1_id = _nextScopeId();
    _write("Hello!");
    _writeHydrateScope(_scope1_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope1_);
    _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/basic-toggle-show/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}<button>Toggle</button>${_markHydrateNode(_scope0_id, "#button/1")}</div>`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-toggle-show/template.marko_0_show");
  _writeHydrateScope(_scope0_id, {
    "show": show,
    "#text/0!": _scope1_,
    "#text/0(": _ifRenderer
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/basic-toggle-show/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);