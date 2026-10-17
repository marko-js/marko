// template.marko
const $template = "<button> </button><div></div>";
const $walks = " D l b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l ;<button> </button><div></div>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n + input.label)}</button>${_el_resume($scope0_id, "#button/0")}<div></div>${_el_resume($scope0_id, "#div/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_label#5_input_other#6", 1, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_server_guard($scope0_reason, 2) && _patch_effect($scope0_id, "PatchEffect:__tests__/template.marko_0_input_label#5_input_other#6", "input_other");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", n, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		input_other: input.other,
		n
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_other: ["input.other"],
		n: "1:6"
	}) : (_filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchWrite:input_other", input.other, !_server_guard($scope0_reason, 2)));
}, 1);
