// tags/row.marko
const $template = "<p> </p><em> </em>";
const $walks = "D lD l";
const $setup$1 = [[], []];
_shells({ b: "b;D lD ;<p> </p><em> </em>" });
var row_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 0), $ui__input_b__OR__input_y = _unfilled_if($scope0_reason, 2), $ui__input_a__OR__input_y = _unfilled_if($scope0_reason, 1), $ui__input_b = _unfilled_if($scope0_reason, 4), $fg__input_a = _filled_guard($scope0_reason, 3), $fg__input_b = _filled_guard($scope0_reason, 4), $fg__input_y = _filled_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "a", input.a + input.b, 1, $scope0_reason, 0)}</p><em>${_text_mark($scope0_id, "b", input.y + input.b, 1, $scope0_reason, 2)}</em>`);
	_patch_render($scope0_id, "b0", (($fg__input_a ? " e" : "") + ($fg__input_b ? " f" : "")).slice(1), $scope0_reason, 0);
	_patch_render($scope0_id, "b1", (($fg__input_b ? " f" : "") + ($fg__input_y ? " h" : "")).slice(1), $scope0_reason, 2);
	_scope($scope0_id, {
		e: $ui__input_a__OR__input_b && input.a,
		f: ($ui__input_a__OR__input_y || $ui__input_a__OR__input_b || $ui__input_b__OR__input_y) && input.b,
		h: $ui__input_b__OR__input_y && input.y
	}) || ($fg__input_a && $ui__input_b && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 3)), $fg__input_b && $ui__input_a__OR__input_y && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 4)), $fg__input_y && $ui__input_b && _patch_write($scope0_id, "xh", input.y, !_server_guard($scope0_reason, 5)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1], ["c>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}& b`)($walks, $walks, $walks)};${((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}<button>+</button>`)($template, $template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_y = _updates_from($scope0_reason, 1), $uf__input_x = _updates_from($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(762 | $uf__input_y << 11);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	row_default({
		a: n,
		b: n,
		y: input.y
	});
	_patch_child_end();
	_set_scope_reason(158 | (_updates_from($scope0_reason, 0) << 5 | $uf__input_x << 9 | $uf__input_y << 11));
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	row_default({
		a: n,
		b: input.x,
		y: input.y
	});
	_patch_child_end();
	_set_scope_reason(2286 | $uf__input_x << 9);
	const $childScope3 = _peek_scope_id($scope0_id, "c", 2);
	row_default({
		a: n,
		b: input.x,
		y: n
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2),
		c: _existing_scope($childScope3)
	});
}, 1);
