// tags/rows.marko
const $template$1 = "<div> </div><div> </div>";
const $walks$1 = "D lD l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/rows.marko": "__tests__/tags/rows.marko;D lD ;<div> </div><div> </div>" });
var rows_default = _template("__tests__/tags/rows.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a__OR__input_c = _client_guard($scope0_reason, 1), $cg__input_a__OR__input_b = _client_guard($scope0_reason, 0), $cg__input_a = _client_guard($scope0_reason, 6), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div>${_patch_text($scope0_id, "#text/0", input.a + input.b + input.c, void 0, $scope0_reason, 4)}</div><div>${_patch_text($scope0_id, "#text/1", input.a + input.d, void 0, $scope0_reason, 2)}</div>`);
	_client_guard($scope0_reason, 5) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !(_filled_guard($scope0_reason, 6) && (_client_guard($scope0_reason, 3) || _client_guard($scope0_reason, 9))));
	$cg__input_a__OR__input_c && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !(_filled_guard($scope0_reason, 7) && $cg__input_a__OR__input_c));
	$cg__input_a__OR__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_c", input.c, !(_filled_guard($scope0_reason, 8) && $cg__input_a__OR__input_b));
	$cg__input_a && _patch_write($scope0_id, "PatchMarkedWrite:input_d", input.d, !(_filled_guard($scope0_reason, 9) && $cg__input_a));
	_patch_join_init($scope0_id, "__tests__/tags/rows.marko_0_input_a#4_input_b#5_input_c#6/init", $scope0_reason, 4, _filled_guard($scope0_reason, 6) && "input_a", _filled_guard($scope0_reason, 7) && "input_b", _filled_guard($scope0_reason, 8) && "input_c");
	_patch_join_init($scope0_id, "__tests__/tags/rows.marko_0_input_a#4_input_d#8/init", $scope0_reason, 2, _filled_guard($scope0_reason, 6) && "input_a", _filled_guard($scope0_reason, 9) && "input_d");
	$scope0_page && _scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 4)) && input.b,
		input_c: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.c,
		input_d: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 2)) && input.d
	}, "__tests__/tags/rows.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		input_c: ["input.c"],
		input_d: ["input.d"]
	});
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>b</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks$1)};${((_w0) => `<button>b</button>${_w0}`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let b = "b";
	_html(`<button>b</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(40838 | (_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 13 | _mask_group($scope0_reason, 3) << 17 | _mask_group($scope0_reason, 4) << 19));
	const $childScope = _patch_child($scope0_id, "#childScope/1");
	rows_default({
		a: input.a,
		b,
		c: input.c,
		d: input.d
	});
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		b,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { b: "1:6" });
}, 1);
