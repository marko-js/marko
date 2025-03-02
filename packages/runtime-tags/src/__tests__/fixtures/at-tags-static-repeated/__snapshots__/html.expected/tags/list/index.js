import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/list/index.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _scope1_ = new Map();
  _$.resumeSingleNodeForOf(input.item, (item, _index) => {
    const _scope1_id = _$.nextScopeId();
    const _dynamicScope = _$.peekNextScope();
    _$.dynamicTagInput(_scope1_id, "#text/0", item.content, {});
    _scope1_.set(_index, _$.ensureScopeWithId(_scope1_id));
    _$.writeScope(_scope1_id, {
      "#text/0!": _$.writeExistingScope(_dynamicScope),
      "#text/0(": _$.dynamicTagId(item.content)
    }, "__tests__/tags/list/index.marko", "1:1");
  }, _scope0_id, "#text/0");
  _$.writeScope(_scope0_id, {
    "#text/0(": _scope1_.size ? _scope1_ : undefined
  }, "__tests__/tags/list/index.marko", 0);
});