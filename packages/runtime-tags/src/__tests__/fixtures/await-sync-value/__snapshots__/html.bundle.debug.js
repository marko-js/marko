// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.value, (value) => {
		const $scope1_id = _scope_id();
		_html(`Got: ${_sep($sg__input_value)}${_escape(value)}${_el_resume($scope1_id, "#text/0", $sg__input_value)}`);
		_serialize_if($scope0_reason, 0) && writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $sg__input_value);
}, 1);
