import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let disabled = true;
  _$.write(`<input${_$.attr("disabled", disabled)}>${_$.markResumeNode($scope0_id, "#input/0")}<button>${_$.escapeXML(disabled ? "enable" : "disable")}${_$.markResumeNode($scope0_id, "#text/2")}</button>${_$.markResumeNode($scope0_id, "#button/1")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_disabled");
  _$.writeScope($scope0_id, {
    disabled
  }, "__tests__/template.marko", 0, {
    disabled: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});