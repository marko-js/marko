import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $count_closures = new Set();
  let count = 0;
  _$.write("<div>");
  _$.fork($scope0_id, "#text/0", Promise.resolve("a"), value => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`Got: ${_$.escapeXML(value)} <!>${_$.escapeXML(count)}${_$.markResumeNode($scope1_id, "#text/1")}`);
    _$.writeSubscribe($count_closures, _$.writeScope($scope1_id, {
      _: _$.ensureScopeWithId($scope0_id),
      "ClosureSignalIndex:count": 0
    }, "__tests__/template.marko", "5:4"));
    _$.resumeClosestBranch($scope1_id);
  });
  _$.fork($scope0_id, "#text/1", resolveAfter("b", 2), value => {
    const $scope2_id = _$.nextScopeId();
    _$.write(`Got: ${_$.escapeXML(value)} <!>${_$.escapeXML(count)}${_$.markResumeNode($scope2_id, "#text/1")}`);
    _$.writeSubscribe($count_closures, _$.writeScope($scope2_id, {
      _: _$.ensureScopeWithId($scope0_id),
      "ClosureSignalIndex:count": 1
    }, "__tests__/template.marko", "9:4"));
    _$.resumeClosestBranch($scope2_id);
  });
  _$.fork($scope0_id, "#text/2", resolveAfter("c", 1), value => {
    const $scope3_id = _$.nextScopeId();
    _$.write(`Got: ${_$.escapeXML(value)} <!>${_$.escapeXML(count)}${_$.markResumeNode($scope3_id, "#text/1")}`);
    _$.writeSubscribe($count_closures, _$.writeScope($scope3_id, {
      _: _$.ensureScopeWithId($scope0_id),
      "ClosureSignalIndex:count": 2
    }, "__tests__/template.marko", "13:4"));
    _$.resumeClosestBranch($scope3_id);
  });
  _$.write(`<button>Inc</button>${_$.markResumeNode($scope0_id, "#button/3")}</div>`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope($scope0_id, {
    count,
    "ClosureScopes:count": $count_closures
  }, "__tests__/template.marko", 0, {
    count: "3:6"
  });
  _$.resumeClosestBranch($scope0_id);
});