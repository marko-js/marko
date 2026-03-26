import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/custom-input.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<input${_._attr_input_value($scope0_id, "#input/0", input.value, input.valueChange && _._resume($next => {
    input.valueChange(parseInt($next));
  }, "__tests__/tags/custom-input.marko_0/valueChange", $scope0_id))} type=number>${_._el_resume($scope0_id, "#input/0", (_._serialize_guard($scope0_reason, /* input.value, input.valueChange */0)))}`);
  _._script($scope0_id, "__tests__/tags/custom-input.marko_0");
  _._scope($scope0_id, {
    input_value: (_._serialize_if($scope0_reason, /* input.valueChange */1)) && input.value,
    input_valueChange: input.valueChange
  }, "__tests__/tags/custom-input.marko", 0, {
    input_value: ["input.value"],
    input_valueChange: ["input.valueChange"]
  });
});