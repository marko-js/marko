import { write as _write, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, nextScopeId as _nextScopeId, writeScope as _writeScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register(({
  renderBody
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("<body>");
  const _dynamicScope = _dynamicTag(renderBody, null);
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}</body>`);
  _writeScope(_scope0_id, {
    "#text/0!": _dynamicScope,
    "#text/0(": renderBody
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/basic-layout/components/layout.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);