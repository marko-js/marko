// template.marko
_shells({
	a: "a;E l%;<main><h1> </h1><!></main>",
	a0: "a0 a5!a2,<p>promo</p>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<main><h1>${_patch_text($scope0_id, "a", $global$1.brand)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<p>promo</p>");
			_fill_global_subscribe("a1", $scope1_id, 1);
			_script($scope1_id, "a2", 0);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, _source_guard($scope0_reason, 0), void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	_html("</main>");
	_fill_global_subscribe("a3", $scope0_id);
	$scope0_page && _scope($scope0_id, {});
}, 1);
