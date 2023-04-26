import { dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, write as _write, nextScopeId as _nextScopeId, writeScope as _writeScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const _dynamicScope = _dynamicTag(input.renderBody, null);
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}`);
  _writeScope(_scope0_id, {
    "#text/0!": _dynamicScope,
    "#text/0(": input.renderBody
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/custom-tag-render-body/components/child/index.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);