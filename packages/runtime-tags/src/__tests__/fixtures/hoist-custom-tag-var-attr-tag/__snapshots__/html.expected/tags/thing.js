import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/thing.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", input.what, {});
  _$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.dynamicTagId(input.what)
  }, "__tests__/tags/thing.marko", 0);
});