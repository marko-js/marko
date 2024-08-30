import { classAttr as _classAttr, write as _write, dynamicTagInput as _dynamicTagInput, peekNextScope as _peekNextScope, markResumeControlEnd as _markResumeControlEnd, markResumeNode as _markResumeNode, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write(`<div${_classAttr({
    "selected": input.thing.selected
  })}>`);
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, input.thing.renderBody, {});
  _write(`${_markResumeControlEnd(_scope0_id, "#text/1")}</div>${_markResumeNode(_scope0_id, "#div/0")}`);
  _writeScope(_scope0_id, {
    "#text/1!": _dynamicScope,
    "#text/1(": input.thing.renderBody
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/components/child.marko");