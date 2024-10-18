import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, dynamicTagInput as _dynamicTagInput, peekNextScope as _peekNextScope, markResumeControlEnd as _markResumeControlEnd, writeExistingScope as _writeExistingScope, normalizeDynamicRenderer as _normalizeDynamicRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const MyTag = {
    renderBody: _register(/* @__PURE__ */_createRenderer(({
      name
    }) => {
      const _scope1_id = _nextScopeId();
      const y = 1;
      _write(`<div>Hello <!>${_escapeXML(name)}${_markResumeNode(_scope1_id, "#text/0")} <!>${_escapeXML(y)}${_markResumeNode(_scope1_id, "#text/1")}</div><button>${_escapeXML(y)}${_markResumeNode(_scope1_id, "#text/3")}</button>${_markResumeNode(_scope1_id, "#button/2")}`);
      _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/define-tag-render/template.marko_1_y");
      _writeScope(_scope1_id, {
        "y": y
      });
    }), "packages/translator-tags/src/__tests__/fixtures/define-tag-render/template.marko_1_renderer")
  };
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, MyTag, {
    name: "Ryan"
  });
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}`);
  _writeScope(_scope0_id, {
    "#text/0!": _writeExistingScope(_dynamicScope),
    "#text/0(": _normalizeDynamicRenderer(MyTag)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/define-tag-render/template.marko");