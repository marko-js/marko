// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { value } = input;
	_html(`Static ${_text_resume($scope0_id, "a", value, $sg__input_value * 2)}`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
