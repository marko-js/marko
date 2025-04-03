import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`<div a=0${_$.attr("b", input.value)}></div>${_$.markResumeNode($scope0_id, "#div/0")}`);
});