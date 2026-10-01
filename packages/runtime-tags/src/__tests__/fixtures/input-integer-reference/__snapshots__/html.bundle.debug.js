// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0), $wg__input_value_ = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`${_text_resume($scope0_id, "#text/0", input.value, $wg__input_value * 2)} ${_text_resume($scope0_id, "#text/1", input.value[0], $wg__input_value_ * 2)}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
