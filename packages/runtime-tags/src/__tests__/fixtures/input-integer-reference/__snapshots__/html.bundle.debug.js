// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0), $sg__input_value_ = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`${_sep($sg__input_value)}${_escape(input.value)}${_el_resume($scope0_id, "#text/0", $sg__input_value)} ${_sep($sg__input_value_)}${_escape(input.value[0])}${_el_resume($scope0_id, "#text/1", $sg__input_value_)}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
