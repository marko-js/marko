import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, dynamicTagArgs as _dynamicTagArgs, peekNextScope as _peekNextScope, markResumeControlEnd as _markResumeControlEnd, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const x = 1;
  const y = 10;
  _write(`<button class=inc>${_escapeXML(x)}${_markResumeNode(_scope0_id, "#text/1")},<!>${_escapeXML(y)}${_markResumeNode(_scope0_id, "#text/2")}</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  const _dynamicScope = _peekNextScope();
  _dynamicTagArgs(_dynamicScope, input.renderBody, [x, y]);
  _write(`${_markResumeControlEnd(_scope0_id, "#text/3")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-args/components/custom-tag.marko_0_x_y");
  _writeScope(_scope0_id, {
    "x": x,
    "y": y,
    "#text/3!": _dynamicScope,
    "#text/3(": input.renderBody
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-args/components/custom-tag.marko");