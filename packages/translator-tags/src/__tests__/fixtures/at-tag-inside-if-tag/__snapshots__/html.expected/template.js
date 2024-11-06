import * as _$ from "@marko/runtime-tags/debug/html";
import _customTag from "./components/custom-tag/index.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    x
  } = input;
  const _childScope = _$.peekNextScope();
  let _thing;
  if (x) {
    _thing = _$.attrTag({
      x: 1,
      renderBody: _$.register(/* @__PURE__ */_$.createRenderer(() => {
        const _scope1_id = _$.nextScopeId();
        _$.write("Hello");
      }), "packages/translator-tags/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko_1_renderer", _scope0_id)
    });
  } else {
    _thing = _$.attrTag({
      x: 2,
      renderBody: _$.register(/* @__PURE__ */_$.createRenderer(() => {
        const _scope2_id = _$.nextScopeId();
        _$.write("Goodbye");
      }), "packages/translator-tags/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko_2_renderer", _scope0_id)
    });
  }
  _customTag({
    thing: _thing
  });
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko");