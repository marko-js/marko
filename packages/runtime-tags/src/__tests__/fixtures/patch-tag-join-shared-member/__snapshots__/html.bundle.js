// tags/rows.marko
const $template = "<div> </div><div> </div>";
const $walks = "D lD l";
const $setup$1 = [[], []];
_shells({ b: "b;D lD ;<div> </div><div> </div>" });
var rows_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a__OR__input_c = _client_guard($scope0_reason, 1), $cg__input_a__OR__input_b = _client_guard($scope0_reason, 0), $cg__input_a = _client_guard($scope0_reason, 6), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div>${_patch_text($scope0_id, "a", input.a + input.b + input.c, void 0, $scope0_reason, 4)}</div><div>${_patch_text($scope0_id, "b", input.a + input.d, void 0, $scope0_reason, 2)}</div>`);
	_client_guard($scope0_reason, 5) && _patch_write($scope0_id, "xe", input.a, !(_filled_guard($scope0_reason, 6) && (_client_guard($scope0_reason, 3) || _client_guard($scope0_reason, 9))));
	$cg__input_a__OR__input_c && _patch_write($scope0_id, "xf", input.b, !(_filled_guard($scope0_reason, 7) && $cg__input_a__OR__input_c));
	$cg__input_a__OR__input_b && _patch_write($scope0_id, "xg", input.c, !(_filled_guard($scope0_reason, 8) && $cg__input_a__OR__input_b));
	$cg__input_a && _patch_write($scope0_id, "xi", input.d, !(_filled_guard($scope0_reason, 9) && $cg__input_a));
	_patch_join_init($scope0_id, "b0", $scope0_reason, 4, _filled_guard($scope0_reason, 6) && "e", _filled_guard($scope0_reason, 7) && "f", _filled_guard($scope0_reason, 8) && "g");
	_patch_join_init($scope0_id, "b1", $scope0_reason, 2, _filled_guard($scope0_reason, 6) && "e", _filled_guard($scope0_reason, 9) && "i");
	$scope0_page && _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.a,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 4)) && input.b,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.c,
		i: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 2)) && input.d
	});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks)};${((_w0) => `<button>b</button>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let b = "b";
	_html(`<button>b</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(40838 | (_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 13 | _mask_group($scope0_reason, 3) << 17 | _mask_group($scope0_reason, 4) << 19));
	const $childScope = _patch_child($scope0_id, "b");
	rows_default({
		a: input.a,
		b,
		c: input.c,
		d: input.d
	});
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		h: b,
		b: _existing_scope($childScope)
	});
}, 1);
