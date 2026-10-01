// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 1), $wg__input_missing = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`Hello ${_text_resume($scope0_id, "a", input.name, $wg__input_name * 2)}! Hello ${_html_resume($scope0_id, "b", input.name, $wg__input_name * 2)}! Hello ${_html_resume($scope0_id, "c", input.missing, $wg__input_missing * 2)}!`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
