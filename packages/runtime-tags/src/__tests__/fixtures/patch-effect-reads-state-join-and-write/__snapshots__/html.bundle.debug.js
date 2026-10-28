// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D ;<button> </button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_other = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	const x = n + input.label;
	_html(`<button>${_text_resume($scope0_id, "#text/1", x)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_other#5_x#8", 1, $sg__input_other && 2, "input_other");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		input_other: input.other,
		n,
		x
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_other: ["input.other"],
		n: "1:6",
		x: "2:8"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_other", input.other, !$sg__input_other));
}, 1);
