// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items__OR__input_useKey = _write_guard($scope0_reason, 0), $wi__input_items__OR__input_useKey = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_text_resume($scope1_id, "a", item.name, $wg__input_items__OR__input_useKey)}</div>`);
		$wi__input_items__OR__input_useKey && _scope($scope1_id, {});
	}, input.useKey && "id", $scope0_id, "a", $wg__input_items__OR__input_useKey, $wg__input_items__OR__input_useKey, 0, 0, 1);
	$wi__input_items__OR__input_useKey && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.items,
		e: _write_if($scope0_reason, 1) && input.useKey
	});
}, 1);
