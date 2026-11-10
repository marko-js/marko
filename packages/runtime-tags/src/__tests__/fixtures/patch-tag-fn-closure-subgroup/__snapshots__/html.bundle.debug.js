// tags/code-block.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/code-block.marko": "__tests__/tags/code-block.marko;D ;<div> </div>" });
var code_block_default = _template("__tests__/tags/code-block.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_a__OR__input_b__OR__input_c = _unfilled_if($scope0_reason, 0), $ui__input_a__OR__input_b__OR__input_c__OR__input_d = _unfilled_if($scope0_reason, 4), $ui__input_b__OR__input_c__OR__input_d = _unfilled_if($scope0_reason, 3), $ui__input_a__OR__input_c__OR__input_d = _unfilled_if($scope0_reason, 2), $ui__input_a__OR__input_b__OR__input_d = _unfilled_if($scope0_reason, 1), $ui__input_d = _unfilled_if($scope0_reason, 8), $fg__input_a = _filled_guard($scope0_reason, 5), $fg__input_b = _filled_guard($scope0_reason, 6), $fg__input_c = _filled_guard($scope0_reason, 7), $fg__input_d = _filled_guard($scope0_reason, 8), $fg__input_a__OR__input_b__OR__input_c = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_a && $ui__input_b__OR__input_c__OR__input_d && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 5));
	$fg__input_b && $ui__input_a__OR__input_c__OR__input_d && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 6));
	$fg__input_c && $ui__input_a__OR__input_b__OR__input_d && _patch_write($scope0_id, "PatchMarkedWrite:input_c", input.c, !_server_guard($scope0_reason, 7));
	const f = _bind_resume(function(t) {
		return t + input.a + input.b + input.c;
	}, "__tests__/tags/code-block.marko_0/f", $scope0_id);
	_html(`<div>${_text_mark($scope0_id, "#text/0", f(input.d), 1, $scope0_reason, 4)}</div>`);
	_patch_render($scope0_id, "__tests__/tags/code-block.marko_0_input_a#3_input_b#4_input_c#5/setup", (($fg__input_a ? " input_a" : "") + ($fg__input_b ? " input_b" : "") + ($fg__input_c ? " input_c" : "")).slice(1), $scope0_reason, 0);
	_patch_render($scope0_id, "__tests__/tags/code-block.marko_0_input_d#7_f#8/setup", (($fg__input_d ? " input_d" : "") + ($fg__input_a__OR__input_b__OR__input_c ? " f" : "") + ($fg__input_a ? " input_a" : "") + ($fg__input_b ? " input_b" : "") + ($fg__input_c ? " input_c" : "")).slice(1), $scope0_reason, 4);
	_scope($scope0_id, {
		input_a: ($ui__input_b__OR__input_c__OR__input_d || $ui__input_a__OR__input_b__OR__input_c || $ui__input_a__OR__input_b__OR__input_c__OR__input_d) && input.a,
		input_b: ($ui__input_a__OR__input_c__OR__input_d || $ui__input_a__OR__input_b__OR__input_c || $ui__input_a__OR__input_b__OR__input_c__OR__input_d) && input.b,
		input_c: ($ui__input_a__OR__input_b__OR__input_d || $ui__input_a__OR__input_b__OR__input_c || $ui__input_a__OR__input_b__OR__input_c__OR__input_d) && input.c,
		input_d: ($ui__input_a__OR__input_b__OR__input_c || $ui__input_a__OR__input_b__OR__input_c__OR__input_d) && input.d,
		f: ($ui__input_d || $ui__input_a__OR__input_b__OR__input_c__OR__input_d) && f
	}, "__tests__/tags/code-block.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		input_c: ["input.c"],
		input_d: ["input.d"],
		f: "1:8"
	}) || ($fg__input_d && $ui__input_a__OR__input_b__OR__input_c && _patch_write($scope0_id, "PatchMarkedWrite:input_d", input.d, !_server_guard($scope0_reason, 8)), $fg__input_a__OR__input_b__OR__input_c && $ui__input_d && _patch_write($scope0_id, "PatchMarkedWrite:f", f, !_server_guard($scope0_reason, 0)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>b</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)("D l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)("D l")};${((_w0) => `<button>b</button>${_w0}`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let b = "b";
	_html(`<button>b</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(10142 | (_updates_from($scope0_reason, 0) << 5 | _updates_from($scope0_reason, 1) << 11 | _updates_from($scope0_reason, 2) << 15 | _updates_from($scope0_reason, 3) << 17));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
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
