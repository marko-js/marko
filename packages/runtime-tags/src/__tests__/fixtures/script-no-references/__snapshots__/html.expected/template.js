import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html("<div id=foo></div>");
  _._script($scope0_id, "__tests__/template.marko_0");
  _._resume_branch($scope0_id);
});