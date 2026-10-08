// template.marko
_shells({
	a: "a !;E l%;<main><h1> </h1><!></main>",
	a1: "a1 !a2; ;<input>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 1)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<input${_attr_input_value($scope1_id, "a", input.value, _resume(function(next) {
				document.querySelector("main").dataset.got = next;
			}, "a0"))}${_patch_bind($scope1_id, "Ea", _resume(function(next) {
				document.querySelector("main").dataset.got = next;
			}, "a0"), $scope0_reason, 3)}${_patch_control($scope1_id, "a", 2, input.value, $scope0_reason, 3)}>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a2");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _source_guard($scope0_reason, 2), void 0, void 0, void 0, ["a1"], $scope0_reason, 2);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, { g: _source_if($scope0_reason, 2) && input.value }) : _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "a3", input.value);
}, 1);
