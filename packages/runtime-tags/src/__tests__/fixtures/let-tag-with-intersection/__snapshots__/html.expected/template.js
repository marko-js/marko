import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = 1;
  const y = x + 1;
  const z = x + 2;
  const a = y + z;
  _$.write(`<button>${_$.escapeXML(x)}${_$.markResumeNode($scope0_id, "#text/1")}</button>${_$.markResumeNode($scope0_id, "#button/0")}${_$.escapeXML(y)}${_$.markResumeNode($scope0_id, "#text/2")} <!>${_$.escapeXML(z)}${_$.markResumeNode($scope0_id, "#text/3")} <!>${_$.escapeXML(a)}${_$.markResumeNode($scope0_id, "#text/4")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope($scope0_id, {
    x
  }, "__tests__/template.marko", 0, {
    x: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});