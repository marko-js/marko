// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wg__input_b = _write_guard($scope0_reason, 2), $wg__input_c = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.a ? null : 1, $wg__input_a)}</div><div>${_text_resume($scope0_id, "b", input.b ? true : "x<y", $wg__input_b)}</div><div>before mid ${_text_resume($scope0_id, "c", `${input.c}`, $wg__input_c * 2)} end after</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
