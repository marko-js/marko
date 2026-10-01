// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wg__input_b = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { a, b } = input;
	_html(`${_text_resume($scope0_id, "a", a, $wg__input_a * 2)} ${_text_resume($scope0_id, "b", b, $wg__input_b * 2)}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
