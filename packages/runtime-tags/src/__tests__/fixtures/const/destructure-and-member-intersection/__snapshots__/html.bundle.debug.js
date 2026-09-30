// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a__OR__input_b = _serialize_guard($scope0_reason, 0), $sg__input_a = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const { a, b } = input;
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.a, $sg__input_a)}${_text_resume($scope0_id, "#text/1", a + b, $sg__input_a__OR__input_b * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {
		input_a: _serialize_if($scope0_reason, 2) && input.a,
		b: _serialize_if($scope0_reason, 1) && b
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		b: "1:12"
	});
}, 1);
