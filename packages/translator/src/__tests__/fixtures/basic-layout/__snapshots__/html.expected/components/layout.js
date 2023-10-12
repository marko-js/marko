import { write as _write, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer(({
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
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/basic-layout/components/layout.marko");