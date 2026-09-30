// template.marko
_shells({
	a0: "a0,<em>static</em>",
	a: "a; ;<main></main>",
	a1: "a1;b%;<!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				_scope_id();
				_html("<em>static</em>");
			}, void 0, (err) => {
				const $scope3_reason = _scope_reason(), $sg__err_message = _source_guard($scope3_reason, 0);
				const $scope3_id = _scope_id();
				_html(`<b>${_text_resume($scope3_id, "a", err.message, $sg__err_message)}</b>`);
				_source_if($scope3_reason, 0) && _scope($scope3_id, {});
			}, void 0, "a2", "a0", void 0, 1);
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a1"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, {});
}, 1, 0);
