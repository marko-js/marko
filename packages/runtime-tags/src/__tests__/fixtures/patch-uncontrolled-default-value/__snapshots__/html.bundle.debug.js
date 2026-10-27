// template.marko
const $template = "<input><textarea></textarea><input type=checkbox>";
const $walks = " b b b";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko; b b ;<input><textarea></textarea><input type=checkbox>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_patch_input_value($scope0_id, "#input/0", input.name, void 0, "PatchControl:2#input/0", $scope0_reason, 0)}>${_el_resume($scope0_id, "#input/0", _mask_group($scope0_reason, 0))}<textarea>${_patch_textarea_value($scope0_id, "#textarea/1", input.name, void 0, "PatchControl:2#textarea/1", $scope0_reason, 0)}</textarea>${_el_resume($scope0_id, "#textarea/1", _mask_group($scope0_reason, 0))}<input${_patch_input_checked($scope0_id, "#input/2", input.on, void 0, "PatchControl:0#input/2", $scope0_reason, 1)} type=checkbox>${_el_resume($scope0_id, "#input/2", _mask_group($scope0_reason, 1))}`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
