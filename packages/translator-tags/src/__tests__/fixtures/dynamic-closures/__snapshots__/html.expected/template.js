const a = 1;
import { markResumeNode as _markResumeNode, write as _write, escapeXML as _escapeXML, ensureScopeWithId as _ensureScopeWithId, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, createRenderer as _createRenderer, register as _register, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const b = 2;
  const c = 3;
  _write(`<button></button>${_markResumeNode(_scope0_id, "#button/0")}`);
  const _childScope = _peekNextScope();
  _customTag({
    renderBody: _register(/* @__PURE__ */_createRenderer(() => {
      const _scope1_id = _nextScopeId();
      _write(`${_escapeXML(a)} ${_escapeXML(b)} <!>${_escapeXML(c)}${_markResumeNode(_scope1_id, "#text/2")}`);
      _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_1_c/subscriber");
      _writeScope(_scope1_id, {
        "_": _ensureScopeWithId(_scope0_id)
      });
    }), "packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_1_renderer", _scope0_id)
  });
  _write("<div>");
  if (Math.random()) {
    const _scope2_id = _nextScopeId();
    if (Math.random()) {
      const _scope3_id = _nextScopeId();
      _write(`${_escapeXML(a)} ${_escapeXML(b)} <!>${_escapeXML(c)}${_markResumeNode(_scope3_id, "#text/2")}`);
      _writeEffect(_scope3_id, "packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_3_c/subscriber");
      _writeScope(_scope3_id, {
        "_": _ensureScopeWithId(_scope2_id)
      });
    }
    _writeScope(_scope2_id, {
      "_": _ensureScopeWithId(_scope0_id)
    });
  }
  _write("</div>");
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_0");
  _writeScope(_scope0_id, {
    "b": b,
    "c": c,
    "#childScope/1": _writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko");