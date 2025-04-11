import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let z = {
    x: 1,
    y: 2
  };
  const {
    x,
    y
  } = z;
  _$.write(`<div>${_$.escapeXML(x)}${_$.markResumeNode($scope0_id, "#text/0")}</div>${_$.escapeXML(y)}${_$.markResumeNode($scope0_id, "#text/1")}`);
  _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
  _$.resumeClosestBranch($scope0_id);
});