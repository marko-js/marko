import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let count = 0;
  _$.write(`= <!>${_$.escapeXML(count)}${_$.markResumeNode($scope0_id, "#text/0")}<button>Inc</button>${_$.markResumeNode($scope0_id, "#button/1")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope($scope0_id, {
    count
  }, "__tests__/template.marko", 0, {
    count: "1:5"
  });
  _$.resumeClosestBranch($scope0_id);
});