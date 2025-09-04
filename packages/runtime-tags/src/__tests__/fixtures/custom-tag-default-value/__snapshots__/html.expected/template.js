import _child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  let x = "y";
  _child({
    value: 3
  });
  const $childScope = _._peek_scope_id();
  _child({
    value: x
  }, 1);
  _._scope($scope0_id, {
    "#childScope/1": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});