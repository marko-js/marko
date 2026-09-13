// template.marko
const $template = "<input><textarea></textarea><input type=checkbox>";
const $walks = " b b b";
_shells({ "__tests__/template.marko": "__tests__/template.marko; b b ;<input><textarea></textarea><input type=checkbox>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "#input/0", input.name)}${_patch_control($scope0_id, "#input/0", 2, input.name, $scope0_reason, 0)}>${_el_resume($scope0_id, "#input/0")}<textarea${_patch_control($scope0_id, "#textarea/1", 2, input.name, $scope0_reason, 0)}>${_textarea_value(input.name)}</textarea>${_el_resume($scope0_id, "#textarea/1")}<input${_attr_input_checked($scope0_id, "#input/2", input.on)}${_patch_control($scope0_id, "#input/2", 0, input.on, $scope0_reason, 1)} type=checkbox>${_el_resume($scope0_id, "#input/2")}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
