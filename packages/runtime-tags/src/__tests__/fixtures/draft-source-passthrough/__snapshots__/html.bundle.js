// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0), $si__input_items = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let list = input.items;
	_html("<ul>");
	_for_of(list, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(item)}${_el_resume($scope1_id, "a", $sg__input_items)}</li>`);
		$si__input_items && writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_items, $sg__input_items, $sg__input_items, "</ul>", 1);
	$si__input_items && writeScope($scope0_id, {});
}, 1);
