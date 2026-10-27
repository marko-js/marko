// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: "a2,<p>a</p>",
	a3: "a3 !a0;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_page = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.page === 0) {
			const $scope1_id = _scope_id();
			_html("<p>a</p>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {});
			return 0;
		} else {
			const $scope2_id = _scope_id();
			let mounted = false;
			_if(() => {}, $scope2_id, "a", 1, 1, 0, 0, 1);
			_script($scope2_id, "a0");
			_patch_fill($scope2_id, "va1", mounted, 1);
			_scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "a", 1, $wg__input_page, void 0, void 0, void 0, ["a2", "a3"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
