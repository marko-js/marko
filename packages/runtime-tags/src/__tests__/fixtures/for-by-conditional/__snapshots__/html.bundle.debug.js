// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items__OR__input_useKey = _serialize_guard($scope0_reason, 0), $si__input_items__OR__input_useKey = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_escape(item.name)}${_el_resume($scope1_id, "#text/0", $sg__input_items__OR__input_useKey)}</div>`);
		$si__input_items__OR__input_useKey && writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, input.useKey && "id", $scope0_id, "#text/0", $sg__input_items__OR__input_useKey, $sg__input_items__OR__input_useKey, $sg__input_items__OR__input_useKey, 0, 1);
	$si__input_items__OR__input_useKey && writeScope($scope0_id, {
		input_items: _serialize_if($scope0_reason, 2) && input.items,
		input_useKey: _serialize_if($scope0_reason, 1) && input.useKey
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		input_useKey: ["input.useKey"]
	});
}, 1);
