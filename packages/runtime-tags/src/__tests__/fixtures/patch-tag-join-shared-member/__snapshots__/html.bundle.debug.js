// tags/rows.marko
const $template$1 = "<div> </div><div> </div>";
const $walks$1 = "D lD l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/rows.marko": "__tests__/tags/rows.marko;D lD ;<div> </div><div> </div>" });
var rows_default = _template("__tests__/tags/rows.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_a = _filled_guard($scope0_reason, 5), $fg__input_b = _filled_guard($scope0_reason, 6), $fg__input_c = _filled_guard($scope0_reason, 7), $fg__input_d = _filled_guard($scope0_reason, 8);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_mark($scope0_id, "#text/0", input.a + input.b + input.c, 1, $scope0_reason, 3)}</div><div>${_text_mark($scope0_id, "#text/1", input.a + input.d, 1, $scope0_reason, 2)}</div>`);
	_patch_render($scope0_id, "__tests__/tags/rows.marko_0_input_a#4_input_b#5_input_c#6/setup", [
		$fg__input_a && "input_a",
		$fg__input_b && "input_b",
		$fg__input_c && "input_c"
	], $scope0_reason, 3);
	_patch_render($scope0_id, "__tests__/tags/rows.marko_0_input_a#4_input_d#8/setup", [$fg__input_a && "input_a", $fg__input_d && "input_d"], $scope0_reason, 2);
	_scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.b,
		input_c: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.c,
		input_d: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 2)) && input.d
	}, "__tests__/tags/rows.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		input_c: ["input.c"],
		input_d: ["input.d"]
	}) || ($fg__input_a && _unfilled_if($scope0_reason, 4) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 5)), $fg__input_b && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 6)), $fg__input_c && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_c", input.c, !_server_guard($scope0_reason, 7)), $fg__input_d && _unfilled_if($scope0_reason, 5) && _patch_write($scope0_id, "PatchMarkedWrite:input_d", input.d, !_server_guard($scope0_reason, 8)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>b</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks$1)};${((_w0) => `<button>b</button>${_w0}`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let b = "b";
	_html(`<button>b</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(10118 | (_updates_from($scope0_reason, 0) << 3 | _updates_from($scope0_reason, 1) << 5 | _updates_from($scope0_reason, 2) << 11 | _updates_from($scope0_reason, 3) << 15 | _updates_from($scope0_reason, 4) << 17));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	rows_default({
		a: input.a,
		b,
		c: input.c,
		d: input.d
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		b,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { b: "1:6" });
}, 1);
