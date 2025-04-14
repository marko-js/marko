import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let show = true;
  let count = 0;
  _$.write(`<button class=inc></button>${_$.markResumeNode($scope0_id, "#button/0")}<button class=toggle></button>${_$.markResumeNode($scope0_id, "#button/1")}`);
  _$.resumeSingleNodeConditional(() => {
    if (show) {
      const $scope1_id = _$.nextScopeId();
      _$.write(`<span>${_$.escapeXML(count)}${_$.markResumeNode($scope1_id, "#text/0")}</span>`);
      _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "5:2");
      return 0;
    }
  }, $scope0_id, "#text/2");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_show");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope($scope0_id, {
    show,
    count
  }, "__tests__/template.marko", 0, {
    show: "1:6",
    count: "2:6"
  });
  _$.resumeClosestBranch($scope0_id);
});