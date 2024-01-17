import { write as _write, pushContext as _pushContext, getInContext as _getInContext, escapeXML as _escapeXML, markResumeNode as _markResumeNode, serializedScope as _serializedScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, popContext as _popContext, writeEffect as _writeEffect, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const show = true;
  _write("<div>");
  _pushContext("packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko", 123);
  const _scope1_id = _nextScopeId();
  let _ifScopeId, _scope2_, _ifRenderer;
  if (show) {
    const _scope2_id = _nextScopeId();
    _write("<span>");
    const x = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko");
    _write(`${_escapeXML(x)}${_markResumeNode(_scope2_id, "#text/0")}</span>`);
    _writeScope(_scope2_id, _scope2_ = {
      "_": _serializedScope(_scope1_id)
    });
    _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko_2_renderer");
    _ifScopeId = _scope2_id;
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope1_id, "#text/0", _ifScopeId)}`);
  _writeScope(_scope1_id, {
    "#text/0!": _scope2_,
    "#text/0(": _ifRenderer
  });
  _popContext();
  _write(`<button id=toggle>Toggle</button>${_markResumeNode(_scope0_id, "#button/1")}</div>`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko_0_show");
  _writeScope(_scope0_id, {
    "show": show
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko");