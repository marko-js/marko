import _child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = "y";
  _child({
    value: 3
  });
  const $childScope = _$.peekNextScopeId();
  _child({
    value: x
  }, 1);
  _$.writeScope($scope0_id, {
    "#childScope/1": _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0);
  _$.resumeClosestBranch($scope0_id);
});