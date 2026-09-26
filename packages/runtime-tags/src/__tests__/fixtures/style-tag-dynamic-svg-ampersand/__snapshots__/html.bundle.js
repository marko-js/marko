// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_fill__OR__input_stroke = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<svg>${_style_html(`--M_a0:${_escape_style_value(input.fill)};--M_a1:${_escape_style_value(input.stroke)};`)}${_el_resume($scope0_id, "a", $sg__input_fill__OR__input_stroke)}<rect width=5 height=5></rect></svg>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
