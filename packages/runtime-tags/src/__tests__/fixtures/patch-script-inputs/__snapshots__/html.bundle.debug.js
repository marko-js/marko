// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;E ;<main><h1> </h1></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_a = _filled_guard($scope0_reason, 2), $fg__input_b = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_mark($scope0_id, "#text/0", input.title, 1, $scope0_reason, 1)}</h1></main>`);
	_script($scope0_id, "__tests__/template.marko_0_input_a#4_input_b#5", 1, ($fg__input_a || $fg__input_b) && (_client_guard($scope0_reason, 2) || _client_guard($scope0_reason, 3) ? 2 : 1), (($fg__input_a ? " input_a" : "") + ($fg__input_b ? " input_b" : "")).slice(1), "__tests__/template.marko_0_input_a#4_input_b#5/setup", $scope0_reason, 0);
	_scope($scope0_id, {
		input_a: input.a,
		input_b: input.b
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	}) || ($fg__input_a && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 2)), $fg__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 3)));
}, 1);
