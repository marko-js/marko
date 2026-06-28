// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`${_style_html(`--M_a0:${_escape_style_value(input.color)};--M_a1:${_escape_style_value(input.pad)};--M_a2:${_escape_style_value(input.hover)};--M_a3:${_escape_style_value(input.wide)};`)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}<div class=card>Card</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
}, 1);
