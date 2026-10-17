// tags/swatch.marko
var swatch_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_color = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`${_style_html(`--M_b0:${_escape_style_value(input.color)};`)}${_el_resume($scope0_id, "a", $wg__input_color)}<div class=swatch></div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_colors = _write_guard($scope0_reason, 2), $wg__input_show__OR__input_color = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.colors, (color) => {
		const $scope1_id = _scope_id();
		_set_scope_reason($wg__input_colors << 1);
		const $childScope = _peek_scope_id();
		swatch_default({ color });
		_write_if($scope0_reason, 2) && _scope($scope1_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "a", $wg__input_colors, $wg__input_colors);
	_dynamic_tag($scope0_id, "b", input.show ? swatch_default : null, { color: input.color }, 0, 0, $wg__input_show__OR__input_color);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		f: _write_if($scope0_reason, 4) && input.show,
		g: _write_if($scope0_reason, 3) && input.color
	});
}, 1);
