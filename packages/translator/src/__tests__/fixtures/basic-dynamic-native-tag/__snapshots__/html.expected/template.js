import { write as _write, dynamicTag as _dynamicTag, markHydrateControlEnd as _markHydrateControlEnd, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register(({
  tagName
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const _dynamicScope = _dynamicTag(tagName, {
    class: ["a", "b"]
  }, () => _write("Hello World"));
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/0")}`);
  _writeHydrateScope(_scope0_id, {
    "#text/0!": _dynamicScope,
    "#text/0(": tagName
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/basic-dynamic-native-tag/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);