// tags/child/index.marko
_shells({ b: "b b3!b0;D l ;<p> </p><button>+</button>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _server_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<p>${_patch_text($scope0_id, "a", input.x, void 0, $scope0_reason, 0)}</p><button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	$sg__input_x && _patch_effect($scope0_id, "hb1", "e");
	_patch_fill($scope0_id, "vb2", n, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.x,
		f: n
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.x, !$sg__input_x);
});

// template.marko
_shells({ a: "a !;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_a = _write_guard($scope0_reason, 0), $cg__input_a = _client_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.show ? child_default : null, { x: input.a }, 0, 0, $wg__input_show__OR__input_a, void 0, 1, $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.show,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.a
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_a && _patch_fill($scope0_id, "va0", input.show, !_server_guard($scope0_reason, 1)), $cg__input_a && _content_withhold(input.show), _filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va1", input.a, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.a));
}, 1);
