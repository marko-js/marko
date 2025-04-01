import baz from "./tags/baz.marko";
import foo from "./tags/foo.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let x = 1;
  _$.dynamicTag(_scope0_id, "#text/0", x === 1 ? baz : foo, {}, 0, 0, 1);
  _$.resumeClosestBranch(_scope0_id);
});