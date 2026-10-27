// tags/child.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b !;D ;<p> </p>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a__OR__input_b = _client_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<p>${_patch_text($scope0_id, "a", input.a + input.b + $global$1.g, void 0, (2 | _mask_group($scope0_reason, 0)) << 1, 0)}</p>`);
	_fill_global_subscribe("b0", $scope0_id, $cg__input_a__OR__input_b);
	$cg__input_a__OR__input_b && _patch_init($scope0_id, "b3");
	$scope0_page ? _scope($scope0_id, {
		d: _unfilled_if($scope0_reason, 0) && input.a,
		e: _unfilled_if($scope0_reason, 0) && input.b
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vb1", input.a, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb2", input.b, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}& b`)("D l", "D l")};${((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a", 0);
	child_default({
		a: input.x,
		b: "n0"
	});
	_patch_child_end();
	_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
	const $childScope2 = _patch_child($scope0_id, "b", 1);
	child_default({
		a: "m0",
		b: input.y
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		h: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
