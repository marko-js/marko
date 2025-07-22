let sideEffect = 3;
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $count_closures = new Set();
  let count = 0;
  const MyThing = {
    content: _$.registerContent("__tests__/template.marko_1_renderer", () => {
      const $scope1_id = _$.nextScopeId();
      debugger;
      _$.write(`${_$.escapeXML(count)}${_$.markResumeNode($scope1_id, "#text/0")} ${_$.escapeXML(sideEffect++)}`);
      _$.writeSubscribe($count_closures, _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id),
        "ClosureSignalIndex:count": 0
      }, "__tests__/template.marko", "5:1"));
      _$.resumeClosestBranch($scope1_id);
    }, $scope0_id)
  };
  _$.write("<button>");
  _$.writeContent("#button/0", $scope0_id, (count, MyThing));
  _$.write(`</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope($scope0_id, {
    count,
    MyThing,
    "ClosureScopes:count": $count_closures
  }, "__tests__/template.marko", 0, {
    count: "3:5",
    MyThing: "5:8"
  });
  _$.resumeClosestBranch($scope0_id);
});