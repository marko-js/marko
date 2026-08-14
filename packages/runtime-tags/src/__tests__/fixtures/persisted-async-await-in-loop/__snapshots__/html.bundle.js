// template.marko
_renderer_shells({ a0: ",`a0;b%;<!><!><!>`" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", item.promise, (value) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "a", value, $scope0_owned, 0)}${_el_resume($scope2_id, "a")}</em>`);
			writeScope($scope2_id, {});
		}, void 0, "a1");
		$scope0_reason && writeScope($scope1_id, {});
	}, "id", $scope0_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a0");
	_html(`<button>interactive</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason && writeScope($scope0_id, {});
}, 1, 0);
