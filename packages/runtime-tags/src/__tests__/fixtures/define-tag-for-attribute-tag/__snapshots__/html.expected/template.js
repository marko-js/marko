import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const selected = false;
  const myThing = {
    selected: selected,
    content: _$.register(/* @__PURE__ */_$.createRenderer(() => {
      const _scope1_id = _$.nextScopeId();
      _$.write("<span>The thing</span>");
    }), "__tests__/template.marko_1_renderer", _scope0_id)
  };
  const _childScope = _$.peekNextScope();
  _child({
    thing: myThing
  });
  _$.write(`<button>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_selected");
  _$.writeScope(_scope0_id, {
    "selected": selected,
    "#childScope/0": _$.writeExistingScope(_childScope)
  });
  _$.markResumeCleanup(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);