// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a__OR__input_b = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { a, b } = input;
	_html(`<div>${_escape(input.a)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}${_sep($sg__input_a__OR__input_b)}${_escape(a + b)}${_el_resume($scope0_id, "b", $sg__input_a__OR__input_b)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {
		e: _serialize_if($scope0_reason, 2) && input.a,
		f: _serialize_if($scope0_reason, 1) && b
	});
}, 1);
