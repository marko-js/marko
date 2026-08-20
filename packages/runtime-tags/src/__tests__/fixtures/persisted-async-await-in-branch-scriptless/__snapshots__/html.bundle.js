// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a; ;<main></main>",
	a2: "a2;D ;<em> </em>",
	a1: "a1;b%;<!><!><!>",
	a3: "a3,<em>closed</em>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (value) => {
				const $scope3_id = _scope_id();
				_html(`<em>${_patch_text($scope3_id, "a", value, $scope0_owned, 2)}${_el_resume($scope3_id, "a")}</em>`);
				writeScope($scope3_id, {});
			}, void 0, "a2");
			$scope0_reason && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<em>closed</em>");
			$scope0_reason && writeScope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a1", "a3"]);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason && writeScope($scope0_id, { e: input.promise });
}, 1, 0);
