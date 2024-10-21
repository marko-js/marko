import { markResumeNode as _markResumeNode, write as _write, escapeXML as _escapeXML, ensureScopeWithId as _ensureScopeWithId, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, getScopeById as _getScopeById, writeEffect as _writeEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const show = true;
  const message = "hi";
  _write(`<button></button>${_markResumeNode(_scope0_id, "#button/0")}`);
  let _ifScopeId, _ifRenderer;
  if (show) {
    const _scope1_id = _nextScopeId();
    _write(`<span>${_escapeXML(message)}${_markResumeNode(_scope1_id, "#text/0")}</span>`);
    _writeScope(_scope1_id, {
      "_": _ensureScopeWithId(_scope0_id)
    });
    _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/batched-updates-cleanup/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/1", _ifScopeId)}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/batched-updates-cleanup/template.marko_0_show");
  _writeScope(_scope0_id, {
    "show": show,
    "message": message,
    "#text/1(": _ifRenderer,
    "#text/1!": _getScopeById(_ifScopeId)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/batched-updates-cleanup/template.marko");