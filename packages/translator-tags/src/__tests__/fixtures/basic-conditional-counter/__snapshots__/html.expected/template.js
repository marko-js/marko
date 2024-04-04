import { markResumeNode as _markResumeNode, write as _write, escapeXML as _escapeXML, serializedScope as _serializedScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, writeEffect as _writeEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const show = true;
  const count = 0;
  _write(`<button class=inc></button>${_markResumeNode(_scope0_id, "#button/0")}<button class=toggle></button>${_markResumeNode(_scope0_id, "#button/1")}`);
  let _ifScopeId, _scope1_, _ifRenderer;
  if (show) {
    const _scope1_id = _nextScopeId();
    _write(`<span>${_escapeXML(count)}${_markResumeNode(_scope1_id, "#text/0")}</span>`);
    _writeScope(_scope1_id, _scope1_ = {
      "_": _serializedScope(_scope0_id)
    });
    _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/2", _ifScopeId)}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_show");
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_count");
  _writeScope(_scope0_id, {
    "show": show,
    "count": count,
    "#text/2(": _ifRenderer,
    "#text/2!": _scope1_
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter/template.marko");