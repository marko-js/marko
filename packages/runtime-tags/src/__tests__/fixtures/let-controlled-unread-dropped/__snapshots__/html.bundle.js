// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	input.y;
	_html(`<span>${_text_mark($scope0_id, "a", input.label, _write_guard($scope0_reason, 1))}</span>`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		item.make();
		_html(`<span>${_text_mark($scope1_id, "a", item.name, $wg__input_items)}</span>`);
		_write_if($scope0_reason, 2) && _scope($scope1_id, {});
	}, 0, $scope0_id, "b", $wg__input_items, $wg__input_items, 0, 0, 1);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
