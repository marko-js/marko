import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let value = "a";
  _._html(`<textarea>${_._escape_text("a")}</textarea><textarea>${_._escape_text("a")}</textarea><textarea>${_._escape_text(value)}</textarea>${_._el_resume($scope0_id, "#textarea/2")}<textarea>${_._escape_text(value)}</textarea>${_._el_resume($scope0_id, "#textarea/3")}<textarea>${_._attr_textarea_value($scope0_id, "#textarea/4", value, undefined)}</textarea>${_._el_resume($scope0_id, "#textarea/4")}<textarea>${_._attr_textarea_value($scope0_id, "#textarea/5", value, undefined)}</textarea>${_._el_resume($scope0_id, "#textarea/5")}<button>Update</button>${_._el_resume($scope0_id, "#button/6")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
}, 1);