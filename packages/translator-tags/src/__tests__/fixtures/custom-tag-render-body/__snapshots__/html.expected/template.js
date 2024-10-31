import { write as _write, nextScopeId as _nextScopeId, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, createRenderer as _createRenderer, register as _register, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _child from "./components/child/index.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _childScope = _peekNextScope();
  _child({
    name: "World",
    renderBody: _register(/* @__PURE__ */_createRenderer(() => {
      const _scope1_id = _nextScopeId();
      _write("This is the body content");
    }), "packages/translator-tags/src/__tests__/fixtures/custom-tag-render-body/template.marko_1_renderer", _scope0_id)
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/custom-tag-render-body/template.marko");