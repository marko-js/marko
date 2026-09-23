// template.marko
const $template = "<input>";
const $walks = " b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_input_attrs#3 __tests__/template.marko_0; ;<input>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "#input/0", input.v, _resume(function(next) {
		document.body.dataset.v = next;
	}, "__tests__/template.marko_0/valueChange"))}${_patch_bind($scope0_id, "ControlledHandler:#input/0", _resume(function(next) {
		document.body.dataset.v = next;
	}, "__tests__/template.marko_0/valueChange"), 0, 0)}${_patch_control($scope0_id, "#input/0", 2, input.v, $scope0_reason, 1)}${_patch_attrs_partial(input.attrs, {
		value: 1,
		valueChange: 1
	}, "#input/0", $scope0_id, "input", void 0, $scope0_reason, 0)}>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#3");
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, { input_attrs: input.attrs }, "__tests__/template.marko", 0, {
		input_attrs: ["input.attrs"],
		"ControlledHandler:#input/0": ["valueChange", "1:37"]
	});
}, 1, 0);
