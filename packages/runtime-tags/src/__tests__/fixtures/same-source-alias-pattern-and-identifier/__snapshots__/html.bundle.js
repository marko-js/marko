// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a_b = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<button>${_text_resume($scope0_id, "a", input.a.b, $wg__input_a_b)} ${_text_resume($scope0_id, "b", input.a.b, $wg__input_a_b * 2)}</button>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
