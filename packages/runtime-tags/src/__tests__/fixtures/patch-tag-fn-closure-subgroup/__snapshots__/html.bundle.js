// tags/code-block.marko
const $template = "<div> </div>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<div> </div>" });
var code_block_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_a__OR__input_b__OR__input_c = _unfilled_if($scope0_reason, 0), $ui__input_a__OR__input_b__OR__input_c__OR__input_d = _unfilled_if($scope0_reason, 4), $fg__input_a = _filled_guard($scope0_reason, 5), $fg__input_b = _filled_guard($scope0_reason, 6), $fg__input_c = _filled_guard($scope0_reason, 7), $fg__input_d = _filled_guard($scope0_reason, 8), $fg__input_a__OR__input_b__OR__input_c = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_a && _unfilled_if($scope0_reason, 3) && _patch_write($scope0_id, "xd", input.a, !_server_guard($scope0_reason, 5));
	$fg__input_b && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.b, !_server_guard($scope0_reason, 6));
	$fg__input_c && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.c, !_server_guard($scope0_reason, 7));
	const f = _bind_resume(function(t) {
		return t + input.a + input.b + input.c;
	}, "b0", $scope0_id);
	_html(`<div>${_text_mark($scope0_id, "a", f(input.d), 1, $scope0_reason, 4)}</div>`);
	_patch_render($scope0_id, "b1", (($fg__input_a ? " d" : "") + ($fg__input_b ? " e" : "") + ($fg__input_c ? " f" : "")).slice(1), $scope0_reason, 0);
	_patch_render($scope0_id, "b2", (($fg__input_d ? " h" : "") + ($fg__input_a__OR__input_b__OR__input_c ? " i" : "") + ($fg__input_a ? " d" : "") + ($fg__input_b ? " e" : "") + ($fg__input_c ? " f" : "")).slice(1), $scope0_reason, 4);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 3) && ($ui__input_a__OR__input_b__OR__input_c || $ui__input_a__OR__input_b__OR__input_c__OR__input_d) && input.a,
		e: _write_if($scope0_reason, 2) && ($ui__input_a__OR__input_b__OR__input_c || $ui__input_a__OR__input_b__OR__input_c__OR__input_d) && input.b,
		f: _write_if($scope0_reason, 1) && ($ui__input_a__OR__input_b__OR__input_c || $ui__input_a__OR__input_b__OR__input_c__OR__input_d) && input.c,
		h: _write_if($scope0_reason, 0) && $ui__input_a__OR__input_b__OR__input_c__OR__input_d && input.d,
		i: _write_if($scope0_reason, 8) && $ui__input_a__OR__input_b__OR__input_c__OR__input_d && f
	}) || ($fg__input_d && $ui__input_a__OR__input_b__OR__input_c && _patch_write($scope0_id, "xh", input.d, !_server_guard($scope0_reason, 8)), $fg__input_a__OR__input_b__OR__input_c && _unfilled_if($scope0_reason, 8) && _patch_write($scope0_id, "xi", f, !_server_guard($scope0_reason, 0)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)("D l")};${((_w0) => `<button>b</button>${_w0}`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let b = "b";
	_html(`<button>b</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(10142 | (_updates_from($scope0_reason, 0) << 5 | _updates_from($scope0_reason, 1) << 11 | _updates_from($scope0_reason, 2) << 15 | _updates_from($scope0_reason, 3) << 17));
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	code_block_default({
		a: input.a,
		b,
		c: input.c,
		d: input.d
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: b,
		b: _existing_scope($childScope)
	});
}, 1);
