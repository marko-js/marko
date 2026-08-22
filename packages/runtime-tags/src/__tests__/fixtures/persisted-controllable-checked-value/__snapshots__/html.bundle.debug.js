// template.marko
const $template = "<fieldset><input type=radio class=a><input type=radio class=b></fieldset><p> </p>";
const $walks = "D b lD l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b lD ;<fieldset><input type=radio class=a><input type=radio class=b></fieldset><p> </p>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let note = "";
	_html(`<fieldset><input${_attr_input_checkedValue($scope0_id, "#input/0", input.picked, _resume(function(next) {
		note = next;
	}, "__tests__/template.marko_0/checkedValueChange", $scope0_id), "a")}${_patch_bind($scope0_id, "ControlledHandler:#input/0", _resume(function(next) {
		note = next;
	}, "__tests__/template.marko_0/checkedValueChange", $scope0_id))}${_patch_control($scope0_id, "#input/0", 1, [input.picked, "a"], $scope0_owned, 0)} type=radio class=a>${_el_resume($scope0_id, "#input/0")}<input${_attr_input_checkedValue($scope0_id, "#input/1", input.picked, _resume(function(next) {
		note = next;
	}, "__tests__/template.marko_0/checkedValueChange2", $scope0_id), "b")}${_patch_bind($scope0_id, "ControlledHandler:#input/1", _resume(function(next) {
		note = next;
	}, "__tests__/template.marko_0/checkedValueChange2", $scope0_id))}${_patch_control($scope0_id, "#input/1", 1, [input.picked, "b"], $scope0_owned, 0)} type=radio class=b>${_el_resume($scope0_id, "#input/1")}</fieldset><p>${_escape(note)}${_el_resume($scope0_id, "#text/2")}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0, {
		"ControlledHandler:#input/0": ["checkedValueChange", "3:51"],
		"ControlledHandler:#input/1": ["checkedValueChange", "4:51"]
	});
	_resume_branch($scope0_id);
}, 1, 0);
