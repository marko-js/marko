import { write as _write, dynamicTag as _dynamicTag, markHydrateControlEnd as _markHydrateControlEnd, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("<set value=hello>");
  const _dynamicScope = _dynamicTag(input.renderBody, null);
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/0")}</set>`);
  _writeHydrateScope(_scope0_id, {
    "#text/0!": _dynamicScope,
    "#text/0(": input.renderBody
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/context-tag-from-relative-path/other.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);