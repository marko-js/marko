// tags/code-block.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/code-block.marko": "__tests__/tags/code-block.marko !;D ;<div> </div>" });
var code_block_default = _template("__tests__/tags/code-block.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a = _server_guard($scope0_reason, 8), $sg__input_b = _server_guard($scope0_reason, 9), $sg__input_c = _server_guard($scope0_reason, 10), $cg__input_a__OR__input_b__OR__input_c = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 8) && (_client_guard($scope0_reason, 2) ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/code-block.marko_fill0", input.a, !$sg__input_a) : (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !$sg__input_a));
	_filled_guard($scope0_reason, 9) && (_client_guard($scope0_reason, 1) ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/code-block.marko_fill1", input.b, !$sg__input_b) : (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !$sg__input_b));
	_filled_guard($scope0_reason, 10) && (_client_guard($scope0_reason, 0) ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/code-block.marko_fill2", input.c, !$sg__input_c) : (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && _patch_write($scope0_id, "PatchMarkedWrite:input_c", input.c, !$sg__input_c));
	const f = _bind_resume(function(t) {
		return t + input.a + input.b + input.c;
	}, "__tests__/tags/code-block.marko_0/f", $scope0_id);
	_html(`<div>${_patch_text($scope0_id, "#text/0", f(input.d), void 0, $scope0_reason, 7)}</div>`);
	$cg__input_a__OR__input_b__OR__input_c && _patch_init($scope0_id, "__tests__/tags/code-block.marko_0_input_a#3_input_b#4_input_c#5/init");
	_client_guard($scope0_reason, 7) && _patch_init($scope0_id, "__tests__/tags/code-block.marko_0_input_d#7_f#8/init");
	_scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && input.b,
		input_c: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && input.c,
		input_d: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && input.d,
		f: (_unfilled_if($scope0_reason, 11) || _unfilled_if($scope0_reason, 7)) && f
	}, "__tests__/tags/code-block.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		input_c: ["input.c"],
		input_d: ["input.d"],
		f: "1:8"
	}) || (_filled_guard($scope0_reason, 11) && $cg__input_a__OR__input_b__OR__input_c && _patch_fill($scope0_id, "PatchFill:__tests__/tags/code-block.marko_fill3", input.d, !_server_guard($scope0_reason, 11)), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 11) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/code-block.marko_fill4", f, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>b</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)("D l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)("D l")};${((_w0) => `<button>b</button>${_w0}`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let b = "b";
	_html(`<button>b</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(649190 | (_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 11 | _mask_group($scope0_reason, 2) << 17 | _mask_group($scope0_reason, 3) << 21 | _mask_group($scope0_reason, 4) << 23));
	const $childScope = _patch_child($scope0_id, "#childScope/1", 0);
	code_block_default({
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
