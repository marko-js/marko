// template.marko
const $template = "<button> </button><p></p>";
const $walks = " D l b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l ;<button> </button><p></p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", clicks)}</button>${_el_mark($scope0_id, "#button/0")}<p></p>${_el_mark($scope0_id, "#p/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_label#5", 1, $fg__input_label, "input_label");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		clicks
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		clicks: "1:6"
	}) || $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
}, 1);
