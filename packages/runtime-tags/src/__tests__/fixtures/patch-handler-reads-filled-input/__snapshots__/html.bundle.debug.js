// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D ;<button> </button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", n + input.label)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_label#4_n#5/setup", $fg__input_label && "input_label");
	_scope($scope0_id, {
		input_label: input.label,
		n
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "1:6"
	}) || $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
}, 1);
