import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let unused_1 = 123;
  const unused_2 = 456;
  let clickCount = 0;
  _$.write(`<div><button>${_$.escapeXML(clickCount)}${_$.markResumeNode($scope0_id, "#text/1")}</button>${_$.markResumeNode($scope0_id, "#button/0")}</div>`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_clickCount");
  _$.writeScope($scope0_id, {
    clickCount
  }, "__tests__/template.marko", 0, {
    clickCount: "4:8"
  });
  _$.resumeClosestBranch($scope0_id);
});