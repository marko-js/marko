import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let toggle = false;
  _$.write(`<html><body${_$.attr("data-toggle", toggle)}><button>Toggle</button>${_$.markResumeNode($scope0_id, "#button/1")}</body>${_$.markResumeNode($scope0_id, "#body/0")}`), _$.writeTrailers("</html>");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_toggle");
  _$.writeScope($scope0_id, {
    toggle
  }, "__tests__/template.marko", 0, {
    toggle: "1:5"
  });
  _$.resumeClosestBranch($scope0_id);
});