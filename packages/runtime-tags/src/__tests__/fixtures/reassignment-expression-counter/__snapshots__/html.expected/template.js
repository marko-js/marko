import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let count = 0;
  _$.write(`<button id=addTwo>${_$.escapeXML(count)}${_$.markResumeNode($scope0_id, "#text/1")}</button>${_$.markResumeNode($scope0_id, "#button/0")}<button id=triple>${_$.escapeXML(count)}${_$.markResumeNode($scope0_id, "#text/3")}</button>${_$.markResumeNode($scope0_id, "#button/2")}<button id=cube>${_$.escapeXML(count)}${_$.markResumeNode($scope0_id, "#text/5")}</button>${_$.markResumeNode($scope0_id, "#button/4")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope($scope0_id, {
    count
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});