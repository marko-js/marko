import _child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 0;
  const $childScope = _._peek_scope_id();
  _child({
    value: count,
    valueChange: _._resume(_new_count => {
      count = _new_count;
    }, "__tests__/template.marko_0/valueChange", $scope0_id)
  });
  _._scope($scope0_id, {
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});