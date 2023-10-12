import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, createTemplate as _createTemplate } from "@marko/runtime-fluurt/dist/debug/html";
import _classLayout from "./components/class-layout.marko";
import _marko_tags_compat, { serialized5to6 as _serialized5to } from "marko/src/runtime/helpers/tags-compat-html.js";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const count = 0;
  const _dynamicScope = _dynamicTag(_classLayout, {}, /* @__PURE__ */_createRenderer(() => {
    const _scope1_id = _nextScopeId();
    _write(`<button id=tags>${_escapeXML(count)}${_markResumeNode(_scope1_id, "#text/1")}</button>${_markResumeNode(_scope1_id, "#button/0")}`);
    _writeEffect(_scope1_id, "packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count");
    _writeScope(_scope1_id, {
      "count": count
    });
  }));
  _serialized5to(_classLayout, "packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko");
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}`);
  _writeScope(_scope0_id, {
    "#text/0!": _dynamicScope,
    "#text/0(": _classLayout
  }, _scope0_);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko");