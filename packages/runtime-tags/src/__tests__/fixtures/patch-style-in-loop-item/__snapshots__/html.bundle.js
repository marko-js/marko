// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: "a1; ;<style></style><b class=k>item</b>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`${_style_html(`${_escape_style_value(item.color, $scope1_id, "a", "--M_a0", $scope0_reason, 0)};`)}${_el_mark($scope1_id, "a", _updates_from($scope0_reason, 0))}<b class=k>item</b>`);
		_scope($scope1_id, {});
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "a1", $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
