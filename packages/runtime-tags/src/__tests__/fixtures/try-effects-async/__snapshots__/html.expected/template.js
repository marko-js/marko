import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $clickCount_closures = new Set();
  let clickCount = 0;
  const el = _$.nodeRef();
  _$.write(`<button>inc</button>${_$.markResumeNode($scope0_id, "#button/0")}<div></div>${_$.markResumeNode($scope0_id, "#div/1")}`);
  _$.tryContent($scope0_id, "#text/2", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _$.fork($scope1_id, "#text/0", resolveAfter(clickCount, 1), value => {
      const $scope4_id = _$.nextScopeId();
      _$.write(`Async: <!>${_$.escapeXML(value > 1 ? (() => {
        throw new Error("ERROR!");
      })() : value)}${_$.markResumeNode($scope4_id, "#text/0")}`);
      _$.writeScope($scope4_id, {}, "__tests__/template.marko", "11:4");
    });
    _$.writeEffect($scope1_id, "__tests__/template.marko_1_clickCount");
    _$.writeSubscribe($clickCount_closures, _$.writeScope($scope1_id, {
      _: _$.ensureScopeWithId($scope0_id),
      "ClosureSignalIndex:clickCount": 0
    }, "__tests__/template.marko", "7:2"));
    _$.resumeClosestBranch($scope1_id);
  }, $scope0_id), {
    catch: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_3_renderer", err => {
        const $scope3_id = _$.nextScopeId();
        _$.write(`${_$.escapeXML(err)}${_$.markResumeNode($scope3_id, "#text/0")}`);
        _$.writeScope($scope3_id, {}, "__tests__/template.marko", "17:4");
      }, $scope0_id)
    }),
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