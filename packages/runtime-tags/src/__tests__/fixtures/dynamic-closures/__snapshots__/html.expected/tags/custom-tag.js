import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<div>");
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", input.content, {});
  _$.write("</div>");
  _$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.dynamicTagId(input.content)
  }, "__tests__/tags/custom-tag.marko", 0);
});