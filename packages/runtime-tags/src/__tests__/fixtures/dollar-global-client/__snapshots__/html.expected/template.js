import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let show = false;
  _$.write("<div>");
  _$.resumeSingleNodeConditional(() => {
    if (show) {
      const $scope1_id = _$.nextScopeId();
      _$.write(`<span>${_$.escapeXML(_$.$global().x)}</span>`);
      _$.writeScope($scope1_id, {}, "__tests__/template.marko", "3:4");
      return 0;
    }
  }, $scope0_id, "#text/0");
  _$.resumeSingleNodeConditional(() => {
    if (!show) {
      const $scope2_id = _$.nextScopeId();
      _$.write(`<span class=hidden>${_$.escapeXML(_$.$global().x)}</span>`);
      _$.writeScope($scope2_id, {}, "__tests__/template.marko", "7:4");
      return 0;
    }
  }, $scope0_id, "#text/1");
  _$.write(`<button>Toggle</button>${_$.markResumeNode($scope0_id, "#button/2")}</div>`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_show");
  _$.writeScope($scope0_id, {
    show
  }, "__tests__/template.marko", 0, {
    show: "2:8"
  });
  _$.resumeClosestBranch($scope0_id);
});