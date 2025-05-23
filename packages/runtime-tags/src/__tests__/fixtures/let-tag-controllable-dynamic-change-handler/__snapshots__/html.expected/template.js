import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = 1;
  let yChange = _$.register(function (newValue) {
    x = newValue + 1;
  }, "__tests__/template.marko_0/yChange", $scope0_id);
  let y = x;
  _$.write(`<button id=inc>${_$.escapeXML(x)}${_$.markResumeNode($scope0_id, "#text/1")}|<!>${_$.escapeXML(y)}${_$.markResumeNode($scope0_id, "#text/2")}</button>${_$.markResumeNode($scope0_id, "#button/0")}<button id=toggle>toggle</button>${_$.markResumeNode($scope0_id, "#button/3")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_y");
  _$.writeScope($scope0_id, {
    x,
    yChange,
    y,
    "TagVariableChange:y": yChange
  }, "__tests__/template.marko", 0, {
    x: "1:6",
    yChange: "2:6",
    y: "3:6"
  });
  _$.resumeClosestBranch($scope0_id);
});