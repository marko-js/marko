import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $count_closures = new Set();
  let count = 0;
  _child({
    content: _$.createContent("__tests__/template.marko_1_renderer", () => {
      const $scope1_id = _$.nextScopeId();
      _$.write(`<button>${_$.escapeXML(count)}${_$.markResumeNode($scope1_id, "#text/1")}</button>${_$.markResumeNode($scope1_id, "#button/0")}`);
      _$.writeEffect($scope1_id, "__tests__/template.marko_1_count");
      _$.writeSubscribe($count_closures, _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id),
        "ClosureSignalIndex:count": 0
      }, "__tests__/template.marko", "2:2"));
      _$.resumeClosestBranch($scope1_id);
    })
  });
  _$.writeScope($scope0_id, {
    count,
    "ClosureScopes:count": $count_closures
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});