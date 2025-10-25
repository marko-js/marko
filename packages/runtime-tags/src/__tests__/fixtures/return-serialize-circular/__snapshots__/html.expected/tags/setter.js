import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/setter.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const setter = _._resume(function () {
    input.valueChange(1);
  }, "__tests__/tags/setter.marko_0/setter", $scope0_id);
  const $return = (input.value, setter);
  _._scope($scope0_id, {
    input_valueChange: input.valueChange,
    input_value: _._serialize_if($scope0_reason, /* input.valueChange */0) && input.value,
    setter: _._serialize_if($scope0_reason, /* input.value */1) && setter
  }, "__tests__/tags/setter.marko", 0, {
    input_valueChange: ["input.valueChange"],
    input_value: ["input.value"],
    setter: "1:8"
  });
  return $return;
});