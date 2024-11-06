import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./components/child.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const selected = false;
  const myThing = {
    selected: selected,
    renderBody: _$.register(/* @__PURE__ */_$.createRenderer(() => {
      const _scope1_id = _$.nextScopeId();
      _$.write("<span>The thing</span>");
    }), "packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko_1_renderer", _scope0_id)
  };
  const _childScope = _$.peekNextScope();
  _child({
    thing: myThing
  });
  _$.write(`<button>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko_0_selected");
  _$.writeScope(_scope0_id, {
    "selected": selected,
    "#childScope/0": _$.writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/template.marko");