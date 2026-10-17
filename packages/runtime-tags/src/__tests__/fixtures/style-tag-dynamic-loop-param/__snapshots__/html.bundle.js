// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_colors = _write_guard($scope0_reason, 0), $wi__input_colors = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.colors, (color) => {
		const $scope1_id = _scope_id();
		_html(`${_style_html(`--M_a0:${_escape_style_value(color)};`)}${_el_resume($scope1_id, "a", $wg__input_colors)}<div class=box>${_text_resume($scope1_id, "b", color, $wg__input_colors)}</div>`);
		$wi__input_colors && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_colors, $wg__input_colors);
	_html("<span>after</span>");
	$wi__input_colors && _scope($scope0_id, {});
}, 1);
