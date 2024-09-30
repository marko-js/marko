import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, ensureScopeWithId as _ensureScopeWithId, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, dynamicTagInput as _dynamicTagInput, peekNextScope as _peekNextScope, markResumeControlEnd as _markResumeControlEnd, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const x = 1;
  const myTag = {
    renderBody: _register(/* @__PURE__ */_createRenderer(() => {
      const _scope1_id = _nextScopeId();
      _write(`<div>${_escapeXML(x)}${_markResumeNode(_scope1_id, "#text/0")}</div>`);
      _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/define-tag-render-closure/template.marko_1_x/subscriber");
      _writeScope(_scope1_id, {
        "_": _ensureScopeWithId(_scope0_id)
      });
    }), "packages/translator-tags/src/__tests__/fixtures/define-tag-render-closure/template.marko_1_renderer", _scope0_id)
  };
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, myTag, {});
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}<button>${_escapeXML(x)}${_markResumeNode(_scope0_id, "#text/2")}</button>${_markResumeNode(_scope0_id, "#button/1")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/define-tag-render-closure/template.marko_0_x");
  _writeScope(_scope0_id, {
    "x": x,
    "#text/0!": _dynamicScope,
    "#text/0(": myTag
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/define-tag-render-closure/template.marko");