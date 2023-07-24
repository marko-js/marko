import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, nextScopeId as _nextScopeId, writeEffect as _writeEffect, writeScope as _writeScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const x = 1;
  _write(`<button class=inc>${_escapeXML(x)}${_markResumeNode(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  const _dynamicScope = _dynamicTag(input.renderBody, {
    value: [x]
  });
  _write(`${_markResumeControlEnd(_scope0_id, "#text/2")}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/custom-tag-parameters/components/custom-tag.marko_0_x");
  _writeScope(_scope0_id, {
    "x": x,
    "#text/2!": _dynamicScope,
    "#text/2(": input.renderBody
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/custom-tag-parameters/components/custom-tag.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);