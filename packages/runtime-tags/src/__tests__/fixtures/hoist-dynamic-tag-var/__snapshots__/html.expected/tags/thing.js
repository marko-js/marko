import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/thing.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._script($scope0_id, "__tests__/tags/thing.marko_0_input_value");
  _._scope($scope0_id, {
    input_value: input.value
  }, "__tests__/tags/thing.marko", 0, {
    input_value: ["input.value"]
  });
});