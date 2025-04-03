import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = 1;
  _$.write("<span>child</span>");
  const $return = x + 3;
  _$.resumeClosestBranch($scope0_id);
  return $return;
});