import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/my-let.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let value = input.value;
  const $return = value;
  _$.writeScope($scope0_id, {
    "#TagVariableChange": _$.register(_new_value => {
      value = _new_value;
    }, "__tests__/tags/my-let.marko_0/valueChange", $scope0_id)
  }, "__tests__/tags/my-let.marko", 0);
  _$.resumeClosestBranch($scope0_id);
  return $return;
});