import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  const $scope0_id = _._scope_id();
  let x = 1;
  let y = 2;
  _._html("<span>child</span>");
  const $return = x + y;
  _._scope($scope0_id, {
    x,
    y
  }, "__tests__/tags/child.marko", 0, {
    x: "1:6",
    y: "2:6"
  });
  _._resume_branch($scope0_id);
  return $return;
});