import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let a = 0;
  _$.write(`<div${_$.attrs(input.value, "#div/0", $scope0_id, "div")}></div>${_$.markResumeNode($scope0_id, "#div/0")}<div${_$.attrs({
    a: a,
    ...input.value
  }, "#div/1", $scope0_id, "div")}></div>${_$.markResumeNode($scope0_id, "#div/1")}<div${_$.attr("a", a)}${_$.partialAttrs(input.value, {
    a: 1
  }, "#div/2", $scope0_id, "div")}></div>${_$.markResumeNode($scope0_id, "#div/2")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_input_value_a");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_input_value");
  _$.writeScope($scope0_id, {
    input_value: input.value,
    a
  }, "__tests__/template.marko", 0, {
    input_value: ["input.value"],
    a: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});