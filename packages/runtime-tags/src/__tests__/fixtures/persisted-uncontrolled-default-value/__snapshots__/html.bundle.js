// template.marko
_shells({ a: "a; b b ;<input><textarea></textarea><input type=checkbox>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "a", input.name)}${_patch_control($scope0_id, "a", 2, input.name, $scope0_reason, 0)}>${_el_resume($scope0_id, "a")}<textarea${_patch_control($scope0_id, "b", 2, input.name, $scope0_reason, 0)}>${_textarea_value(input.name)}</textarea>${_el_resume($scope0_id, "b")}<input${_attr_input_checked($scope0_id, "c", input.on)}${_patch_control($scope0_id, "c", 0, input.on, $scope0_reason, 1)} type=checkbox>${_el_resume($scope0_id, "c")}`);
	$scope0_page && _scope($scope0_id, {});
}, 1, 0);
