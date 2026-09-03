// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0), $sg__input_value_ = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`${_text_resume($scope0_id, "a", input.value, $sg__input_value * 2)} ${_text_resume($scope0_id, "b", input.value[0], $sg__input_value_ * 2)}`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
