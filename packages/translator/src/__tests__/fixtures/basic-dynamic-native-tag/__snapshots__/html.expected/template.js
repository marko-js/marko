import { write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer(({
  tagName
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const _dynamicScope = _dynamicTag(tagName, {
    class: ["a", "b"]
  }, /* @__PURE__ */_createRenderer(() => {
    const _scope1_id = _nextScopeId();
    _write("Hello World");
  }));
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}`);
  _writeScope(_scope0_id, {
    "#text/0!": _dynamicScope,
    "#text/0(": tagName
  }, _scope0_);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/basic-dynamic-native-tag/template.marko");