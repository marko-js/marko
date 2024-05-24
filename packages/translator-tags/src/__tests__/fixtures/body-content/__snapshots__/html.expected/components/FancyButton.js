import { attrs as _attrs, write as _write, dynamicTagInput as _dynamicTagInput, markResumeControlEnd as _markResumeControlEnd, markResumeNode as _markResumeNode, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    renderBody,
    ...attrs
  } = input;
  _write(`<button${_attrs(attrs, "#button/0", _scope0_id)}>`);
  const _dynamicScope = _dynamicTagInput(renderBody, {});
  _write(`${_markResumeControlEnd(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/body-content/components/FancyButton.marko_0_attrs");
  _writeScope(_scope0_id, {
    "attrs": attrs,
    "#text/1!": _dynamicScope,
    "#text/1(": renderBody
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/body-content/components/FancyButton.marko");