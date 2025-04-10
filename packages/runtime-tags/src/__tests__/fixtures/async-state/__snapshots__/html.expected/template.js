import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $clickCount_closures = new Set();
  let clickCount = 0;
  _$.write(`<button>inc</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.tryContent($scope0_id, "#text/1", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _$.fork($scope1_id, "#text/0", resolveAfter(clickCount, 1), value => {
      const $scope3_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(value)}${_$.markResumeNode($scope3_id, "#text/0")}`);
      _$.writeScope($scope3_id, {}, "__tests__/template.marko", "7:4");
    });
    _$.writeSubscribe($clickCount_closures, _$.writeScope($scope1_id, {
      _: _$.ensureScopeWithId($scope0_id),
      "ClosureSignalIndex:clickCount": 0
    }, "__tests__/template.marko", "6:2"));
    _$.resumeClosestBranch($scope1_id);
  }, $scope0_id), {
    placeholder: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_2_renderer", () => {
        const $scope2_id = _$.nextScopeId();
        _$.write("LOADING...");
      }, $scope0_id)
    })
  });
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_clickCount");
  _$.writeScope($scope0_id, {
    clickCount,
    "ClosureScopes:clickCount": $clickCount_closures
  }, "__tests__/template.marko", 0, {
    clickCount: "2:6"
  });
  _$.resumeClosestBranch($scope0_id);
});