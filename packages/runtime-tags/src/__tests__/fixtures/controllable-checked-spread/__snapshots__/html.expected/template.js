import _checkbox from "./tags/checkbox.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let checked = false;
  const $childScope = _._peek_scope_id();
  _checkbox({
    checked: checked,
    checkedChange: _._resume(_new_checked => {
      checked = _new_checked;
    }, "__tests__/template.marko_0/checkedChange", $scope0_id)
  });
  _._html(`<span>${_._escape(String(checked))}${_._el_resume($scope0_id, "#text/1")}</span>`);
  _._scope($scope0_id, {
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});