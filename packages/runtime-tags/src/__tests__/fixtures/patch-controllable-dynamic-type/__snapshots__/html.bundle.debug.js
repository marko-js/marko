// template.marko
const $template = "<input>";
const $walks = " b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; ;<input>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<input${_patch_input_value($scope0_id, "#input/0", input.value, _resume(function(next) {}, "__tests__/template.marko_0/valueChange"), "PatchControl:2#input/0", $scope0_reason, 1, "PatchBind:ControlledHandler:#input/0", $scope0_reason, 1)}${_patch_attr($scope0_id, "PatchAttr:#input/0 type", "type", input.kind, $scope0_reason, 0)}>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0, { "ControlledHandler:#input/0": ["valueChange", "1:42"] });
}, 1);
