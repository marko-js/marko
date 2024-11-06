import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./components/child/index.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  _child({
    name: "World",
    renderBody: _$.register(/* @__PURE__ */_$.createRenderer(() => {
      const _scope1_id = _$.nextScopeId();
      _$.write("This is the body content");
    }), "packages/translator-tags/src/__tests__/fixtures/custom-tag-render-body/template.marko_1_renderer", _scope0_id)
  });
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/custom-tag-render-body/template.marko");