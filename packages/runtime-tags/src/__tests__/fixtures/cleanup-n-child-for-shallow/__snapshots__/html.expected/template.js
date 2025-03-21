import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _scope1_ = new Map();
  let items = [1, 2, 3];
  const el = _$.nodeRef();
  const write = _$.register(function (msg) {
    el().innerHTML += '\n' + msg;
  }, "__tests__/template.marko_0/write", _scope0_id);
  _$.write(`<button>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/0")}<div></div>${_$.markResumeNode(_scope0_id, "#div/1")}`);
  _$.resumeForOf(items, (item, _index) => {
    const _scope1_id = _$.nextScopeId();
    const _childScope = _$.peekNextScope();
    _child({
      write: write,
      name: item
    });
    _scope1_.set(_index, _$.ensureScopeWithId(_scope1_id));
    _$.writeScope(_scope1_id, {
      "#childScope/0": _$.writeExistingScope(_childScope)
    }, "__tests__/template.marko", "7:2");
  }, _scope0_id, "#text/2");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_items");
  _$.writeScope(_scope0_id, {
    items,
    write,
    "LoopScopeMap:#text/2": _scope1_.size ? _scope1_ : undefined
  }, "__tests__/template.marko", 0, {
    items: "1:6",
    write: "5:8"
  });
  _$.resumeClosestBranch(_scope0_id);
});