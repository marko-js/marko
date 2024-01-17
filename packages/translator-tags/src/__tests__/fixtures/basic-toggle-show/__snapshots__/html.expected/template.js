import { write as _write, serializedScope as _serializedScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, markResumeNode as _markResumeNode, writeEffect as _writeEffect, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const show = true;
  _write("<div>");
  let _ifScopeId, _scope1_, _ifRenderer;
  if (show) {
    const _scope1_id = _nextScopeId();
    _write("Hello!");
    _writeScope(_scope1_id, _scope1_ = {
      "_": _serializedScope(_scope0_id)
    });
    _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator/src/__tests__/fixtures/basic-toggle-show/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}<button>Toggle</button>${_markResumeNode(_scope0_id, "#button/1")}</div>`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-toggle-show/template.marko_0_show");
  _writeScope(_scope0_id, {
    "show": show,
    "#text/0!": _scope1_,
    "#text/0(": _ifRenderer
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/basic-toggle-show/template.marko");