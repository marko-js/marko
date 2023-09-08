import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, nextScopeId as _nextScopeId, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-fluurt/dist/debug/html";
import _classLayout from "./components/class-layout.marko";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const count = 0;
  const _dynamicScope = _dynamicTag(_classLayout, {}, () => _write(`<button id=tags>${_escapeXML(count)}${_markResumeNode(_scope1_id, "#text/1")}</button>${_markResumeNode(_scope1_id, "#button/0")}`));
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}`);
  _writeScope(_scope0_id, {
    "#text/0!": _dynamicScope,
    "#text/0(": _classLayout
  }, _scope0_);
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko");