// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: "a0 !a1,<p>probe</p>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const bag = { items: [] };
			_html("<p>probe</p>");
			_script($scope1_id, "a1", 0);
			_patch_write($scope1_id, "b", bag.items, 1);
			_scope($scope1_id, { b: bag.items });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
}, 1);
