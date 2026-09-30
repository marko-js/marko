// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a__OR__input_b = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.a ? "A" : input.b ? "B" : "C", $sg__input_a__OR__input_b)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _serialize_if($scope0_reason, 2) && input.a,
		e: _serialize_if($scope0_reason, 1) && input.b
	});
}, 1);
