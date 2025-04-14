import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let show = true;
  _$.write("<div>");
  _$.resumeConditional(() => {
    if (show) {
      const $scope1_id = _$.nextScopeId();
      _$.write("Hello!");
      _$.writeScope($scope1_id, {}, "__tests__/template.marko", "3:4");
      return 0;
    }
  }, $scope0_id, "#text/0");
  _$.write(`<button>Toggle</button>${_$.markResumeNode($scope0_id, "#button/1")}</div>`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_show");
  _$.writeScope($scope0_id, {
    show
  }, "__tests__/template.marko", 0, {
    show: "2:8"
  });
  _$.resumeClosestBranch($scope0_id);
});