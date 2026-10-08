// template.marko
_shells({
	a: "a !;D%b%;<main><!><!></main>",
	a0: "a0 !a2; D ;<button> </button>",
	a1: "a1;D ;<p> </p>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_patch_text($scope1_id, "b", item, void 0, $scope0_reason, 0)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a2");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a0", $scope0_reason, 0);
	_for_of(input.items2, (item) => {
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.title, void 0, $scope0_reason, 1)}</p>`);
		_scope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 2);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, { f: input.title }) : _filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 2) ? _patch_value($scope0_id, "a3", input.title) : _patch_write($scope0_id, "f", input.title));
}, 1);
