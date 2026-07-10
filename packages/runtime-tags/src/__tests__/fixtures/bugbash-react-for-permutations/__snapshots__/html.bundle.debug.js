// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0), $si__input_items = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div id=keyed>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_escape(item)}${_el_resume($scope1_id, "#text/0", $sg__input_items)}</span>`);
		$si__input_items && writeScope($scope1_id, {}, "__tests__/template.marko", "2:4");
	}, (item) => item, $scope0_id, "#div/0", $sg__input_items, $sg__input_items, $sg__input_items, "</div>", 1);
	$si__input_items && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
