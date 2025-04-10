import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let show = true;
  let message = "hi";
  _$.write(`<button></button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.resumeSingleNodeConditional(() => {
    if (show) {
      const $scope1_id = _$.nextScopeId();
      _$.write(`<span>${_$.escapeXML(message)}${_$.markResumeNode($scope1_id, "#text/0")}</span>`);
      _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "4:2");
      return 0;
    }
  }, $scope0_id, "#text/1", 1, 1);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_show");
  _$.writeScope($scope0_id, {
    show,
    message
  }, "__tests__/template.marko", 0, {
    show: "1:6",
    message: "2:6"
  });
  _$.resumeClosestBranch($scope0_id);
});