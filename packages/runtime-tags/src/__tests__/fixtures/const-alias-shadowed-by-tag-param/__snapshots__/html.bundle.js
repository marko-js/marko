// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { value } = input;
	_for_of([1, 2], (input) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_text_resume($scope1_id, "a", value, $wg__input_value)}-${_escape(input)}</span>`);
		_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", $wg__input_value, 0, 0, 0, 1);
}, 1);
