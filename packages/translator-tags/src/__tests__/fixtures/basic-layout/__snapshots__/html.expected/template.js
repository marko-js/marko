import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, ensureScopeWithId as _ensureScopeWithId, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _layout from "./components/layout.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    name
  } = input;
  const _childScope = _peekNextScope();
  _layout({
    renderBody: _register(/* @__PURE__ */_createRenderer(() => {
      const _scope1_id = _nextScopeId();
      _write(`<h1>Hello <!>${_escapeXML(name)}${_markResumeNode(_scope1_id, "#text/0")}</h1>`);
      _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/basic-layout/template.marko_1_name/subscriber");
      _writeScope(_scope1_id, {
        "_": _ensureScopeWithId(_scope0_id)
      });
    }), "packages/translator-tags/src/__tests__/fixtures/basic-layout/template.marko_1_renderer", _scope0_id)
  });
  _writeScope(_scope0_id, {
    "name": name,
    "#childScope/0": _writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-layout/template.marko");