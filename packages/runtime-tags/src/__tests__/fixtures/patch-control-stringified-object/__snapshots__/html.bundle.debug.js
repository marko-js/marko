// template.marko
const $template = "<input>";
const $walks = " b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; ;<input>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_patch_input_value($scope0_id, "#input/0", input.value, _resume(function() {}, "__tests__/template.marko_0/valueChange"), "PatchControl:2#input/0", $scope0_reason, 0, "PatchWrite:ControlledHandler:#input/0", $scope0_reason, 0)}>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, { "ControlledHandler:#input/0": ["valueChange", "1:26"] });
}, 1);
