// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wg__input_b = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`${_style_html(`--M_a0:${_escape_style_value(input.a)};`)}${_el_resume($scope0_id, "a", $wg__input_a)}${_style_html(`--M_a1:${_escape_style_value(input.b)};`)}${_el_resume($scope0_id, "b", $wg__input_b)}<div class=a>A</div><div class=b>B</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
