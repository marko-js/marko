// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const key = "id";
	_for_of(input.items, (key) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_text_resume($scope1_id, "a", key.id, $wg__input_items)}</span>`);
		$wi__input_items && _scope($scope1_id, {});
	}, key, $scope0_id, "a", $wg__input_items, $wg__input_items, $wg__input_items, 0, 1);
	$wi__input_items && _scope($scope0_id, { e: key });
}, 1);
