// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a; ;<main></main>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>",
	a3: "a3,<em>closed</em>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (value) => {
				const $scope3_id = _scope_id();
				_html(`<em>${_patch_text($scope3_id, "a", value, void 0, $scope0_reason, 2)}</em>`);
				_scope($scope3_id, {});
			}, 1, "a1");
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<em>closed</em>");
			$scope0_page && _scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a2", "a3"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, { e: input.promise });
}, 1, 0);
