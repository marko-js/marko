import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = undefined;
  _$.write(`<div>${_$.escapeXML(x)}${_$.markResumeNode($scope0_id, "#text/0")}</div>`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.resumeClosestBranch($scope0_id);
});