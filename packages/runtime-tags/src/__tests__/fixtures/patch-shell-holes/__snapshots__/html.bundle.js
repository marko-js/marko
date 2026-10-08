// template.marko
_shells({
	a: "a !;E l%;<main><h1> </h1><!></main>",
	a0: "a0; D ;<a> </a>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 2)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<a${_patch_attr($scope1_id, "a", "href", input.href, $scope0_reason, 4)}${_patch_attr($scope1_id, "a", "hidden", input.hidden, $scope0_reason, 5)}>${_patch_text($scope1_id, "b", input.label, void 0, $scope0_reason, 6)}</a>${_el_resume($scope1_id, "a")}`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _source_guard($scope0_reason, 3), void 0, void 0, void 0, ["a0"], $scope0_reason, 3);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		g: _unfilled_if($scope0_reason, 3) && input.href,
		h: _unfilled_if($scope0_reason, 3) && input.hidden,
		i: _unfilled_if($scope0_reason, 3) && input.label
	}) : (_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "a1", input.href), _filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "a2", input.hidden), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "a3", input.label));
}, 1);
