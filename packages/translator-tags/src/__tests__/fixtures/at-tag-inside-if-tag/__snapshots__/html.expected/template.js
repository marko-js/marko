import { write as _write, nextScopeId as _nextScopeId, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, createRenderer as _createRenderer, register as _register, attrTag as _attrTag, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _customTag from "./components/custom-tag/index.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    x
  } = input;
  const _childScope = _peekNextScope();
  let _thing;
  if (x) {
    _thing = _attrTag({
      x: 1,
      renderBody: _register(/* @__PURE__ */_createRenderer(() => {
        const _scope1_id = _nextScopeId();
        _write("Hello");
      }), "packages/translator-tags/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko_1_renderer", _scope0_id)
    });
  } else {
    _thing = _attrTag({
      x: 2,
      renderBody: _register(/* @__PURE__ */_createRenderer(() => {
        const _scope2_id = _nextScopeId();
        _write("Goodbye");
      }), "packages/translator-tags/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko_2_renderer", _scope0_id)
    });
  }
  _customTag({
    thing: _thing
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko");