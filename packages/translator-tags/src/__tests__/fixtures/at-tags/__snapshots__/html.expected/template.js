import { write as _write, nextScopeId as _nextScopeId, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, createRenderer as _createRenderer, register as _register, attrTag as _attrTag, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _hello from "./components/hello/index.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _childScope = _peekNextScope();
  _hello({
    foo: _attrTag({
      renderBody: _register(/* @__PURE__ */_createRenderer(() => {
        const _scope1_id = _nextScopeId();
        _write("Foo!");
      }), "packages/translator-tags/src/__tests__/fixtures/at-tags/template.marko_1_renderer", _scope0_id)
    })
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/at-tags/template.marko");