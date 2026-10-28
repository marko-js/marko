// tags/outer.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = [["__tests__/tags/outer.marko_0_input_b#4_x#5/init"], []];
_shells({ "__tests__/tags/outer.marko": "__tests__/tags/outer.marko __tests__/tags/outer.marko_0_input_b#4_x#5/init;D ;<p> </p>" });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = input.a;
	_html(`<p>${_text_resume($scope0_id, "#text/0", x + input.b)}</p>`);
	_filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchWrite:x", x, 1);
	_scope($scope0_id, {
		input_b: input.b,
		x: _write_if($scope0_reason, 1) && x
	}, "__tests__/tags/outer.marko", 0, {
		input_b: ["input.b"],
		x: "1:6"
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", input.b, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$1) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	outer_default({
		a: input.a,
		b: input.b
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
