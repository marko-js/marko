import { attrs as _attrs, markResumeNode as _markResumeNode, createRenderer as _createRenderer, register as _register, write as _write, writeEffect as _writeEffect, nextScopeId as _nextScopeId, dynamicTagInput as _dynamicTagInput, peekNextScope as _peekNextScope, markResumeControlEnd as _markResumeControlEnd, writeExistingScope as _writeExistingScope, normalizeDynamicRenderer as _normalizeDynamicRenderer, escapeXML as _escapeXML, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const value = "b";
  const tag = "select";
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, tag ? "select" : {}, {
    value,
    valueChange(v) {
      value = v;
    }
  }, _register(/* @__PURE__ */_createRenderer(() => {
    const _scope1_id = _nextScopeId();
    _write(`<option${_attrs({
      value: "a"
    }, "#option/0", _scope1_id, "option")}>A</option>${_markResumeNode(_scope1_id, "#option/0")}<option${_attrs({
      value: "b"
    }, "#option/1", _scope1_id, "option")}>B</option>${_markResumeNode(_scope1_id, "#option/1")}<option${_attrs({
      value: "c"
    }, "#option/2", _scope1_id, "option")}>C</option>${_markResumeNode(_scope1_id, "#option/2")}`);
    _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/controllable-select-dynamic-spread/template.marko_1");
  }), "packages/translator-tags/src/__tests__/fixtures/controllable-select-dynamic-spread/template.marko_1_renderer", _scope0_id));
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}<span>${_escapeXML(value)}${_markResumeNode(_scope0_id, "#text/1")}</span>`);
  _writeScope(_scope0_id, {
    "value": value,
    "#text/0!": _writeExistingScope(_dynamicScope),
    "#text/0(": _normalizeDynamicRenderer(tag ? "select" : {})
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/controllable-select-dynamic-spread/template.marko");