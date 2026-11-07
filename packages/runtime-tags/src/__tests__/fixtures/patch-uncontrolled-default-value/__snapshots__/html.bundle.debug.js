// template.marko
const $template = "<input><textarea></textarea><input type=checkbox>";
const $walks = " b b b";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko; b b ;<input><textarea></textarea><input type=checkbox>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "#input/0", input.name, 0, 1, $scope0_reason, 0)}>${_el_mark($scope0_id, "#input/0", _updates_from($scope0_reason, 0))}<textarea>${_attr_textarea_value($scope0_id, "#textarea/1", input.name, 0, 1, $scope0_reason, 0)}</textarea>${_el_mark($scope0_id, "#textarea/1", _updates_from($scope0_reason, 0))}<input${_attr_input_checked($scope0_id, "#input/2", input.on, 0, 1, $scope0_reason, 1)} type=checkbox>${_el_mark($scope0_id, "#input/2", _updates_from($scope0_reason, 1))}`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
