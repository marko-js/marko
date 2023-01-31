import { write as _write, dynamicTag as _dynamicTag, markHydrateControlEnd as _markHydrateControlEnd, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register(({
  renderBody
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("<body>");
  const _dynamicScope = _dynamicTag(renderBody, null);
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/0")}</body>`);
  _writeHydrateScope(_scope0_id, {
    "#text/0!": _dynamicScope,
    "#text/0(": renderBody
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/basic-layout/components/layout.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);