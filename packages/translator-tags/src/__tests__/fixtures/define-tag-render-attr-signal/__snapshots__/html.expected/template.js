import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, dynamicTagInput as _dynamicTagInput, markResumeControlEnd as _markResumeControlEnd, writeEffect as _writeEffect, writeScope as _writeScope, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const x = 1;
  const myTag = {
    renderBody({
      number
    }) {
      const _scope1_id = _nextScopeId();
      _write(`<div>${_escapeXML(number)}${_markResumeNode(_scope1_id, "#text/0")}</div>`);
    }
  };
  const _dynamicScope = _dynamicTagInput(myTag.renderBody, {
    number: x
  });
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}<button>${_escapeXML(x)}${_markResumeNode(_scope0_id, "#text/2")}</button>${_markResumeNode(_scope0_id, "#button/1")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/define-tag-render-attr-signal/template.marko_0_x");
  _writeScope(_scope0_id, {
    "x": x,
    "#text/0!": _dynamicScope,
    "#text/0(": myTag.renderBody
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/define-tag-render-attr-signal/template.marko");