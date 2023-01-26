import { markHydrateNode as _markHydrateNode, write as _write, escapeXML as _escapeXML, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, writeHydrateCall as _writeHydrateCall, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const show = true;
  const message = "hi";
  _write(`<button></button>${_markHydrateNode(_scope0_, "#button/0")}`);
  let _ifScopeId;
  const _ifScope = {},
    _ifRenderer = () => {};
  if (show) {
    const _scope1_ = _nextScopeId();
    _write(`<span>${_escapeXML(message)}${_markHydrateNode(_scope1_, "#text/0")}</span>`);
    _writeHydrateScope(_scope1_, Object.assign(_ifScope, {
      [_SYMBOL_OWNER]: _scope0_
    }));
    _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/batched-updates-cleanup/template.marko_1_renderer");
    _ifScopeId = _scope1_;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_, "#text/1", _ifScopeId)}`);
  _writeHydrateCall(_scope0_, "packages/translator/src/__tests__/fixtures/batched-updates-cleanup/template.marko_0_show");
  _writeHydrateScope(_scope0_, {
    "show": show,
    "#text/1!": _ifScope,
    "#text/1(": _ifRenderer
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);