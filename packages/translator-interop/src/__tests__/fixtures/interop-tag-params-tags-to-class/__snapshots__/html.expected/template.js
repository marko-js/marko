import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, ensureScopeWithId as _ensureScopeWithId, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, dynamicTagInput as _dynamicTagInput, peekNextScope as _peekNextScope, markResumeControlEnd as _markResumeControlEnd, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _classLayout from "./components/class-layout.marko";
import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const multiplier = 1;
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, _classLayout, {}, _register( /* @__PURE__ */_createRenderer((baseCount, message) => {
    const _scope1_id = _nextScopeId();
    _write(`<h1>${_escapeXML(message)}${_markResumeNode(_scope1_id, "#text/0")}</h1><button id=tags>${_escapeXML(multiplier)}${_markResumeNode(_scope1_id, "#text/2")} * <!>${_escapeXML(baseCount)}${_markResumeNode(_scope1_id, "#text/3")} = <!>${_escapeXML(multiplier * baseCount)}${_markResumeNode(_scope1_id, "#text/4")}</button>${_markResumeNode(_scope1_id, "#button/1")}`);
    _writeEffect(_scope1_id, "packages/translator-interop/src/__tests__/fixtures/interop-tag-params-tags-to-class/template.marko_1_multiplier/subscriber");
    _writeEffect(_scope1_id, "packages/translator-interop/src/__tests__/fixtures/interop-tag-params-tags-to-class/template.marko_1_multiplier");
    _writeScope(_scope1_id, {
      "baseCount": baseCount,
      "_": _ensureScopeWithId(_scope0_id)
    });
  }), "packages/translator-interop/src/__tests__/fixtures/interop-tag-params-tags-to-class/template.marko_1_renderer", _scope0_id));
  _s(_classLayout, "packages/translator-interop/src/__tests__/fixtures/interop-tag-params-tags-to-class/components/class-layout.marko");
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}`);
  _writeScope(_scope0_id, {
    "multiplier": multiplier,
    "#text/0!": _dynamicScope,
    "#text/0(": _classLayout
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-interop/src/__tests__/fixtures/interop-tag-params-tags-to-class/template.marko");