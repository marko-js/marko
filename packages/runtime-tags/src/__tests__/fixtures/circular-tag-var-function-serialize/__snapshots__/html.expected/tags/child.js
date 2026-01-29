import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._script($scope0_id, "__tests__/tags/child.marko_0_input_valueChange");
  _._scope($scope0_id, {
    input_valueChange: input.valueChange
  }, "__tests__/tags/child.marko", 0, {
    input_valueChange: ["input.valueChange"]
  });
});