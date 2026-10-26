// template.marko
_shells({ a: "a;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Row = { content: _content_resume("a0", ({ label }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $scope1_page = _page_render();
		_html(`<b>R${_patch_text($scope1_id, "a", label, 2)}</b>`);
		$scope1_page && _scope($scope1_id, {});
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", Row, { label: input.y }, 0, 0, $wg__input_y, void 0, 1, $scope0_reason, 0, 0, 0, 0);
	$scope0_page && _scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && Row });
}, 1);
