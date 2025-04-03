import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let checked = false;
  _$.write(`<input${_$.controllable_input_checked($scope0_id, "#input/0", checked, _$.register(_new_checked => {
    checked = _new_checked;
  }, "__tests__/template.marko_0/checkedChange", $scope0_id))} type=checkbox>${_$.markResumeNode($scope0_id, "#input/0")}<span>${_$.escapeXML(String(checked))}${_$.markResumeNode($scope0_id, "#text/1")}</span>`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {
    checked
  }, "__tests__/template.marko", 0, {
    checked: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});