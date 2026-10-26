// template.marko
_shells({
	a: "a !;E l%;<main><h1> </h1><!></main>",
	a3: "a3 !a1; ;<input>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<input${_patch_input_value($scope1_id, "a", input.value, _resume(function(next) {
				document.querySelector("main").dataset.got = next;
			}, "a0"), "n2a", $scope0_reason, 2, "wEa", $scope0_reason, 2)}>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a1");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a2");
			$scope0_page && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a3"], $scope0_reason, 1);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, { g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.value }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va4", input.value, !_server_guard($scope0_reason, 2));
}, 1);
