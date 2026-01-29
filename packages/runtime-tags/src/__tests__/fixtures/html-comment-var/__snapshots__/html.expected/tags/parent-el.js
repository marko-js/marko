import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/parent-el.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let tagName = undefined;
  _._html(`<!--Body Text-->${_._el_resume($scope0_id, "#comment/0")}`);
  const $return = tagName;
  _._script($scope0_id, "__tests__/tags/parent-el.marko_0");
  _._scope($scope0_id, {}, "__tests__/tags/parent-el.marko", 0);
  _._resume_branch($scope0_id);
  return $return;
});