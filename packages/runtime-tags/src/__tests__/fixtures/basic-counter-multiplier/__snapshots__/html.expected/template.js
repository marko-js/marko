import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let count = 0;
  let multiplier = 1;
  const multipliedCount = count * multiplier;
  _$.write(`<button id=multiplier>increase multiplier (<!>${_$.escapeXML(multiplier)}${_$.markResumeNode($scope0_id, "#text/1")})</button>${_$.markResumeNode($scope0_id, "#button/0")}<button id=count>increase count</button>${_$.markResumeNode($scope0_id, "#button/2")}<div>${_$.escapeXML(multipliedCount)}${_$.markResumeNode($scope0_id, "#text/3")}</div>`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_count");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_multiplier");
  _$.writeScope($scope0_id, {
    count,
    multiplier
  }, "__tests__/template.marko", 0, {
    count: "1:6",
    multiplier: "2:6"
  });
  _$.resumeClosestBranch($scope0_id);
});