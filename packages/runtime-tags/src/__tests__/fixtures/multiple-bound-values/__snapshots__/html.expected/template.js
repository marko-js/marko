import _counters from "./tags/2counters.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let count1 = 0;
  let count2 = 0;
  const $childScope = _$.peekNextScopeId();
  _counters({
    count1: count1,
    count1Change: _$.register(_new_count1 => {
      count1 = _new_count1;
    }, "__tests__/template.marko_0/count1Change", $scope0_id),
    count2: count2,
    count2Change: _$.register(_new_count2 => {
      count2 = _new_count2;
    }, "__tests__/template.marko_0/count2Change", $scope0_id)
  }, {
    0: 1,
    2: 1
  });
  _$.write(`<div>${_$.escapeXML(count1)}${_$.markResumeNode($scope0_id, "#text/1")} <!>${_$.escapeXML(count2)}${_$.markResumeNode($scope0_id, "#text/2")}</div>`);
  _$.writeScope($scope0_id, {
    "#childScope/0": _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0);
  _$.resumeClosestBranch($scope0_id);
});