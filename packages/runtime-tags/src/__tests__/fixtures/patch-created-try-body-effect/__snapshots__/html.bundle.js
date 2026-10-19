// template.marko
_shells({
	a0: "a0 !a5,<p>placeholder</p>",
	a1: "a1 !a3,<p>caught</p>",
	a: "a;b%;<!><!><!>",
	a2: "a2;b%b%;<!><!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html("<p>caught</p>");
				_script($scope2_id, "a3", 0);
			}, void 0, () => {
				_scope_reason();
				_scope_id();
				_html("failed");
			}, void 0, "a4", "a1");
			_try($scope1_id, "b", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_html("<p>placeholder</p>");
				_script($scope4_id, "a5", 0);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("loading");
			}, void 0, "a6", void 0, "a0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a2"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
}, 1);
