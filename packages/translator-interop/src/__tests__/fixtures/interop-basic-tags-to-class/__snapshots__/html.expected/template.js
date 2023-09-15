import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, nextScopeId as _nextScopeId, writeEffect as _writeEffect, writeScope as _writeScope, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/dist/debug/html";
import _classCounter from "./components/class-counter.marko";
import _marko_tags_compat from "marko/src/runtime/helpers/tags-compat-html.js";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const count = 0;
  _write(`<button id=tags>${_escapeXML(count)}${_markResumeNode(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  const _dynamicScope = _dynamicTag(_classCounter, {
    count: count
  });
  _write(`${_markResumeControlEnd(_scope0_id, "#text/2")}`);
  _writeEffect(_scope0_id, "packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count");
  _writeScope(_scope0_id, {
    "count": count,
    "#text/2!": _dynamicScope,
    "#text/2(": _classCounter
  }, _scope0_);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko");