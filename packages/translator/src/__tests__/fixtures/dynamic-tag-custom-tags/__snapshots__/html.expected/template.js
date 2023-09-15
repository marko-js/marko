import child1 from "./components/child1.marko";
import child2 from "./components/child2.marko";
import { dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, writeEffect as _writeEffect, writeScope as _writeScope, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const tagName = child1;
  const val = 3;
  const _dynamicScope = _dynamicTag(tagName, {
    value: val
  });
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}<button></button>${_markResumeNode(_scope0_id, "#button/1")}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko_0_tagName");
  _writeScope(_scope0_id, {
    "tagName": tagName,
    "val": val,
    "#text/0!": _dynamicScope,
    "#text/0(": tagName
  }, _scope0_);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko");