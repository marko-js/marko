// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_block__OR__input_inline = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`${_style_html(`--M_a0:${_escape_style_value(input.block)};--M_a1:${_escape_style_value(input.inline)};`)}${_el_resume($scope0_id, "a", $sg__input_block__OR__input_inline)}<div class=box>Hi</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
