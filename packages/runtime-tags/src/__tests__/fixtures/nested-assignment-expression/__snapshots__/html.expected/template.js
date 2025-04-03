import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let clickCount = 0;
  let lastCount = 0;
  let lastCount2 = 0;
  _$.write(`<button>${_$.escapeXML(clickCount)}${_$.markResumeNode($scope0_id, "#text/1")}</button>${_$.markResumeNode($scope0_id, "#button/0")}used to be <span>${_$.escapeXML(lastCount)}${_$.markResumeNode($scope0_id, "#text/2")}</span> which should be the same as <span>${_$.escapeXML(lastCount2)}${_$.markResumeNode($scope0_id, "#text/3")}</span>`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_clickCount");
  _$.writeScope($scope0_id, {
    clickCount
  }, "__tests__/template.marko", 0, {
    clickCount: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});