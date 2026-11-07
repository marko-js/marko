// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D ;<button> </button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0), $fg__input_other = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	const x = n + input.label;
	_html(`<button>${_text_mark($scope0_id, "#text/1", x)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_label#4_n#6/setup", $fg__input_label && "input_label");
	_script($scope0_id, "__tests__/template.marko_0_input_other#5_x#8", 1, 0, [
		$fg__input_other && "input_other",
		"x",
		$fg__input_label && "input_label"
	], "__tests__/template.marko_0_input_other#5_x#8/setup");
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
	}) || ($fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0)), $fg__input_other && _patch_write($scope0_id, "PatchMarkedWrite:input_other", input.other, !_server_guard($scope0_reason, 1)));
}, 1);
