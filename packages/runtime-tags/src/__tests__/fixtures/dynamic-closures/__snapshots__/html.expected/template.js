const a = 1;
import * as _$ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $c_closures = new Set();
  const b = 2;
  let c = 3;
  _$.write(`<button></button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _customTag({
    content: _$.createContent("__tests__/template.marko_1_renderer", () => {
      const $scope1_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(a)} ${_$.escapeXML(b)} <!>${_$.escapeXML(c)}${_$.markResumeNode($scope1_id, "#text/2")}`);
      _$.writeSubscribe($c_closures, _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id),
        "ClosureSignalIndex:c": 0
      }, "__tests__/template.marko", "6:2"));
      _$.resumeClosestBranch($scope1_id);
    })
  });
  _$.write("<div>");
  if (Math.random()) {
    const $scope2_id = _$.nextScopeId();
    if (Math.random()) {
      const $scope3_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(a)} ${_$.escapeXML(b)} <!>${_$.escapeXML(c)}${_$.markResumeNode($scope3_id, "#text/2")}`);
      _$.writeSubscribe($c_closures, _$.writeScope($scope3_id, {
        _: _$.ensureScopeWithId($scope2_id),
        "ClosureSignalIndex:c": 1
      }, "__tests__/template.marko", "11:6"));
    }
    _$.writeScope($scope2_id, {
      _: _$.ensureScopeWithId($scope0_id)
    }, "__tests__/template.marko", "10:4");
  }
  _$.write("</div>");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {
    b,
    c,
    "ClosureScopes:c": $c_closures
  }, "__tests__/template.marko", 0, {
    b: "2:7",
    c: "3:5"
  });
  _$.resumeClosestBranch($scope0_id);
});