// template.marko
_shells({
	a: "a;E l%;<main><h1> </h1><!></main>",
	a0: "a0 !a1,<p>promo</p>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<p>promo</p>");
			_script($scope1_id, "a1", 0);
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {});
}, 1, 0);
