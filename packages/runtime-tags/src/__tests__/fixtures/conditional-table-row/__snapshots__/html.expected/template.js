import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let show = false;
  _$.write("<table><tbody>");
  _$.resumeSingleNodeConditional(() => {
    if (show) {
      const $scope1_id = _$.nextScopeId();
      _$.write("<tr><td>Hi</td></tr>");
      _$.writeScope($scope1_id, {}, "__tests__/template.marko", "4:6");
      return 0;
    }
  }, $scope0_id, "#tbody/0", 1, /* state: show */1, 1);
  _$.write(`</tbody></table><button>Toggle</button>${_$.markResumeNode($scope0_id, "#button/1")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_show");
  _$.writeScope($scope0_id, {
    show
  }, "__tests__/template.marko", 0, {
    show: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});