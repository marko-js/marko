import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let show = false;
  _$.write(`<button></button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.resumeConditional(() => {
    if (show) {
      const $scope1_id = _$.nextScopeId();
      _$.write("hi");
      _$.writeScope($scope1_id, {}, "__tests__/template.marko", "3:2");
      return 0;
    }
  }, $scope0_id, "#text/1");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_show");
  _$.writeScope($scope0_id, {
    show
  }, "__tests__/template.marko", 0, {
    show: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});