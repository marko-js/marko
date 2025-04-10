import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = 1;
  const y = x * 2;
  const z = y * 3;
  _$.write(`<div>${_$.escapeXML(z)}${_$.markResumeNode($scope0_id, "#text/0")}</div>`);
  _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
  _$.resumeClosestBranch($scope0_id);
});