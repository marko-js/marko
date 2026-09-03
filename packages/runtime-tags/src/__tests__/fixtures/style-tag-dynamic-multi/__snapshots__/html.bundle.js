// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_color__OR__input_width = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`${_style_html(`--M_a0:${_escape_style_value(input.color)};--M_a1:${_escape_style_value(input.width)};`)}${_el_resume($scope0_id, "a", $sg__input_color__OR__input_width)}<header class=a>Header</header><main class=a>Main</main>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
