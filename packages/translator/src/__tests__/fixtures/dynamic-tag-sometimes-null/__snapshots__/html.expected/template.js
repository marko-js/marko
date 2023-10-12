import { write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, markResumeNode as _markResumeNode, writeEffect as _writeEffect, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const x = null;
  const _dynamicScope = _dynamicTag(x, {}, /* @__PURE__ */_createRenderer(() => {
    const _scope1_id = _nextScopeId();
    _write("Body Content");
  }));
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}<button></button>${_markResumeNode(_scope0_id, "#button/1")}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/dynamic-tag-sometimes-null/template.marko_0_x");
  _writeScope(_scope0_id, {
    "x": x,
    "#text/0!": _dynamicScope,
    "#text/0(": x
  }, _scope0_);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/dynamic-tag-sometimes-null/template.marko");