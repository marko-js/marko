import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write("<div>child</div>");
  _$.writeEffect($scope0_id, "__tests__/tags/child.marko_0_input");
  _$.writeScope($scope0_id, {
    input
  }, "__tests__/tags/child.marko", 0, {
    input: 0
  });
  _$.resumeClosestBranch($scope0_id);
});