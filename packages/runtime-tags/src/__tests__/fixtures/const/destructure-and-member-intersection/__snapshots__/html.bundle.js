// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a__OR__input_b = _serialize_guard($scope0_reason, 0), $sg__input_a = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const { a, b } = input;
	_html(`<div>${_text_resume($scope0_id, "a", input.a, $sg__input_a)}${_text_resume($scope0_id, "b", a + b, $sg__input_a__OR__input_b * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {
		e: _serialize_if($scope0_reason, 2) && input.a,
		f: _serialize_if($scope0_reason, 1) && b
	});
}, 1);
