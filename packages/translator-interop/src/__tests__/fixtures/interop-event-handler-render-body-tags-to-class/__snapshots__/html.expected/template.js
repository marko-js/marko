import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import * as _$ from "@marko/runtime-tags/debug/html";
import _myButton from "./components/my-button.marko";
_s(_myButton, "__tests__/components/my-button.marko");
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $count_closures = new Set();
  let count = 0;
  _$.dynamicTag($scope0_id, "#text/0", _myButton, {
    onClick: _$.register(function () {
      count++;
    }, "__tests__/template.marko_0/onClick", $scope0_id)
  }, _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(count)}${_$.markResumeNode($scope1_id, "#text/0")}`);
    _$.writeSubscribe($count_closures, _$.writeScope($scope1_id, {
      _: _$.ensureScopeWithId($scope0_id),
      "ClosureSignalIndex:count": 0
    }, "__tests__/template.marko", "2:2"));
    _$.resumeClosestBranch($scope1_id);
  }, $scope0_id));
  _$.writeScope($scope0_id, {
    count,
    "ClosureScopes:count": $count_closures
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});