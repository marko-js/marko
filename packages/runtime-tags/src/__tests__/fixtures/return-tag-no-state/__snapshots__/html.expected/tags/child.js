import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const x = 1;
  _._html("<span>child</span>");
  const $return = x;
  return $return;
});