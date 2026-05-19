// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { value } = input;
	_html(`Static ${_sep($sg__input_value)}${_escape(value)}${_el_resume($scope0_id, "a", $sg__input_value)}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
}, 1);
