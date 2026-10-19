// template.marko
_shells({
	a: "a;E l%;<main><h1> </h1><!></main>",
	a0: "a0,<p>promo</p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<p>promo</p>");
			_script($scope1_id, "a1", 0, 1);
			_filled_guard($scope0_reason, 2) && _patch_effect($scope1_id, "ea1", "1 g");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, { g: input.value }) : _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "wg", input.value, !_server_guard($scope0_reason, 2));
}, 1);
