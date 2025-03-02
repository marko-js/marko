const div = "span";
const foo = "div";
const Bar = "div";
import * as _$ from "@marko/runtime-tags/debug/html";
import _foo from "./tags/foo.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<div></div>");
  _foo({});
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/1", Bar, {});
  _$.writeScope(_scope0_id, {
    "#text/1!": _$.writeExistingScope(_dynamicScope),
    "#text/1(": _$.dynamicTagId(Bar)
  }, "__tests__/template.marko", 0);
});