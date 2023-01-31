import { write as _write, dynamicTag as _dynamicTag, markHydrateControlEnd as _markHydrateControlEnd, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const x = null;
  const _dynamicScope = _dynamicTag(x, {}, () => _write("Body Content"));
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/0")}<button></button>${_markHydrateNode(_scope0_id, "#button/1")}`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/dynamic-tag-sometimes-null/template.marko_0_x");
  _writeHydrateScope(_scope0_id, {
    "x": x,
    "#text/0!": _dynamicScope,
    "#text/0(": x
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/dynamic-tag-sometimes-null/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);