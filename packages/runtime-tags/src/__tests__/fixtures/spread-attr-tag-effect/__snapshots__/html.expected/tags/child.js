import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/0")}`);
  _._script($scope0_id, "__tests__/tags/child.marko_0_input_option");
  _._scope($scope0_id, {
    input_option: input.option
  }, "__tests__/tags/child.marko", 0, {
    input_option: ["input.option"]
  });
});