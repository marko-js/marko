import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let clickCount = 0;
  const increment = _$.register(function () {
    clickCount++;
  }, "__tests__/template.marko_0/increment", $scope0_id);
  _$.write(`<button>${_$.escapeXML(clickCount)}${_$.markResumeNode($scope0_id, "#text/1")}</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_increment");
  _$.writeScope($scope0_id, {
    clickCount,
    increment
  }, "__tests__/template.marko", 0, {
    clickCount: "1:6",
    increment: "2:8"
  });
  _$.resumeClosestBranch($scope0_id);
});