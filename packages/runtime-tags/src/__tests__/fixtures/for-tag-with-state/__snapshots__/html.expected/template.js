import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const arrA = [1, 2, 3];
  _$.forOf(arrA, (val, i) => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`<div>${_$.escapeXML(i)}: ${_$.escapeXML(val)}</div>`);
  });
  let arrB = [1, 2, 3];
  _$.resumeSingleNodeForOf(arrB, (val, i) => {
    const $scope2_id = _$.nextScopeId();
    _$.write(`<div>${_$.escapeXML(i)}${_$.markResumeNode($scope2_id, "#text/0")}: <!>${_$.escapeXML(val)}${_$.markResumeNode($scope2_id, "#text/1")}</div>`);
    _$.writeScope($scope2_id, {}, "__tests__/template.marko", "9:2");
  }, 0, $scope0_id, "#text/1", 1);
  _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
  _$.resumeClosestBranch($scope0_id);
});