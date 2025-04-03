import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = 1;
  let y = 2;
  _$.write("<span>child</span>");
  const $return = x + y;
  _$.writeScope($scope0_id, {
    x,
    y
  }, "__tests__/tags/child.marko", 0, {
    x: "1:6",
    y: "2:6"
  });
  _$.resumeClosestBranch($scope0_id);
  return $return;
});