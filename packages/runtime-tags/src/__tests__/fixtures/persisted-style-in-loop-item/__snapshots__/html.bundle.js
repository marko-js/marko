// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: "a1; ;<style></style><b class=k>item</b>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`${_style_html(`--M_a0:${_patch_style($scope1_id, "a", "--M_a0", item.color, $scope0_owned, 0)};`)}${_el_resume($scope1_id, "a")}<b class=k>item</b>`);
		_scope($scope1_id, {});
	}, "id", $scope0_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a1", $scope0_owned, 0);
	$scope0_reason && _scope($scope0_id, {});
}, 1, 0);
