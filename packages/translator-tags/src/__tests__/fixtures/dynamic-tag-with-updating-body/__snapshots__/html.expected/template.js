import _counter from "./components/counter.marko";
import { peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, dynamicTagInput as _dynamicTagInput, markResumeControlEnd as _markResumeControlEnd, normalizeDynamicRenderer as _normalizeDynamicRenderer, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const tagName = "div";
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, tagName, {}, _register(/* @__PURE__ */_createRenderer(() => {
    const _scope1_id = _nextScopeId();
    const _childScope = _peekNextScope();
    _counter({});
    _writeScope(_scope1_id, {
      "#childScope/0": _writeExistingScope(_childScope)
    });
  }), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko_1_renderer"));
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}<button id=changeTag></button>${_markResumeNode(_scope0_id, "#button/1")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko_0_tagName");
  _writeScope(_scope0_id, {
    "tagName": tagName,
    "#text/0!": _writeExistingScope(_dynamicScope),
    "#text/0(": _normalizeDynamicRenderer(tagName)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko");