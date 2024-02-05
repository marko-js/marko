import _counter from "./components/counter.marko";
import { nextScopeId as _nextScopeId, createRenderer as _createRenderer, dynamicTagInput as _dynamicTagInput, markResumeControlEnd as _markResumeControlEnd, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const tagName = "div";
  const _dynamicScope = _dynamicTagInput(tagName, {}, /* @__PURE__ */_createRenderer(() => {
    const _scope1_id = _nextScopeId();
    _counter._({});
  }));
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}<button id=changeTag></button>${_markResumeNode(_scope0_id, "#button/1")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko_0_tagName");
  _writeScope(_scope0_id, {
    "tagName": tagName,
    "#text/0!": _dynamicScope,
    "#text/0(": tagName
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko");