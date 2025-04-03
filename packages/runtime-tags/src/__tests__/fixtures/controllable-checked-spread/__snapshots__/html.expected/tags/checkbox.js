import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/checkbox.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`<input${_$.attrs({
    type: "checkbox",
    ...input
  }, "#input/0", $scope0_id, "input")}>${_$.markResumeNode($scope0_id, "#input/0")}`);
  _$.writeEffect($scope0_id, "__tests__/tags/checkbox.marko_0_input");
  _$.writeScope($scope0_id, {
    input
  }, "__tests__/tags/checkbox.marko", 0, {
    input: 0
  });
});