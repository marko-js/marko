const div = "span";
const foo = "div";
const Bar = "div";
import * as _$ from "@marko/runtime-tags/debug/html";
import _foo from "./tags/foo.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<div></div>");
  _foo({});
  _$.dynamicTag(_scope0_id, "#text/1", Bar, {});
});