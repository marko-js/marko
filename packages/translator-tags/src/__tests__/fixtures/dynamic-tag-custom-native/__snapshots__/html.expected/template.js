import child from "./components/child.marko";
import { markResumeNode as _markResumeNode, write as _write, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const tagName = child;
  _write(`<button></button>${_markResumeNode(_scope0_id, "#button/0")}`);
  const _dynamicScope = _dynamicTag(tagName, {
    id: "dynamic"
  });
  _write(`${_markResumeControlEnd(_scope0_id, "#text/1")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/template.marko_0_tagName");
  _writeScope(_scope0_id, {
    "tagName": tagName,
    "#text/1!": _dynamicScope,
    "#text/1(": tagName
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/template.marko");