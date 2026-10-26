// template.marko
const $template = "<input><p> </p>";
const $walks = " bD l";
const $setup = [[], ["__tests__/template.marko_0_input_attrs#4", "__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_input_attrs#4 __tests__/template.marko_0; bD ;<input><p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let value = "a";
	_html(`<input${_patch_input_value($scope0_id, "#input/0", value, _resume(function(v) {
		value = v;
	}, "__tests__/template.marko_0/valueChange", $scope0_id), void 0, void 0, void 0, "PatchWrite:ControlledHandler:#input/0")}${_patch_attrs_partial(input.attrs, {
		value: 1,
		valueChange: 1
	}, "#input/0", $scope0_id, "input", void 0, $scope0_reason, 0)}>${_el_resume($scope0_id, "#input/0")}<p>${_text_resume($scope0_id, "#text/1", value)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#4");
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0, { "ControlledHandler:#input/0": ["valueChange", "2:35"] });
}, 1);
