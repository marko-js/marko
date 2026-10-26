// tags/code-block.marko
const $template = "<div> </div>";
const $setup$1 = [[], []];
_shells({ b: "b !;D ;<div> </div>" });
var code_block_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a = _server_guard($scope0_reason, 8), $sg__input_b = _server_guard($scope0_reason, 9), $sg__input_c = _server_guard($scope0_reason, 10), $cg__input_a__OR__input_b__OR__input_c = _client_guard($scope0_reason, 3), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 8) && (_client_guard($scope0_reason, 2) ? _patch_fill($scope0_id, "vb1", input.a, !$sg__input_a) : (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && _patch_write($scope0_id, "xd", input.a, !$sg__input_a));
	_filled_guard($scope0_reason, 9) && (_client_guard($scope0_reason, 1) ? _patch_fill($scope0_id, "vb2", input.b, !$sg__input_b) : (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && _patch_write($scope0_id, "xe", input.b, !$sg__input_b));
	_filled_guard($scope0_reason, 10) && (_client_guard($scope0_reason, 0) ? _patch_fill($scope0_id, "vb3", input.c, !$sg__input_c) : (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && _patch_write($scope0_id, "xf", input.c, !$sg__input_c));
	const f = _bind_resume(function(t) {
		return t + input.a + input.b + input.c;
	}, "b0", $scope0_id);
	_html(`<div>${_patch_text($scope0_id, "a", f(input.d), void 0, $scope0_reason, 7)}</div>`);
	$cg__input_a__OR__input_b__OR__input_c && _patch_init($scope0_id, "b6");
	_client_guard($scope0_reason, 7) && _patch_init($scope0_id, "b7");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && input.a,
		e: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && input.b,
		f: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && input.c,
		h: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 7)) && input.d,
		i: (_unfilled_if($scope0_reason, 11) || _unfilled_if($scope0_reason, 7)) && f
	}) : (_filled_guard($scope0_reason, 11) && $cg__input_a__OR__input_b__OR__input_c && _patch_fill($scope0_id, "vb4", input.d, !_server_guard($scope0_reason, 11)), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 11) && _patch_fill($scope0_id, "vb5", f, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)("D l")};${((_w0) => `<button>b</button>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let b = "b";
	_html(`<button>b</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(649190 | (_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 11 | _mask_group($scope0_reason, 2) << 17 | _mask_group($scope0_reason, 3) << 21 | _mask_group($scope0_reason, 4) << 23));
	const $childScope = _patch_child($scope0_id, "b");
	code_block_default({
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
