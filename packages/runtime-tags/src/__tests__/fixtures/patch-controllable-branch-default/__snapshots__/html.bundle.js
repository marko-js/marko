// template.marko
_shells({
	a: "a !;E l%;<main><h1> </h1><!></main>",
	a0: "a0; ;<input>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 1)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<input${_attr_input_value($scope1_id, "a", input.value)}${_patch_control($scope1_id, "a", 2, input.value, $scope0_reason, 3)}>${_el_resume($scope1_id, "a")}`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _source_guard($scope0_reason, 2), void 0, void 0, void 0, ["a0"], $scope0_reason, 2);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, { g: _unfilled_if($scope0_reason, 2) && input.value }) : _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "a1", input.value);
}, 1);
