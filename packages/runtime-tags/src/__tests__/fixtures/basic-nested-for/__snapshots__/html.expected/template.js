import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const items = [0, 1];
  _$.write(`<button>Push</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  const _forScopeIds2 = [],
    _scope1_ = new Map();
  _$.forOf(items, (outer, _index2) => {
    const _scope1_id = _$.nextScopeId();
    const _forScopeIds = [],
      _scope2_ = new Map();
    _$.forOf(items, (inner, _index) => {
      const _scope2_id = _$.nextScopeId();
      const _childScope = _$.peekNextScope();
      _child({
        name: `${outer}.${inner}`
      });
      _forScopeIds.push(_scope2_id);
      _$.writeScope(_scope2_id, {
        "#childScope/0": _$.writeExistingScope(_childScope),
        "_": _$.ensureScopeWithId(_scope1_id)
      });
      _scope2_.set(_index, _$.getScopeById(_scope2_id));
    });
    _forScopeIds2.push(_scope1_id);
    _$.write(_$.markResumeControlSingleNodeEnd(_scope1_id, "#text/0", _forScopeIds));
    _$.writeScope(_scope1_id, {
      "outer": outer,
      "#text/0(": _scope2_.size ? _scope2_ : undefined,
      "_": _$.ensureScopeWithId(_scope0_id)
    });
    _scope1_.set(_index2, _$.getScopeById(_scope1_id));
  });
  _$.write(_$.markResumeControlSingleNodeEnd(_scope0_id, "#text/1", _forScopeIds2));
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_items");
  _$.writeScope(_scope0_id, {
    "items": items,
    "#text/1(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);