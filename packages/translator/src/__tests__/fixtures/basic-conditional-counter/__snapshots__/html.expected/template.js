import { markHydrateNode as _markHydrateNode, write as _write, escapeXML as _escapeXML, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, writeHydrateCall as _writeHydrateCall, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const show = true;
  const count = 0;
  _write(`<button class=inc></button>${_markHydrateNode(_scope0_id, "#button/0")}<button class=toggle></button>${_markHydrateNode(_scope0_id, "#button/1")}`);
  let _ifScopeId, _scope1_, _ifRenderer;
  if (show) {
    const _scope1_id = _nextScopeId();
    _write(`<span>${_escapeXML(count)}${_markHydrateNode(_scope1_id, "#text/0")}</span>`);
    _writeHydrateScope(_scope1_id, _scope1_ = {
      [_SYMBOL_OWNER]: _scope0_id
    });
    _register(_ifRenderer = () => {}, "packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/2", _ifScopeId)}`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_show");
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_count");
  _writeHydrateScope(_scope0_id, {
    "show": show,
    "count": count,
    "#text/2!": _scope1_,
    "#text/2(": _ifRenderer
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);