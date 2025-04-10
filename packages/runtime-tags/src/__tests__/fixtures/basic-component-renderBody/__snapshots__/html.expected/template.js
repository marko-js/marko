import * as _$ from "@marko/runtime-tags/debug/html";
import _myButton from "./tags/my-button.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $clickCount_closures = new Set();
  let clickCount = 0;
  const $childScope = _$.peekNextScopeId();
  _myButton({
    onClick: _$.register(function () {
      clickCount++;
    }, "__tests__/template.marko_0/onClick", $scope0_id),
    content: _$.createContent("__tests__/template.marko_1_renderer", () => {
      const $scope1_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(clickCount)}${_$.markResumeNode($scope1_id, "#text/0")}`);
      _$.writeSubscribe($clickCount_closures, _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id),
        "ClosureSignalIndex:clickCount": 0
      }, "__tests__/template.marko", "2:2"));
      _$.resumeClosestBranch($scope1_id);
    })
  });
  _$.writeScope($scope0_id, {
    clickCount,
    "ClosureScopes:clickCount": $clickCount_closures,
    "#childScope/0": _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0, {
    clickCount: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});