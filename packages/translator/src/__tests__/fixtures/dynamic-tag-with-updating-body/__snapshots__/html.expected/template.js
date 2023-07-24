import { nextScopeId as _nextScopeId, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _counter from "./components/counter.marko";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const tagName = "div";
  const _dynamicScope = _dynamicTag(tagName, {}, () => _counter({
    renderBody() {
      const _scope2_id = _nextScopeId();
    }
  }));
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}<button id=changeTag></button>${_markResumeNode(_scope0_id, "#button/1")}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko_0_tagName");
  _writeScope(_scope0_id, {
    "tagName": tagName,
    "#text/0!": _dynamicScope,
    "#text/0(": tagName
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);