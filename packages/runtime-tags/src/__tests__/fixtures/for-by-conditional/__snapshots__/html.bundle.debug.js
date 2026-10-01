// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items__OR__input_useKey = _write_guard($scope0_reason, 0), $wi__input_items__OR__input_useKey = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_text_resume($scope1_id, "#text/0", item.name, $wg__input_items__OR__input_useKey)}</div>`);
		$wi__input_items__OR__input_useKey && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, input.useKey && "id", $scope0_id, "#text/0", $wg__input_items__OR__input_useKey, $wg__input_items__OR__input_useKey, $wg__input_items__OR__input_useKey, 0, 1);
	$wi__input_items__OR__input_useKey && _scope($scope0_id, {
		input_items: _write_if($scope0_reason, 2) && input.items,
		input_useKey: _write_if($scope0_reason, 1) && input.useKey
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		input_useKey: ["input.useKey"]
	});
}, 1);
