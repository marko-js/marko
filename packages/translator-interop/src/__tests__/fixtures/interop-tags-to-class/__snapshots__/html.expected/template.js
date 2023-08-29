import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, nextScopeId as _nextScopeId, writeEffect as _writeEffect, writeScope as _writeScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/debug/html";
import _classCounter from "./components/class-counter.marko";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const count = 0;
  _write(`<button>${_escapeXML(count)}${_markResumeNode(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  const _dynamicScope = _dynamicTag(_classCounter, null);
  _write(`${_markResumeControlEnd(_scope0_id, "#text/2")}`);
  _writeEffect(_scope0_id, "packages/translator-interop/src/__tests__/fixtures/interop-tags-to-class/template.marko_0_count");
  _writeScope(_scope0_id, {
    "count": count,
    "#text/2!": _dynamicScope,
    "#text/2(": _classCounter
  }, _scope0_);
}, "packages/translator-interop/src/__tests__/fixtures/interop-tags-to-class/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);