import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = 1;
  _$.write(`<div>${_$.escapeXML(x)}${_$.markResumeNode($scope0_id, "#text/0")}</div>`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
  _$.resumeClosestBranch($scope0_id);
});