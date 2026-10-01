// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.value, (value) => {
		const $scope1_id = _scope_id();
		_html(`Got: ${_text_resume($scope1_id, "a", value, $wg__input_value * 2)}`);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {});
	}, $wg__input_value);
}, 1);
