// tags/rows.marko
const $template = "<div> </div><div> </div>";
const $walks = "D lD l";
const $setup$1 = [[], []];
_shells({ b: "b;D lD ;<div> </div><div> </div>" });
var rows_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_a__OR__input_b__OR__input_c = _unfilled_if($scope0_reason, 3), $ui__input_a__OR__input_d = _unfilled_if($scope0_reason, 2), $ui__input_b__OR__input_c__OR__input_d = _unfilled_if($scope0_reason, 4), $fg__input_a = _filled_guard($scope0_reason, 5), $fg__input_b = _filled_guard($scope0_reason, 6), $fg__input_c = _filled_guard($scope0_reason, 7), $fg__input_d = _filled_guard($scope0_reason, 8);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_mark($scope0_id, "a", input.a + input.b + input.c, 1, $scope0_reason, 3)}</div><div>${_text_mark($scope0_id, "b", input.a + input.d, 1, $scope0_reason, 2)}</div>`);
	_patch_render($scope0_id, "b0", (($fg__input_a ? " e" : "") + ($fg__input_b ? " f" : "") + ($fg__input_c ? " g" : "")).slice(1), $scope0_reason, 3);
	_patch_render($scope0_id, "b1", (($fg__input_a ? " e" : "") + ($fg__input_d ? " i" : "")).slice(1), $scope0_reason, 2);
	_scope($scope0_id, {
		e: ($ui__input_b__OR__input_c__OR__input_d || $ui__input_a__OR__input_d || $ui__input_a__OR__input_b__OR__input_c) && input.a,
		f: $ui__input_a__OR__input_b__OR__input_c && input.b,
		g: $ui__input_a__OR__input_b__OR__input_c && input.c,
		i: $ui__input_a__OR__input_d && input.d
	}) || ($fg__input_a && $ui__input_b__OR__input_c__OR__input_d && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 5)), $fg__input_b && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 6)), $fg__input_c && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xg", input.c, !_server_guard($scope0_reason, 7)), $fg__input_d && _unfilled_if($scope0_reason, 5) && _patch_write($scope0_id, "xi", input.d, !_server_guard($scope0_reason, 8)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks)};${((_w0) => `<button>b</button>${_w0}`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let b = "b";
	_html(`<button>b</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(10118 | (_updates_from($scope0_reason, 0) << 3 | _updates_from($scope0_reason, 1) << 5 | _updates_from($scope0_reason, 2) << 11 | _updates_from($scope0_reason, 3) << 15 | _updates_from($scope0_reason, 4) << 17));
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	rows_default({
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
