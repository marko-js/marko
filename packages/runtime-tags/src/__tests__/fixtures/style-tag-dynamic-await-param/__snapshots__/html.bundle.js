// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_color = _write_guard($scope0_reason, 2), $wi__input_color = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", resolveAfter(input.color, 1), (color) => {
				const $scope2_id = _scope_id();
				_html(`${_style_html(`--M_a0:${_escape_style_value(color)};`)}${_el_resume($scope2_id, "a", $wg__input_color)}<div class=later></div>`);
				$wi__input_color && _scope($scope2_id, {});
			}, $wg__input_color);
			_await($scope1_id, "b", input.color, (color) => {
				const $scope3_id = _scope_id();
				_html(`${_style_html(`--M_a1:${_escape_style_value(color)};`)}${_el_resume($scope3_id, "a", $wg__input_color)}<div class=now></div>`);
				$wi__input_color && _scope($scope3_id, {});
			}, $wg__input_color);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: $wi__input_color && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.color });
}, 1);
