import _checkbox from "./tags/checkbox.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let checked = false;
  const $childScope = _$.peekNextScope();
  _checkbox({
    checked: checked,
    checkedChange: _$.register(_new_checked => {
      checked = _new_checked;
    }, "__tests__/template.marko_0/checkedChange", $scope0_id)
  });
  _$.write(`<span>${_$.escapeXML(String(checked))}${_$.markResumeNode($scope0_id, "#text/1")}</span>`);
  _$.writeScope($scope0_id, {
    "#childScope/0": _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0);
  _$.resumeClosestBranch($scope0_id);
});