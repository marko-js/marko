// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	_await(_scope_id(), "a", input.value, (value) => {
		const $scope1_id = _scope_id();
		_html(`Got: ${_sep($sg__input_value)}${_escape(value)}${_el_resume($scope1_id, "a", $sg__input_value)}`);
		_serialize_if($scope0_reason, 0) && writeScope($scope1_id, {});
	}, $sg__input_value);
}, 1);
