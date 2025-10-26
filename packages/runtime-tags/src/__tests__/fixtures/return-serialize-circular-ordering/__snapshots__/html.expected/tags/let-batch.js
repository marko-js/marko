import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/let-batch.marko", input => {
  const $scope0_id = _._scope_id();
  const $return = _._resume(function () {
    input.valueChange(1);
  }, "__tests__/tags/let-batch.marko_0/_return", $scope0_id);
  _._scope($scope0_id, {
    input_valueChange: input.valueChange
  }, "__tests__/tags/let-batch.marko", 0, {
    input_valueChange: ["input.valueChange"]
  });
  return $return;
});