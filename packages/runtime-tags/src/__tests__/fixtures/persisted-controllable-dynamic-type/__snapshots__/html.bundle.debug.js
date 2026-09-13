// template.marko
const $template = "<input>";
const $walks = " b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; ;<input>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "#input/0", input.value, _resume(function(next) {}, "__tests__/template.marko_0/valueChange"))}${_patch_bind($scope0_id, "ControlledHandler:#input/0", _resume(function(next) {}, "__tests__/template.marko_0/valueChange"), 0, 0)}${_patch_control($scope0_id, "#input/0", 2, input.value, $scope0_owned, 1)}${_patch_attr($scope0_id, "#input/0", "type", input.kind, $scope0_owned, 0)}>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/template.marko", 0, { "ControlledHandler:#input/0": ["valueChange", "1:42"] });
}, 1, 0);
