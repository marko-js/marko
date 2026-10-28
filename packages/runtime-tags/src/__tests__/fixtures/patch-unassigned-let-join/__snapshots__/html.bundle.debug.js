// template.marko
const $template = "<p> </p><p> </p>";
const $walks = "D lD l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;D lD ;<p> </p><p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = input.a;
	_html(`<p>${_text_resume($scope0_id, "#text/0", x)}</p><p>${_text_resume($scope0_id, "#text/1", x + input.b)}</p>`);
	_scope($scope0_id, {
		input_b: input.b,
		x: _write_if($scope0_reason, 1) && x
	}, "__tests__/template.marko", 0, {
		input_b: ["input.b"],
		x: "1:6"
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.b, !_server_guard($scope0_reason, 1));
}, 1);
