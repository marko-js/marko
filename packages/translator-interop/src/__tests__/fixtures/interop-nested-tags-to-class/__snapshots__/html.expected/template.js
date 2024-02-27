import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, serializedScope as _serializedScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, dynamicTagInput as _dynamicTagInput, markResumeControlEnd as _markResumeControlEnd, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _classLayout from "./components/class-layout.marko";
import _marko_tags_compat, { serialized5to6 as _serialized5to } from "marko/src/runtime/helpers/tags-compat-html.js";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const count = 0;
  const _dynamicScope = _dynamicTagInput(_classLayout, {}, _register( /* @__PURE__ */_createRenderer(() => {
    const _scope1_id = _nextScopeId();
    _write(`<button id=tags>${_escapeXML(count)}${_markResumeNode(_scope1_id, "#text/1")}</button>${_markResumeNode(_scope1_id, "#button/0")}`);
    _writeEffect(_scope1_id, "packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count");
    _writeEffect(_scope1_id, "packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count/subscriber");
    _writeScope(_scope1_id, {
      "_": _serializedScope(_scope0_id)
    });
  }), "packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer", _scope0_id));
  _serialized5to(_classLayout, "packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko");
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}`);
  _writeScope(_scope0_id, {
    "count": count,
    "#text/0!": _dynamicScope,
    "#text/0(": _classLayout
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko");