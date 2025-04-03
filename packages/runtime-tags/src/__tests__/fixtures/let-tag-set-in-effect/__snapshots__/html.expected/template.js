import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = 1;
  let y = 0;
  _$.write(`<span>${_$.escapeXML(x)}${_$.markResumeNode($scope0_id, "#text/0")}</span><span>${_$.escapeXML(y)}${_$.markResumeNode($scope0_id, "#text/1")}</span>`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope($scope0_id, {
    x
  }, "__tests__/template.marko", 0, {
    x: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});