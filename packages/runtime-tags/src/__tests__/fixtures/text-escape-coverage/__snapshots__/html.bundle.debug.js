// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wg__input_b = _write_guard($scope0_reason, 2), $wg__input_c = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.a ? null : 1, $wg__input_a)}</div><div>${_text_resume($scope0_id, "#text/1", input.b ? true : "x<y", $wg__input_b)}</div><div>before mid ${_text_resume($scope0_id, "#text/2", `${input.c}`, $wg__input_c * 2)} end after</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
