import _child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let x = "y";
  _child({
    value: 3
  });
  const _childScope = _$.peekNextScope();
  _child({
    value: x
  });
  _$.writeScope(_scope0_id, {
    "#childScope/1": _$.writeExistingScope(_childScope)
  }, "__tests__/template.marko", 0);
  _$.resumeClosestBranch(_scope0_id);
});