import { markResumeNode as _markResumeNode, write as _write, escapeXML as _escapeXML, serializedScope as _serializedScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, writeEffect as _writeEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const message = {
    text: "hi"
  };
  const show = true;
  _write(`<button>hide</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  let _ifScopeId, _scope1_, _ifRenderer;
  if (show) {
    const _scope1_id = _nextScopeId();
    _write(`${_escapeXML(message.text)}${_markResumeNode(_scope1_id, "#text/0")}`);
    _writeScope(_scope1_id, _scope1_ = {
      "_": _serializedScope(_scope0_id)
    });
    _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/1", _ifScopeId)}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko_0");
  _writeScope(_scope0_id, {
    "#text/1!": _scope1_,
    "#text/1(": _ifRenderer
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko");