// outer.marko
_shells({ a: "a;D%;<section><!></section>" });
var outer_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	b0: "b0,",
	b: "b !;b%;<!><!><!>"
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_wrap = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.wrap ? outer_default : "div", {}, _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`body ${_patch_text($scope1_id, "a", input.x, 2, $scope0_reason, 2)}`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "b1");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_x__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ e: input.x }] : []), 0, $wg__input_wrap, void 0, 2, $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.x,
		f: _write_if($scope0_reason, 2) && $input_x__closures
	}) : _filled_guard($scope0_reason, 2) && _content_withheld("b0", $scope0_id) && _patch_value($scope0_id, "vb2", input.x, !_server_guard($scope0_reason, 2));
}, 1);
