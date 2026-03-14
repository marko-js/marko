import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let internal = input.value;
  const $return = internal;
  _._scope($scope0_id, {
    "#TagVariableChange": _._resume(_new_internal => {
      internal = _new_internal;
    }, "__tests__/tags/child.marko_0/valueChange", $scope0_id) || void 0
  }, "__tests__/tags/child.marko", 0);
  _._resume_branch($scope0_id);
  return $return;
});