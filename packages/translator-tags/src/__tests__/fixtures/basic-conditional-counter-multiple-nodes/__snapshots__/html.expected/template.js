import { markResumeNode as _markResumeNode, write as _write, markResumeScopeStart as _markResumeScopeStart, escapeXML as _escapeXML, ensureScopeWithId as _ensureScopeWithId, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, markResumeControlEnd as _markResumeControlEnd, getScopeById as _getScopeById, writeEffect as _writeEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const show = true;
  const count = 0;
  _write(`<button class=inc></button>${_markResumeNode(_scope0_id, "#button/0")}<button class=toggle></button>${_markResumeNode(_scope0_id, "#button/1")}`);
  let _ifScopeId, _ifRenderer;
  if (show) {
    const _scope1_id = _nextScopeId();
    _write(`${_markResumeScopeStart(_scope1_id)}The count is <!>${_escapeXML(count)}${_markResumeNode(_scope1_id, "#text/0")}`);
    _writeScope(_scope1_id, {
      "_": _ensureScopeWithId(_scope0_id)
    });
    _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_1_renderer", _scope0_id);
    _ifScopeId = _scope1_id;
  }
  _write(`${_markResumeControlEnd(_scope0_id, "#text/2")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_show");
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_count");
  _writeScope(_scope0_id, {
    "show": show,
    "count": count,
    "#text/2(": _ifRenderer,
    "#text/2!": _getScopeById(_ifScopeId)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko");