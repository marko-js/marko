// template.marko
const $template = "<p> </p><p> </p>";
const $walks = "D lD l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;D lD ;<p> </p><p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_b = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let x = input.a;
	_html(`<p>${_text_mark($scope0_id, "#text/0", x)}</p><p>${_text_mark($scope0_id, "#text/1", x + input.b)}</p>`);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_b#5_x#6/setup", $fg__input_b && "input_b");
	_scope($scope0_id, {
		input_b: input.b,
		x: _write_if($scope0_reason, 1) && x
	}, "__tests__/template.marko", 0, {
		input_b: ["input.b"],
		x: "1:6"
	}) || $fg__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 1));
}, 1);
