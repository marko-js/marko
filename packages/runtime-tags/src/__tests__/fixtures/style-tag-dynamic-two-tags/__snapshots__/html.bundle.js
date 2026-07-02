// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`${_style_html(`--M_a0:${_escape_style_value(input.a)};`)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}${_style_html(`--M_a1:${_escape_style_value(input.b)};`)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 2))}<div class=a>A</div><div class=b>B</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
}, 1);
