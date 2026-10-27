// tags/label-view.marko
const $template = "<output></output>";
const $setup$1 = [[], []];
_shells({ b: "b !; ;<output></output>" });
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_flag__OR__input_a__OR__input_b = _client_guard($scope0_reason, 3), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const get = input.flag ? input.a : input.b;
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 3) && _patch_effect($scope0_id, $cg__input_flag__OR__input_a__OR__input_b ? "hb0" : "eb0", "h");
	$cg__input_flag__OR__input_a__OR__input_b && _patch_init($scope0_id, "b4");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.flag,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.a,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.b,
		h: get
	}) : (_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vb1", input.flag, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb2", input.a, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb3", input.b, !_server_guard($scope0_reason, 6)), _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "xh", get, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.title, !_server_guard($scope0_reason, 0));
	const up = _bind_resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "a1", $scope0_id);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 0) << 7 | _mask_group($scope0_reason, 0) << 11 | _mask_group($scope0_reason, 0) << 13);
	const $childScope = _patch_child($scope0_id, "a");
	label_view_default({
		a: up,
		b: low,
		flag: true
	});
	$scope0_page && _scope($scope0_id, {
		d: input.title,
		a: _existing_scope($childScope)
	});
}, 1);
