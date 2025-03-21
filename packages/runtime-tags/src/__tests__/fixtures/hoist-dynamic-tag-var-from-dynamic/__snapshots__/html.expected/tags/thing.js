import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/thing.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", input.content, {});
  const _dynamicScope2 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/1", input.content, {});
  _$.writeScope(_scope0_id, {
    "ConditionalScope:#text/0": _$.writeExistingScope(_dynamicScope),
    "ConditionalRenderer:#text/0": _$.dynamicTagId(input.content),
    "ConditionalScope:#text/1": _$.writeExistingScope(_dynamicScope2),
    "ConditionalRenderer:#text/1": _$.dynamicTagId(input.content)
  }, "__tests__/tags/thing.marko", 0);
});