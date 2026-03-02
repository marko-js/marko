import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/my-let.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let value = input.value;
  const $return = value;
  _._scope($scope0_id, {
    "#TagVariableChange": _._resume(_new_value => {
      value = _new_value;
    }, "__tests__/tags/my-let.marko_0/valueChange", $scope0_id) || void 0
  }, "__tests__/tags/my-let.marko", 0);
  _._resume_branch($scope0_id);
  return $return;
});