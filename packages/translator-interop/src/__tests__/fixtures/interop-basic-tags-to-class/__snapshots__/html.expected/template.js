import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/dist/debug/html";
import _classCounter from "./components/class-counter.marko";
import _marko_tags_compat, { serialized5to6 as _serialized5to } from "marko/src/runtime/helpers/tags-compat-html.js";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const count = 0;
  _write(`<button id=tags>${_escapeXML(count)}${_markResumeNode(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  const _dynamicScope = _dynamicTag(_classCounter, {
    count: count
  });
  _serialized5to(_classCounter, "packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko");
  _write(`${_markResumeControlEnd(_scope0_id, "#text/2")}`);
  _writeEffect(_scope0_id, "packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count");
  _writeScope(_scope0_id, {
    "count": count,
    "#text/2!": _dynamicScope,
    "#text/2(": _classCounter
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko");