import { markHydrateNode as _markHydrateNode, write as _write, escapeXML as _escapeXML, markHydrateScopeStart as _markHydrateScopeStart, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlEnd as _markHydrateControlEnd, writeHydrateCall as _writeHydrateCall, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const show = true;
  const count = 0;
  _write(`<button class=inc></button>${_markHydrateNode(_scope0_, "#button/0")}<button class=toggle></button>${_markHydrateNode(_scope0_, "#button/1")}`);
  const _ifScope = {},
    _ifRenderer = () => {};
  if (show) {
    const _scope1_ = _nextScopeId();
    _write(`${_markHydrateScopeStart(_scope1_)}The count is <!>${_escapeXML(count)}${_markHydrateNode(_scope1_, "#text/0")}`);
    _writeHydrateScope(_scope1_, Object.assign(_ifScope, {
      [_SYMBOL_OWNER]: _scope0_
    }));
    _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_1_renderer");
  }
  _write(`${_markHydrateControlEnd(_scope0_, "#text/2")}`);
  _writeHydrateCall(_scope0_, "packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_show");
  _writeHydrateCall(_scope0_, "packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_count");
  _writeHydrateScope(_scope0_, {
    "show": show,
    "count": count,
    "#text/2!": _ifScope,
    "#text/2(": _ifRenderer
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);