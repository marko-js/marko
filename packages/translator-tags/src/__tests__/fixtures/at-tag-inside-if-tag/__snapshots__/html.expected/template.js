import { write as _write, createRenderer as _createRenderer, register as _register, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _customTag from "./components/custom-tag/index.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    x
  } = input;
  let _thing;
  if (x) _thing = {
    x: 1,
    renderBody: _register(/* @__PURE__ */_createRenderer(() => {
      _write("Hello");
    }), "packages/translator-tags/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko_1_renderer", _scope0_id)
  };
  const _childScope = _peekNextScope();
  _customTag({
    thing: _thing
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko");