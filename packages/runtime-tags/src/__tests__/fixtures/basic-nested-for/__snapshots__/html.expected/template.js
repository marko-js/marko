import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _scope1_ = new Map();
  let items = [0, 1];
  _$.write(`<button>Push</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.resumeSingleNodeForOf(items, (outer, _index2) => {
    const _scope1_id = _$.nextScopeId();
    const _scope2_ = new Map();
    _$.resumeSingleNodeForOf(items, (inner, _index) => {
      const _scope2_id = _$.nextScopeId();
      const _childScope = _$.peekNextScope();
      _child({
        name: `${outer}.${inner}`
      });
      _scope2_.set(_index, _$.ensureScopeWithId(_scope2_id));
      _$.writeScope(_scope2_id, {
        "#childScope/0": _$.writeExistingScope(_childScope),
        _: _$.ensureScopeWithId(_scope1_id)
      }, "__tests__/template.marko", "5:4");
    }, _scope1_id, "#text/0");
    _scope1_.set(_index2, _$.ensureScopeWithId(_scope1_id));
    _$.writeScope(_scope1_id, {
      outer,
      "LoopScopeMap:#text/0": _scope2_.size ? _scope2_ : undefined,
      _: _$.ensureScopeWithId(_scope0_id)
    }, "__tests__/template.marko", "4:2", {
      outer: "4:6"
    });
  }, _scope0_id, "#text/1");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_items");
  _$.writeScope(_scope0_id, {
    items,
    "LoopScopeMap:#text/1": _scope1_.size ? _scope1_ : undefined
  }, "__tests__/template.marko", 0, {
    items: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});