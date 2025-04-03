import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/thing.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.writeEffect($scope0_id, "__tests__/tags/thing.marko_0_input_value");
  _$.writeScope($scope0_id, {
    input_value: input.value
  }, "__tests__/tags/thing.marko", 0, {
    input_value: ["input.value"]
  });
});