import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/layout.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    content
  } = input;
  _$.write("<body>");
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", content, {});
  _$.writeTrailers("</body>");
  _$.writeScope(_scope0_id, {
    "ConditionalScope:#text/0": _$.writeExistingScope(_dynamicScope),
    "ConditionalRenderer:#text/0": _$.dynamicTagId(content)
  }, "__tests__/tags/layout.marko", 0);
});