import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/list/index.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.resumeSingleNodeForOf(input.item, item => {
    const _scope1_id = _$.nextScopeId();
    const _dynamicScope = _$.peekNextScope();
    _$.dynamicTagInput(_scope1_id, "#text/0", item.content, {});
    _$.writeScope(_scope1_id, {
      "ConditionalScope:#text/0": _$.writeExistingScope(_dynamicScope),
      "ConditionalRenderer:#text/0": _$.dynamicTagId(item.content)
    }, "__tests__/tags/list/index.marko", "1:1");
  }, 0, _scope0_id, "#text/0");
});