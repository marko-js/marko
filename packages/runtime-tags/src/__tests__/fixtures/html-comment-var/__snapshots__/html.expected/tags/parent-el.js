import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/parent-el.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const ref = _$.nodeRef();
  let tagName = undefined;
  _$.write(`<!--Body Text-->${_$.markResumeNode($scope0_id, "#comment/0")}`);
  const $return = tagName;
  _$.writeEffect($scope0_id, "__tests__/tags/parent-el.marko_0");
  _$.writeScope($scope0_id, {}, "__tests__/tags/parent-el.marko", 0);
  _$.resumeClosestBranch($scope0_id);
  return $return;
});