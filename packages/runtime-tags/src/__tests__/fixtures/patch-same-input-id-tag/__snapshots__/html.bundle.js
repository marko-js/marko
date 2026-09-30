// template.marko
_shells({
	a: "a; ;<main></main>",
	a0: "a0; b ;<label>Name</label><input>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const fieldId = _id();
			_html(`<label${_patch_attr($scope1_id, "a", "for", fieldId, 0, 0)}>Name</label>${_el_resume($scope1_id, "a")}<input${_patch_attr($scope1_id, "b", "id", fieldId, 0, 0)}>${_el_resume($scope1_id, "b")}`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, {});
}, 1, 0);
