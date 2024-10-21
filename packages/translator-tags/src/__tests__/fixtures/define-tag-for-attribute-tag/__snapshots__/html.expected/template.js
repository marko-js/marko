import { write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, markResumeNode as _markResumeNode, writeEffect as _writeEffect, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _child from "./components/child.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const selected = false;
  const myThing = {
    selected: selected,
    renderBody: _register(/* @__PURE__ */_createRenderer(() => {
      const _scope1_id = _nextScopeId();
      _write("<span>The thing</span>");
    }), "packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko_1_renderer", _scope0_id)
  };
  const _childScope = _peekNextScope();
  _child({
    thing: myThing
  });
  _write(`<button>Toggle</button>${_markResumeNode(_scope0_id, "#button/1")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko_0_selected");
  _writeScope(_scope0_id, {
    "selected": selected,
    "#childScope/0": _writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko");