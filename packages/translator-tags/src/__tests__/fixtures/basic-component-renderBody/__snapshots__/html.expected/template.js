import { register as _register, escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, ensureScopeWithId as _ensureScopeWithId, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _myButton from "./components/my-button.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const clickCount = 0;
  const _childScope = _peekNextScope();
  _myButton({
    onClick: _register(function () {
      clickCount++;
    }, "packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_0/onClick", _scope0_id),
    renderBody: _register(/* @__PURE__ */_createRenderer(() => {
      const _scope1_id = _nextScopeId();
      _write(`${_escapeXML(clickCount)}${_markResumeNode(_scope1_id, "#text/0")}`);
      _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_1_clickCount/subscriber");
      _writeScope(_scope1_id, {
        "_": _ensureScopeWithId(_scope0_id)
      });
    }), "packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_1_renderer", _scope0_id)
  });
  _writeScope(_scope0_id, {
    "clickCount": clickCount,
    "#childScope/0": _writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko");