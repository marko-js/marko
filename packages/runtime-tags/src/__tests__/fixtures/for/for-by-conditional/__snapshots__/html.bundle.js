// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items__OR__input_useKey = _serialize_guard($scope0_reason, 0), $si__input_items__OR__input_useKey = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_text_resume($scope1_id, "a", item.name, $sg__input_items__OR__input_useKey)}</div>`);
		$si__input_items__OR__input_useKey && _scope($scope1_id, {});
	}, input.useKey && "id", $scope0_id, "a", $sg__input_items__OR__input_useKey, $sg__input_items__OR__input_useKey, $sg__input_items__OR__input_useKey, 0, 1);
	$si__input_items__OR__input_useKey && _scope($scope0_id, {
		d: _serialize_if($scope0_reason, 2) && input.items,
		e: _serialize_if($scope0_reason, 1) && input.useKey
	});
}, 1);
