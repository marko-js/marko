import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $y_closures = new Set();
  let x = 1;
  let y = 2;
  _$.write(`<button>Inc</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  const $childScope2 = _$.peekNextScopeId();
  _child({
    value: x,
    content: _$.registerContent("__tests__/template.marko_1_renderer", outer => {
      const $scope1_id = _$.nextScopeId();
      const $outer$child$content_closures = new Set();
      const $childScope = _$.peekNextScopeId();
      _child({
        value: y,
        content: _$.registerContent("__tests__/template.marko_2_renderer", inner => {
          const $scope2_id = _$.nextScopeId();
          _$.write(`<div>${_$.escapeXML(outer)}${_$.markResumeNode($scope2_id, "#text/0")}.<!>${_$.escapeXML(inner)}${_$.markResumeNode($scope2_id, "#text/1")}</div>`);
          _$.writeSubscribe($outer$child$content_closures, _$.writeScope($scope2_id, {
            _: _$.ensureScopeWithId($scope1_id),
            "ClosureSignalIndex:outer": 0
          }, "__tests__/template.marko", "7:6"));
          _$.resumeClosestBranch($scope2_id);
        }, $scope1_id)
      }, {
        0: 1,
        2: 1
      });
      _$.writeSubscribe($y_closures, _$.writeScope($scope1_id, {
        outer,
        _: _$.ensureScopeWithId($scope0_id),
        "ClosureScopes:outer": $outer$child$content_closures,
        "#childScope/0": _$.writeExistingScope($childScope),
        "ClosureSignalIndex:y": 0
      }, "__tests__/template.marko", "6:2", {
        outer: "6:8"
      }));
      _$.resumeClosestBranch($scope1_id);
    }, $scope0_id)
  }, {
    0: 1,
    2: 1
  });
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope($scope0_id, {
    x,
    y,
    "ClosureScopes:y": $y_closures,
    "#childScope/1": _$.writeExistingScope($childScope2)
  }, "__tests__/template.marko", 0, {
    x: "1:6",
    y: "2:6"
  });
  _$.resumeClosestBranch($scope0_id);
});