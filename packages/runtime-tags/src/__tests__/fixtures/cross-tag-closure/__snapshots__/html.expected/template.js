import _myLet from "./tags/my-let.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
import _myTag from "./tags/my-tag.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $count_closures = new Set();
  const $childScope = _$.peekNextScopeId();
  let count = _myLet({
    value: 0
  });
  _$.setTagVar($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_count/var");
  _myTag({
    content: _$.createContent("__tests__/template.marko_1_renderer", () => {
      const $scope1_id = _$.nextScopeId();
      _$.write(`<button>${_$.escapeXML(count)}${_$.markResumeNode($scope1_id, "#text/1")}</button>${_$.markResumeNode($scope1_id, "#button/0")}`);
      _$.writeEffect($scope1_id, "__tests__/template.marko_1_count");
      _$.writeSubscribe($count_closures, _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id),
        "ClosureSignalIndex:count": 0
      }, "__tests__/template.marko", "2:1"));
      _$.resumeClosestBranch($scope1_id);
    })
  });
  _$.writeScope($scope0_id, {
    count,
    "#childScope/0": _$.writeExistingScope($childScope),
    "ClosureScopes:count": $count_closures
  }, "__tests__/template.marko", 0, {
    count: "1:8"
  });
});