// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: "a0,<p>a</p>",
	a1: "a1 !a2;b%;<!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_page = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.page === 0) {
			const $scope1_id = _scope_id();
			_html("<p>a</p>");
			$scope0_page && _scope($scope1_id, {});
			return 0;
		} else {
			const $scope2_id = _scope_id();
			let mounted = false;
			if ($scope0_page) _if(() => {}, $scope2_id, "a", 1, 1, 0, 0, 1);
			_script($scope2_id, "a2");
			_patch_value($scope2_id, "a3", mounted, 1);
			_scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "a", 1, $wg__input_page, void 0, void 0, void 0, ["a0", "a1"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
}, 1);
