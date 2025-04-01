import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let x = 1;
  _$.write("<span>child</span>");
  const _return = x;
  _$.resumeClosestBranch(_scope0_id);
  return _return;
});