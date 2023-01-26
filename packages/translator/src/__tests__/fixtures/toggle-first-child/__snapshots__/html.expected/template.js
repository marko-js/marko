import { write as _write, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  value
}, _tagVar) => {
  const _scope0_ = _nextScopeId();
  _write("<div>");
  let _ifScopeId;
  const _ifScope = {},
    _ifRenderer = () => {};
  if (value) {
    const _scope1_ = _nextScopeId();
    _write(`<span>${_escapeXML(value)}${_markHydrateNode(_scope1_, "#text/0")}</span>`);
    _writeHydrateScope(_scope1_, Object.assign(_ifScope, {
      [_SYMBOL_OWNER]: _scope0_
    }));
    _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/toggle-first-child/template.marko_1_renderer");
    _ifScopeId = _scope1_;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_, "#text/0", _ifScopeId)}<span></span><span></span></div>`);
  _writeHydrateScope(_scope0_, {
    "#text/0!": _ifScope,
    "#text/0(": _ifRenderer
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);