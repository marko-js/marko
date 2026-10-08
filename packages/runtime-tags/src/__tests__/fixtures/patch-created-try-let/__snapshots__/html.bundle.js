// template.marko
_shells({
	a0: "a0 !a2; D ;<button> </button>",
	a: "a;b%;<!><!><!>",
	a1: "a1;b%;<!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				let open = false;
				_html(`<button>${_text_resume($scope2_id, "b", "open")}</button>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "a2");
				_patch_value($scope2_id, "a3", open, 1);
				_scope($scope2_id, { c: open });
			}, void 0, () => {
				_scope_reason();
				_scope_id();
				_html("caught");
			}, void 0, "a4", "a0");
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
}, 1);
