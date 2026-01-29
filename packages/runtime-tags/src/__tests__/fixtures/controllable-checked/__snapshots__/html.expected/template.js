import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let checked = false;
  _._html(`<input${_._attr_input_checked($scope0_id, "#input/0", checked, _._resume(_new_checked => {
    checked = _new_checked;
  }, "__tests__/template.marko_0/checkedChange", $scope0_id))} type=checkbox>${_._el_resume($scope0_id, "#input/0")}<span>${_._escape(String(checked))}${_._el_resume($scope0_id, "#text/1")}</span>`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    checked
  }, "__tests__/template.marko", 0, {
    checked: "1:6"
  });
  _._resume_branch($scope0_id);
});