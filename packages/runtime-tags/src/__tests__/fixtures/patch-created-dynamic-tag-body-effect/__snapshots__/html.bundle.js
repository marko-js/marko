// template.marko
_shells({
	a0: "a0 !a1",
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.tag, {}, 2, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(" body");
		_script($scope1_id, "a1", 0);
	}, $scope0_id), 0, $wg__input_tag, $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
}, 1);
