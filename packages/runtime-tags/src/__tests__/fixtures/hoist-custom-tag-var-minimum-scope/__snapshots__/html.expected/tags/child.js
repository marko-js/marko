import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $return = _._resume(() => input.value, "__tests__/tags/child.marko_0/_return", $scope0_id);
  _._scope($scope0_id, {
    input_value: input.value
  }, "__tests__/tags/child.marko", 0, {
    input_value: ["input.value"]
  });
  return $return;
});