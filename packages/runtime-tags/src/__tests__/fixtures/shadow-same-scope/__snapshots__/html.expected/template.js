import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let count = 0;
  let $count = 0;
  let $count2 = 0;
  let $count3 = 0;
  _$.write(`<div><button>${_$.escapeXML(count)}${_$.markResumeNode($scope0_id, "#text/1")}</button>${_$.markResumeNode($scope0_id, "#button/0")}<div><button>${_$.escapeXML($count)}${_$.markResumeNode($scope0_id, "#text/3")}</button>${_$.markResumeNode($scope0_id, "#button/2")}<div><button>${_$.escapeXML($count2)}${_$.markResumeNode($scope0_id, "#text/5")}</button>${_$.markResumeNode($scope0_id, "#button/4")}</div></div></div><div><button>${_$.escapeXML($count3)}${_$.markResumeNode($scope0_id, "#text/7")}</button>${_$.markResumeNode($scope0_id, "#button/6")}</div>`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_$count3");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_$count2");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_$count");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope($scope0_id, {
    count,
    $count,
    $count2,
    $count3
  }, "__tests__/template.marko", 0, {
    count: "1:6",
    $count: "5:10",
    $count2: "8:12",
    $count3: "14:8"
  });
  _$.resumeClosestBranch($scope0_id);
});