import Child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $count_closures = new Set();
  let count = 0;
  _$.dynamicTag($scope0_id, "#text/0", false || Child, {}, _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`<button>${_$.escapeXML(count)}${_$.markResumeNode($scope1_id, "#text/1")}</button>${_$.markResumeNode($scope1_id, "#button/0")}`);
    _$.writeEffect($scope1_id, "__tests__/template.marko_1_count");
    _$.writeSubscribe($count_closures, _$.writeScope($scope1_id, {
      _: _$.ensureScopeWithId($scope0_id),
      "ClosureSignalIndex:count": 0
    }, "__tests__/template.marko", "4:4"));
    _$.resumeClosestBranch($scope1_id);
  }, $scope0_id), 0, 0);
  _$.writeScope($scope0_id, {
    count,
    "ClosureScopes:count": $count_closures
  }, "__tests__/template.marko", 0, {
    count: "3:6"
  });
  _$.resumeClosestBranch($scope0_id);
});