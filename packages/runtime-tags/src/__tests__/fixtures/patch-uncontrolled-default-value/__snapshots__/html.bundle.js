// template.marko
_shells({ a: "a; b b ;<input><textarea></textarea><input type=checkbox>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_patch_input_value($scope0_id, "a", input.name, void 0, "n2a", $scope0_reason, 0)}>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<textarea>${_patch_textarea_value($scope0_id, "b", input.name, void 0, "n2b", $scope0_reason, 0)}</textarea>${_el_resume($scope0_id, "b", _mask_group($scope0_reason, 0))}<input${_patch_input_checked($scope0_id, "c", input.on, void 0, "n0c", $scope0_reason, 1)} type=checkbox>${_el_resume($scope0_id, "c", _mask_group($scope0_reason, 1))}`);
	_scope($scope0_id, {});
}, 1);
