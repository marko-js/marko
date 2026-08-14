// template.marko
_shells({
	a0: ",`a0;b%;<!><!><!>`",
	a1: ",`a1,<em>closed</em>`"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_promise = _source_guard($scope0_reason, 3), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 1)}${_el_resume($scope0_id, "a")}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (value) => {
				const $scope3_id = _scope_id();
				_html(`<em>${_patch_text($scope3_id, "a", value, $scope0_owned, 3)}${_el_resume($scope3_id, "a", $sg__input_promise)}</em>`);
				$scope0_reason && writeScope($scope3_id, {});
			}, $sg__input_promise, "a2");
			$scope0_reason && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<em>closed</em>");
			$scope0_reason && writeScope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "b", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0", "a1"]);
	_html(`<button>Count <!>${_escape(count)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a3");
	$scope0_reason && writeScope($scope0_id, {
		i: input.promise,
		j: count
	});
	_resume_branch($scope0_id);
}, 1, 0);
