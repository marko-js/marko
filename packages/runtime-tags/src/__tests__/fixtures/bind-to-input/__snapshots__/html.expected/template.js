import * as _$ from "@marko/runtime-tags/debug/html";
import _counter from "./tags/counter.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $x_closures = new Set();
  let x = 0;
  const $childScope = _$.peekNextScopeId();
  _counter({
    count: x,
    countChange: _$.register(_new_x => {
      x = _new_x;
    }, "__tests__/template.marko_0/countChange", $scope0_id),
    id: "controlled",
    content: _$.createContent("__tests__/template.marko_1_renderer", () => {
      const $scope1_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(x)}${_$.markResumeNode($scope1_id, "#text/0")}`);
      _$.writeSubscribe($x_closures, _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id),
        "ClosureSignalIndex:x": 0
      }, "__tests__/template.marko", "3:2"));
      _$.resumeClosestBranch($scope1_id);
    })
  }, {
    /* input.count */2: 1
  });
  const $childScope2 = _$.peekNextScopeId();
  _counter({
    count: x,
    id: "uncontrolled",
    content: _$.createContent("__tests__/template.marko_2_renderer", () => {
      const $scope2_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(x)}${_$.markResumeNode($scope2_id, "#text/0")}`);
      _$.writeSubscribe($x_closures, _$.writeScope($scope2_id, {
        _: _$.ensureScopeWithId($scope0_id),
        "ClosureSignalIndex:x": 1
      }, "__tests__/template.marko", "4:2"));
      _$.resumeClosestBranch($scope2_id);
    })
  }, {
    /* input.count */2: 1
  });
  _$.writeScope($scope0_id, {
    "ClosureScopes:x": $x_closures,
    "#childScope/0": _$.writeExistingScope($childScope),
    "#childScope/1": _$.writeExistingScope($childScope2)
  }, "__tests__/template.marko", 0);
  _$.resumeClosestBranch($scope0_id);
});